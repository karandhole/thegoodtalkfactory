import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper"; // Removed Pagination
import "swiper/css";
import "swiper/css/navigation";

export default class GalleryOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <>
        <section className="gallery-page">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Gallery</span>
              <h2 className="section-title__title">#CelebratingTogetherness</h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={false} // Removed pagination bullets
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="gallery-slider"
            >
              {["gallery1.JPG", "gallery2.JPG", "gallery3.JPG", "gallery4.JPG", "gallery5.JPG", "gallery6.JPG"].map(
                (image, index) => (
                  <SwiperSlide key={index}>
                    <div className="gallery-page__single">
                      <div className="gallery-page__img">
                        <img src={`${publicUrl}assets/images/gallery/${image}`} alt={`Gallery ${index + 1}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev">&#10094;</div>
            <div className="custom-swiper-button-next">&#10095;</div>
          </div>
        </section>

        {/* Custom CSS for smaller arrows */}
        <style jsx>{`
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            font-size: 16px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            z-index: 10;
          }
          .custom-swiper-button-prev {
            left: 20px;
          }
          .custom-swiper-button-next {
            right: 20px;
          }
          .gallery-page {
            position: relative;
          }
        `}</style>
      </>
    );
  }
}
