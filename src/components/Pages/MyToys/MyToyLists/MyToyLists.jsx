import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Styles from "./MyToyLists.module.scss";
import Button from "../../../UI/Button/Button";

const MyToyLists = ({ toy, handleToyUpdate, handleToyDelete }) => {
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
    <div className={`${Styles["myToys__lists"]}`}>
      <img
        src={toyPicture}
        alt={sellerName}
        className={`${Styles["myToys__img"]}`}
      />
      <div>{toyName}</div>
      <div>{subCategory}</div>
      <div className="text-center">${price}</div>
      <div className="text-center">{availableQuantity}</div>
      <div>
        <Button
          btnObj={{ onClick: () => handleToyUpdate(_id) }}
          className={{ className: `${Styles["myToys__view-btn"]}` }}
        >
          <FiEdit />
        </Button>
        <Button
          btnObj={{ onClick: () => handleToyDelete(_id) }}
          className={{ className: `${Styles["myToys__view-btn"]}` }}
        >
          <RiDeleteBin5Line />
        </Button>
      </div>
    </div>
  );
};

export default MyToyLists;
