import { Link } from "react-router-dom";
import modalImage from "../../../public/modal.jpg";
import modalImageResponsive from "../../../public/modal-responsive.jpg";
import CloseButton from "../CloseButton";
import Button from "../Button";

export default function Modal({ visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };
  if (visible) return null;
  return (
    <>
      <section
        onClick={handleOnClose}
        className="fixed inset-0 z-40 bg-black bg-opacity-40"
      >
        <div className="fixed top-16 left-0 right-0 bottom-10 w-full md:w-3/6 h-4/6 md:h-4/6 mx-auto bg-gray-900/80 rounded-xl backdrop-blur-md flex flex-col md:flex-row gap-8 z-50">
          <img
            className="hidden md:block h-auto rounded-l-xl"
            src={modalImage}
          />
          <img
            className="md:hidden w-auto rounded-t-xl"
            src={modalImageResponsive}
          />

          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:mb-6 mb-2">
              <CloseButton
                onClick={onClose}
                className="w-8 md:w-10 bg-white m-4 m p-3 left-5"
              />
            </div>
            <div className="flex flex-col justify-center justify-items-center text-center">
              <h3 className="text-white text-lg md:text-3xl mb-2 md:mb-5 font-bold">
                Bienvenido a Auto Power
              </h3>
              <p className="hidden md:block text-white p-4 mb-2 md:mb-4 text-sm">
                Nos complace que estés aquí, explorando las opciones para
                proteger tu vehículo eléctrico. Sabemos que has tomado una
                decisión consciente y sostenible al elegir un auto eléctrico, y
                queremos asegurarnos de que recibas la mejor cobertura posible.
                Nuestros planes de seguro están diseñados específicamente para
                autos eléctricos, teniendo en cuenta sus características y
                necesidades únicas. Ofrecemos una amplia gama de coberturas,
                desde daños por accidentes hasta problemas con la batería y el
                sistema de carga. Navega por nuestra página, conoce nuestras
                ofertas y no dudes en contactarnos si tienes alguna pregunta.
                Estamos aquí para ayudarte a mantener tu auto eléctrico seguro y
                en pleno funcionamiento. ¡Esperamos poder servirte pronto!
              </p>
              <p className="md:hidden text-white p-4 mb-2 md:mb-4 text-sm">
                Nos complace que estés aquí, explorando las opciones para
                proteger tu vehículo eléctrico. Sabemos que has tomado una
                decisión consciente y sostenible al elegir un auto eléctrico, y
                queremos asegurarnos de que recibas la mejor cobertura posible.
              </p>
              <Link to="/Benefits">
                <div className="flex justify-center">
                  <Button type="submit" text="Beneficios" variant="secondary" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
