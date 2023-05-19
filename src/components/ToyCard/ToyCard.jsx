import Card from "../UI/Card/Card";
import Styles from "./ToyCard.module.scss";
import StarRatings from "react-star-ratings";

const ToyCard = ({ toy }) => {
  const { toyPicture, toyName, price, ratings } = toy;

  return (
    <Card className={{ className: `${Styles["toy-card"]}` }}>
      <div className={Styles["toy__fig"]}>
        <img src={toyPicture} alt={toyName} className={Styles["toy__img"]} />

        <div className={Styles["toy__btn-wrap"]}>
          <button className={`${Styles["toy__btn-view"]}`}>View</button>
          <button className={`${Styles["toy__btn-cart"]}`}>Add To Cart</button>
        </div>
      </div>

      <div className={Styles["toy__content"]}>
        <h5 className={Styles["toy__name"]}>{toyName}</h5>
        <div className={Styles["toy__info"]}>
          <div>
            <StarRatings
              rating={ratings}
              starRatedColor="#f8bd23 "
              name="rating"
              starDimension="2rem"
              starSpacing=".1rem"
            />
            ( {ratings})
          </div>
          <p className={Styles["toy__price"]}>${price}</p>
        </div>
      </div>
    </Card>
  );
};

export default ToyCard;
