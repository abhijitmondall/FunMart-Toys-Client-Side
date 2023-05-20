import { useLoaderData } from "react-router-dom";
import Styles from "./ToyDetails.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StarRatings from "react-star-ratings";
import Button from "../../UI/Button/Button";

const ToyDetails = () => {
  const data = useLoaderData();

  const {
    toyPicture,
    toyName,
    ratings,
    availableQuantity,
    price,
    description,
    sellerEmail,
    sellerName,
  } = data.toy;

  return (
    <section className={`${Styles["toyDetails"]} container`}>
      <div className={Styles["toyDetails__wrap"]}>
        <div className={Styles["toyDetails__toy-details"]}>
          <figure className={Styles["toyDetails__img-wrap"]}>
            <img src={toyPicture} alt={toyName} />
          </figure>

          <div className={Styles["toyDetails__toy-info"]}>
            <div>
              <h2 className={Styles["toyDetails__toy-name"]}>{toyName}</h2>
              <div>
                <StarRatings
                  rating={ratings}
                  starRatedColor="#f8bd23 "
                  name="rating"
                  starDimension="2rem"
                  starSpacing=".1rem"
                />
                ( {ratings})
                <div className={Styles["toyDetails__toy-content"]}>
                  <p className={Styles["toyDetails__toy-stock"]}>
                    Available Quantity: {availableQuantity}
                  </p>
                  <h3 className={Styles["toyDetails__toy-price"]}> ${price}</h3>

                  <Button
                    className={{
                      className: `${Styles["toyDetails__cart-btn"]}`,
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>

            <div className={Styles["toyDetails__tabs"]}>
              <Tabs className={Styles["toyDetails__tabs-wrap"]}>
                <TabList className={Styles["toyDetails__tabs-title-wrap"]}>
                  <Tab>Description</Tab>
                  <Tab>Seller Information</Tab>
                </TabList>

                <TabPanel className={Styles["toyDetails__tab-content"]}>
                  <p> {description}</p>
                </TabPanel>

                <TabPanel className={Styles["toyDetails__tab-content"]}>
                  <div>
                    <p>Seller Name: {sellerName}</p>
                    <p>Seller Email: {sellerEmail}</p>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
