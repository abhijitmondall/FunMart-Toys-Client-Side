import Styles from "./AllToys.module.scss";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Toys from "./Toys/Toys";
import Spinner from "../../Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import Icons from "./../../../assets/icons.svg";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  const [toyName, setToyName] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await useFetch(
        `toys?fields=sellerName,toyPicture,toyName,subCategory,price,availableQuantity&limit=20&text[search]=${toyName}`
      );
      setToys(data.toys);
      console.log(data.toys);
      setLoading(false);
    })();
  }, [toyName]);

  const handleToysSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    setToyName(form.search.value);
    console.log(form.search.value);
  };

  return (
    <section className={`${Styles["toys"]} container`}>
      <div className={Styles["toys__wrap"]}>
        <h1>all toys</h1>
        <form onSubmit={handleToysSearch} className={Styles["search"]}>
          <input
            type="text"
            name="search"
            className={Styles["search__input"]}
            placeholder="Search Toys By Name"
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
            <div>Price</div>
            <div>Available Quantity</div>
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
