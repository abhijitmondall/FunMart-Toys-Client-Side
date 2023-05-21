import PageTitle from "../../PageTitle/PageTitle";
import Gallery from "./Gallery/Gallery";
import HeroBanner from "./HeroBanner/HeroBanner";
import PromoSection from "./PromoSection/PromoSection";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TopToys from "./TopToys/TopToys";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init({
    disable: "mobile",
    offset: 200,
    duration: 1200,
    easing: "ease-in-out-back",
    delay: 0,
  });
  AOS.refresh();

  return (
    <>
      <PageTitle>FunMart Toys | Home</PageTitle>
      <HeroBanner />
      <Gallery />
      <ShopByCategory />
      <TopToys />
      <PromoSection />
    </>
  );
};

export default Home;
