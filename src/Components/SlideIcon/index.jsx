import star from "../../assets/icons/star.png";
import moneyBag from "../../assets/icons/bolsa-dinero.png";
import arrow from "../../assets/icons/arrow.svg";

export default function SlideIcon() {
  return (
    <div class="flex flex-col justify-center items-center">
      <img class="md:w-36 w-24 mt-8" src={moneyBag} />

      <div>
        <div class="flex flex-row justify-center items-center text-center">
          <button class="rounded-full bg-white md:w-12 md:h-12 w-16 h-12 flex justify-center items-center click md:me-4 me-1  hover:bg-skyblue-select  hover:shadow-cyan-200/50">
            <img class="w-4" src={arrow} />
          </button>

          <h3 class="mt-8 w-11/12 md:w-7/12 text-center md:text-xl text-sm font-semibold text-sub">
            Protección financiera
          </h3>

          <button class="rounded-full bg-white md:w-12 md:h-12 w-16 h-12 flex justify-center items-center click md:ms-4 ms-1 rotate-180 hover:bg-skyblue-select  hover:shadow-cyan-200/50">
            <img class="w-4" src={arrow} />
          </button>
        </div>
      </div>

      <div class="flex flex-row justify-center items-center gap-4 mt-8">
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
