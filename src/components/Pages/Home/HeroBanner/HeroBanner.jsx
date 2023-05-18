import Styles from "./HeroBanner.module.scss";
import heroBG from "./../../../../assets/img/Hero-BG.png";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const HeroBanner = () => {
  return (
    <section className={`${Styles["hero"]} container`}>
      <div className={Styles["hero__wrap"]}>
        <figure className={Styles["hero__fig"]}>
          <img src={heroBG} alt="" className={Styles["hero__img"]} />
        </figure>

        <div className={Styles["hero__content"]}>
          <h1 className={Styles["hero__title"]}>
            <span>
              Fuel Your Child's Imagination with Toy Cars at FunMart Toys!
            </span>
          </h1>
          <p className={Styles["hero__subtitle"]}>
            Unleash the Joy of Speed and Adventure with our <br /> Exciting
            Collection of Toy Cars!
          </p>

          <div className={Styles["hero__btn"]}>
            <Link to="/allToys">
              <span>
                Shop Now <BsArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
