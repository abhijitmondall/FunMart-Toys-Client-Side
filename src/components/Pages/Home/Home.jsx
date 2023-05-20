import Gallery from "./Gallery/Gallery";
import HeroBanner from "./HeroBanner/HeroBanner";
import Styles from "./Home.module.scss";
import PromoSection from "./PromoSection/PromoSection";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TopToys from "./TopToys/TopToys";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Gallery />
      <ShopByCategory />
      <TopToys />
      <PromoSection />
    </>
  );
};

export default Home;
