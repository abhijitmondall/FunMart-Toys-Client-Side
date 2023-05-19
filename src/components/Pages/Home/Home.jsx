import Gallery from "./Gallery/Gallery";
import HeroBanner from "./HeroBanner/HeroBanner";
import Styles from "./Home.module.scss";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Gallery />
      <ShopByCategory />
    </>
  );
};

export default Home;
