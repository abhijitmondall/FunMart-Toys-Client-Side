import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Styles from "./Gallery.module.scss";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Gallery = () => {
  const [toyPicture, setToyPicture] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await useFetch(
        `https://fun-mart-toys-api-v1.vercel.app/api/v1/toys?fields=toyPicture&limit=9`
      );

      setToyPicture(data.toys);

      console.log(data.toys);
    })();
  }, []);
  return (
    <section className={`${Styles["gallery"]} container`}>
      <div className={Styles["gallery__wrap"]}>
        <SectionTitle>Our Gallery</SectionTitle>

        <div className={Styles["gallery__images"]}>
          <LightGallery speed={500}>
            {toyPicture.map((el) => (
              <a key={el._id} href={el.toyPicture}>
                <img alt="img1" src={el.toyPicture} />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
