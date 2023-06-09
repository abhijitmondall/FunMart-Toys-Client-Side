import Styles from "./AllToys.module.scss";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Toys from "./Toys/Toys";
import Spinner from "../../Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import Icons from "./../../../assets/icons.svg";
import SectionTitle from "../../SectionTitle/SectionTitle";
import PageTitle from "../../PageTitle/PageTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  const [toyName, setToyName] = useState("");

  useEffect(() => {
    (async () => {
      const data = await useFetch(
        `toys?fields=sellerName,toyPicture,toyName,subCategory,price,availableQuantity&limit=20&text[search]=${toyName}`
      );
      setToys(data.toys);

      setLoading(false);
    })();
  }, [toyName]);

  const handleToysSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    setToyName(form.search.value);
    form.reset();
  };

  return (
    <section className={`${Styles["toys"]} container`}>
      <PageTitle>FunMart Toys | All Toys</PageTitle>;
      <div className={Styles["toys__wrap"]}>
        <SectionTitle className={{ className: `${Styles["toys__title"]}` }}>
          All Toys
        </SectionTitle>
        <form onSubmit={handleToysSearch} className={Styles["search"]}>
          <input
            type="text"
            name="search"
            className={Styles["search__input"]}
            placeholder="Search Toys By Toy Name"
          />
          <button type="submit" className={Styles["search__btn"]}>
            <svg className={Styles["search__icon"]}>
              <use xlinkHref={`${Icons}#icon-magnifying-glass`}></use>
            </svg>
          </button>
        </form>

        <div className={Styles["toys__lists-wrap"]}>
          <div
            className={`${Styles["toys__lists"]} ${Styles["toys__lists-header"]}`}
          >
            <div>Toy Picture</div>
            <div>Seller Name</div>
            <div>Toy Name</div>
            <div>Sub-category</div>
            <div className="text-center">Price</div>
            <div className="text-center">Available Quantity</div>
            <div></div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            toys.map((toy) => <Toys key={toy._id} toy={toy} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default AllToys;
