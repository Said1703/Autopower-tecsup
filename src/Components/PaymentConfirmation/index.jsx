/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button, FormWindow } from "../../Components";
import like from "../../assets/icons/like.svg";
import star from "../../assets/icons/star.png";

export default function PaymentConfirmation({ valoresForms }) {
  return (
    <FormWindow className={"border flex flex-col pb-14 md:h-[75.2vh]"}>
      <div className="bg-darkblue-select py-6 flex justify-center rounded-t-2xl">
        <img className="md:w-50 w-25 p-4" src={like} />
      </div>
      {/* 1 */}

      <div className="p-6 flex flex-col items-center justify-center text-center">
        <img className="w-8 py-5" src={star} />
        <h2 className="text-3xl font-bold">Gracias!</h2>
        <h3
          id="nameCongratulation"
          className="text-lg font-bold py-2 uppercase"
        >
          {valoresForms.nombre}
        </h3>

        <p className="pb-4">
          En breve te llamaremos para completar el registro de tu auto, los
          detalles del contrato se enviaron a tu correo electrónico.
        </p>

        <Link to={"/"}>
          <Button
            type="submit"
            text="Terminar"
            variant="primary"
            className="md:w-max"
          />
        </Link>
      </div>
    </FormWindow>
  );
}
