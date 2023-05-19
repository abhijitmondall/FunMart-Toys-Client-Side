import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Styles from "./ShopByCategory.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFetch from "../../../../hooks/useFetch";
import Toy from "./Toy/Toy";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [subCategory, setSubCategory] = useState("Racing Cars");

  useEffect(() => {
    (async () => {
      const data = await useFetch(
        `toys?fields=toyPicture,toyName,price,ratings,subCategory&subCategory=${subCategory}`
      );
      console.log(data.toys);
      setToys(data.toys);
    })();
  }, [subCategory]);

  const handleTabs = (e) => {
    setSubCategory(e.target.textContent.trim());
    console.log(e.target.textContent.trim());
  };

  const toysByCategory = () => {
    return toys.map((toy) => <Toy key={toy._id} toy={toy} />);
  };

  return (
    <section className={`${Styles["shopByCategory"]} container`}>
      <div className={Styles["shopByCategory__wrap"]}>
        <SectionTitle>Shop By Category</SectionTitle>

        <div className={Styles["shopByCategory__tabs"]}>
          <Tabs className={Styles["shopByCategory__tabs-wrap"]}>
            <TabList className={Styles["shopByCategory__tabs-title-wrap"]}>
              <Tab
                onClick={handleTabs}
                className={Styles["shopByCategory__tab-title"]}
              >
                Racing Cars
              </Tab>
              <Tab
                onClick={handleTabs}
                className={Styles["shopByCategory__tab-title"]}
              >
                Convertible Cars
              </Tab>
              <Tab
                onClick={handleTabs}
                className={Styles["shopByCategory__tab-title"]}
              >
                Monster Trucks
              </Tab>
            </TabList>

            <TabPanel className={Styles["shopByCategory__tab-content"]}>
              {toysByCategory()}
            </TabPanel>

            <TabPanel className={Styles["shopByCategory__tab-content"]}>
              {toysByCategory()}
            </TabPanel>

            <TabPanel className={Styles["shopByCategory__tab-content"]}>
              {toysByCategory()}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
