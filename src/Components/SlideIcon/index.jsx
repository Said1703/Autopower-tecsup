import star from "../../assets/icons/star.png";
import moneyBag from "../../assets/icons/bolsa-dinero.png";
import arrow from "../../assets/icons/arrow.svg";
import CircleButton from "../CircleButton";
export default function SlideIcon() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="md:w-36 w-24 mt-8" src={moneyBag} />

      <div>
        <div className="flex flex-row justify-center items-center text-center">
          <CircleButton type="button" variant="right" />

          <h3 className="mt-8 w-11/12 md:w-7/12 text-center md:text-xl text-sm font-semibold text-sub">
            Protección financiera
          </h3>

          <CircleButton type="button" variant="left" />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 mt-8">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <h3 class="mt-8 mb-8 text-center">
        Te protegemos financieramente en caso de accidentes automovilístico.
      </h3>
    </div>
  );
}
