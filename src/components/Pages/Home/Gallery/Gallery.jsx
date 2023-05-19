import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import Styles from "./Gallery.module.scss";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import SectionTitle from "../../../SectionTitle/SectionTitle";

const Gallery = () => {
  const [toyInfo, setToyInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await useFetch(`toys?fields=toyPicture,toyName&limit=9`);
      setToyInfo(data.toys);
    })();
  }, []);

  return (
    <section className={`${Styles["gallery"]} container`}>
      <div className={Styles["gallery__wrap"]}>
        <SectionTitle>Our Gallery</SectionTitle>

        <div className={Styles["gallery__images"]}>
          <LightGallery speed={500}>
            {toyInfo.map((el) => (
              <a key={el._id} href={el.toyPicture}>
                <img alt={el.toyName} src={el.toyPicture} />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
