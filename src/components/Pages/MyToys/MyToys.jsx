import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Styles from "./MyToys.module.scss";
import { AuthContext } from "../../../context/AuthProvider";
import useFetch from "../../../hooks/useFetch";
import MyToyLists from "./MyToyLists/MyToyLists";
import AddToyForm from "../../AddToyForm/AddToyForm";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [toy, setToy] = useState([]);
  const [toyId, setToyId] = useState(null);
  const { user, loading, setLoading } = useContext(AuthContext);
  const [isPopup, setIsPopup] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await useFetch(
        `toys${
          toyId ? `/${toyId}` : ""
        }?fields=sellerName,toyPicture,toyName,subCategory,price,availableQuantity&sellerEmail=${
          user.email
        }`
      );

      setToys(data.toys);
      setToy(data.toy);
      setLoading(false);
    })();
  }, [toyId, isPopup]);

  const handleToyUpdate = (id) => {
    setToyId(id);
    setIsPopup(false);
  };

  const handleToyDelete = async (id) => {
    let res = await fetch(
      `https://fun-mart-toys-api-v1.vercel.app/api/v1/toys/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    // const data = await res.json();

    const updatedToys = toys.filter((toy) => toy._id !== id);
    setToys(updatedToys);
    console.log(id, updatedToys);
  };

  const handlePopup = () => {
    setIsPopup(true);
    setToyId(null);
  };

  return (
    <section className={`${Styles["myToys"]} container`}>
      <div className={Styles["myToys__wrap"]}>
        <SectionTitle className={{ className: `${Styles["myToys__title"]}` }}>
          My Toys
        </SectionTitle>

        <div className={Styles["myToys__lists-wrap"]}>
          {toys?.map((toy) => (
            <MyToyLists
              key={toy._id}
              toy={toy}
              handleToyUpdate={handleToyUpdate}
              handleToyDelete={handleToyDelete}
            />
          ))}
        </div>

        {!isPopup &&
          createPortal(
            <div className={`${Styles["myToys__form"]}`}>
              <div className={Styles["myToys__form-container"]}>
                <AddToyForm
                  info={toy}
                  methodType="PATCH"
                  className={{ className: `${Styles["myToys__form--wrap"]}` }}
                >
                  Update Toy
                </AddToyForm>

                <div
                  onClick={handlePopup}
                  className={Styles["myToys__form-close"]}
                >
                  <RxCross2 />
                </div>
              </div>
            </div>,
            document.getElementById("portal")
          )}
      </div>
    </section>
  );
};

export default MyToys;
