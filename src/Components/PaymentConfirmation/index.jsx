/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button, FormWindow} from "../../Components";
import like from "../../assets/icons/like.svg";
import star from "../../assets/icons/star.png";


export default function PaymentConfirmation({ valoresForms,setValoresForms }) {
  return (

    <FormWindow className="border flex flex-col">
      <div className="bg-gradient-to-r from-sky-700 to-blue-900 py-6 flex justify-center rounded-t-2xl">
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
          {setValoresForms.value}
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
            className="md:w-11/12"
          />
        </Link>

      </div>
    </FormWindow>
  );
}
