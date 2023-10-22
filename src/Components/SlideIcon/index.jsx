import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import star from "../../assets/icons/star.png";
import moneyBag from "../../assets/icons/bolsa-dinero.png";
import Carclean from "../../assets/icons/car-clean.png";
import Mecanism from "../../assets/icons/mecanism.png";
export default function SlideIcon() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img className="md:w-36 w-24 mt-8" src={moneyBag} />

            <div>
              <div className="flex flex-row justify-center items-center text-center">
                <h3 className="mt-8 w-11/12 md:w-7/12 text-center md:text-xl text-sm font-semibold text-sub">
                  Protección financiera
                </h3>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <h3 className="mt-8 mb-8 text-center">
              Te protegemos financieramente en caso de accidentes
              automovilístico.
            </h3>
          </div>
        </SwiperSlide>
        {/* slide1 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img className="md:w-36 w-24 mt-8" src={Carclean} />

            <div>
              <div className="flex flex-row justify-center items-center text-center">
                <h3 className="mt-8 w-11/12 md:w-7/12 text-center md:text-xl text-sm font-semibold text-sub">
                  Auto Limpio cuando quieras
                </h3>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <h3 className="mt-8 mb-8 text-center">
              Puedes separa el dia del labado del auto hasta 4 veces al mes de
              la suscripción
            </h3>
          </div>
        </SwiperSlide>
        {/* slide2 */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center">
            <img className="md:w-36 w-24 mt-8" src={Mecanism} />

            <div>
              <div className="flex flex-row justify-center items-center text-center">
                <h3 className="mt-8 w-11/12 md:w-7/12 text-center md:text-xl text-sm font-semibold text-sub">
                  Revisión técnica software y hardware
                </h3>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <h3 className="mt-8 mb-8 text-center">
              Revisaremos el sistema de tu auto mensualmente para asegurarnos de
              ti
            </h3>
          </div>
        </SwiperSlide>
        {/* slide3 */}
      </Swiper>
    </>
  );
}
