import { useState } from "react";
import {
  ContainerPriceBasic,
  ContainerPriceGold,
  ContainerPricePlatinum,
  Hero,
  SliderIcon,
  SlideQuestions,
  Modal,
} from "../../Components";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(true);

  return (
    <>
      <main className="bg-white-skyblue">
        <Hero />
        <section className="mt-6 md:mt-24 w-[70%] m-auto">
          <h2 className="text-lg lg:text-4xl text-center my-3 font-bold tracking-wider">
            Conoce nuestros planes de seguro vehicular
          </h2>
          <div className="md:flex mt-8 md:mt-16 gap-12 ">
            <ContainerPriceBasic />
            <ContainerPriceGold />
            <ContainerPricePlatinum />
          </div>
        </section>

        <section className="mt-12 w-[90%] m-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            Razones para proteger tu vehiculo
          </h2>
          <SliderIcon />
        </section>

        <section className="flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl font-bold">
            Preguntas frecuentes
          </h2>
          <SlideQuestions />
        </section>
      </main>

      <Modal onClose={handleOnClose} visible={showModal} />
    </>
  );
}
