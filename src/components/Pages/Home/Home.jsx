import Gallery from "./Gallery/Gallery";
import HeroBanner from "./HeroBanner/HeroBanner";
import Styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Gallery />
    </>
  );
};

export default Home;
