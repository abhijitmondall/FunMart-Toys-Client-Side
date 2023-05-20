import Styles from "./PromoSection.module.scss";
import { MdLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { FaGift } from "react-icons/fa";

const PromoSection = () => {
  return (
    <section className={`${Styles["promo"]} container`}>
      <div className={Styles["promo__wrap"]}>
        <div className={`${Styles["promo__info"]} ${Styles["promo__info--1"]}`}>
          <div className={`${Styles["promo__fig"]} ${Styles["promo__fig--1"]}`}>
            <MdLocalShipping />
          </div>
          <div>
            <h5 className={Styles["promo__title"]}>FREE SHIPPING</h5>
            <p>
              Don’t worry! The orders always <br />
              arrive on time.
            </p>
          </div>
        </div>

        <div className={`${Styles["promo__info"]} ${Styles["promo__info--2"]}`}>
          <div className={`${Styles["promo__fig"]} ${Styles["promo__fig--2"]}`}>
            <TbTruckReturn />
          </div>
          <div>
            <h5 className={Styles["promo__title"]}>FREE RETURNS</h5>
            <p>
              All returns are subject to verification <br /> of original sale.
            </p>
          </div>
        </div>

        <div className={`${Styles["promo__info"]} ${Styles["promo__info--3"]}`}>
          <div className={`${Styles["promo__fig"]} ${Styles["promo__fig--3"]}`}>
            <FaGift />
          </div>
          <div>
            <h5 className={Styles["promo__title"]}>GIFT CARDS</h5>
            <p>
              The perfect gift for everyone, <br />
              it is a gift card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
