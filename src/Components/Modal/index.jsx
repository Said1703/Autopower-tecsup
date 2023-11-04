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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                lacinia nulla consequat tincidunt facilisis. Nam imperdiet,
                lacus sed interdum lobortis, felis mi eleifend lacus, quis
                maximus sapien ex at sapien. Morbi non consequat lacus. Donec ut
                dui nibh. Integer tristique suscipit arcu eget maximus. Mauris
                at hendrerit nibh. Proin pretium diam vel odio efficitur, ac
                suscipit diam posuere. Vivamus quis tincidunt tellus. Etiam arcu
                tortor, mattis at ornare quis, tempor ac eros.
              </p>
              <p className="md:hidden text-white p-4 mb-2 md:mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                lacinia nulla consequat tincidunt facilisis. Nam imperdiet,
                lacus sed interdum lobortis, felis mi eleifend lacus, quis
                maximus sapien ex at sapien.
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
