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
import PageTitle from "../../PageTitle/PageTitle";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [toy, setToy] = useState([]);
  const [toyId, setToyId] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const { user, setLoading } = useContext(AuthContext);
  const [isPopup, setIsPopup] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await useFetch(
        `toys${toyId ? `/${toyId}` : ""}?${
          sortBy ? `sort=${sortBy}` : ""
        }fields=sellerName,toyPicture,toyName,subCategory,price,availableQuantity&sellerEmail=${
          user.email
        }`
      );

      setToys(data.toys);
      setToy(data.toy);
      setLoading(false);
    })();
  }, [toyId, isPopup, sortBy]);

  const handleToyUpdate = (id) => {
    setToyId(id);
    setIsPopup(false);
  };

  const handleToyDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Do you want to DELETE this Toy?",
      showDenyButton: true,
      confirmButtonText: "YES",
    });

    if (confirm.isConfirmed) {
      await fetch(`https://fun-mart-toys-api-v1.vercel.app/api/v1/toys/${id}`, {
        method: "DELETE",
      });

      const updatedToys = toys.filter((toy) => toy._id !== id);
      setToys(updatedToys);

      Swal.fire({
        title: "Successfully Deleted!",
      });
    }
  };

  const handlePopup = () => {
    setIsPopup(true);
    setToyId(null);
  };

  const handleSortBy = (e) => {
    const val = e.target.value;

    if (val === "price&" || val === "-price&") {
      setSortBy(val);
    } else {
      setSortBy("");
    }
  };

  return (
    <section className={`${Styles["myToys"]} container`}>
      <PageTitle>FunMart Toys | My Toys</PageTitle>

      <div className={Styles["myToys__wrap"]}>
        <SectionTitle className={{ className: `${Styles["myToys__title"]}` }}>
          My Toys
        </SectionTitle>

        <div className={Styles["myToys__sort"]}>
          <select
            onChange={handleSortBy}
            name="sort"
            id="sort"
            className={Styles["myToys__sortBy"]}
          >
            <option> Sort By Price</option>
            <option value="price&">Low To Hight</option>
            <option value="-price&">High To Low</option>
          </select>
        </div>

        <div className={Styles["myToys__lists-wrap"]}>
          {toys?.length !== 0 ? (
            toys?.map((toy) => (
              <MyToyLists
                key={toy._id}
                toy={toy}
                handleToyUpdate={handleToyUpdate}
                handleToyDelete={handleToyDelete}
              />
            ))
          ) : (
            <p className="text-center text-2x text-bold">
              You did not add any Toys yet!
            </p>
          )}
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
