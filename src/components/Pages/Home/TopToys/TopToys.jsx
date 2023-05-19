import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Styles from "./TopToys.module.scss";
import useFetch from "../../../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import ToyCard from "../../../ToyCard/ToyCard";

const TopToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await useFetch(
        `toys?sort=-ratings&fields=toyPicture,toyName,price,ratings,subCategory&limit=10`
      );
      console.log(data.toys);
      setToys(data.toys);
    })();
  }, []);

  return (
    <section className={`${Styles["topToys"]} container`}>
      <div className={Styles["topToys__wrap"]}>
        <SectionTitle className={{ className: `${Styles["topToys__title"]}` }}>
          Best Sellers
        </SectionTitle>

        <div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {toys.map((toy) => (
              <SwiperSlide key={toy._id}>
                <ToyCard toy={toy} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopToys;
