import Gallery from "./Gallery/Gallery";
import HeroBanner from "./HeroBanner/HeroBanner";
import Styles from "./Home.module.scss";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TopToys from "./TopToys/TopToys";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Gallery />
      <ShopByCategory />
      <TopToys />
    </>
  );
};

export default Home;
