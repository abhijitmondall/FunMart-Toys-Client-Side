import { Link } from "react-router-dom";
import Styles from "./Toys.module.scss";
import Button from "../../../UI/Button/Button";

const Toys = ({ toy }) => {
  const {
    _id,
    sellerName,
    toyPicture,
    toyName,
    subCategory,
    price,
    availableQuantity,
  } = toy;

  return (
    <div className={`${Styles["toys__lists"]}`}>
      <img
        src={toyPicture}
        alt={sellerName}
        className={`${Styles["toys__img"]}`}
      />
      <div>{sellerName}</div>
      <div>{toyName}</div>
      <div>{subCategory}</div>
      <div>{price}</div>
      <div>{availableQuantity}</div>
      <div>
        <Link to={`/toy/${_id}`}>
          <Button className={{ className: `${Styles["toys__view-btn"]}` }}>
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Toys;
