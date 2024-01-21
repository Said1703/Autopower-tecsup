/* eslint-disable react/prop-types */
import "react-credit-cards-2/dist/es/styles-compiled.css";
import FormWindow from "../FormWindow";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import { storeBuy } from "../../services";

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY);

const planSeleccionado = JSON.parse(
  localStorage.getItem("plan_seleccionado")
);


export default function ContainerData({ setActiveStep }) {
  const initialization = {
    amount: Number(planSeleccionado.precio),
  };

  const handleFormSubmit = async (formData) => {
    console.log(formData);
    await storeBuy(formData);
    setActiveStep(3);
  };

  
  return (
    <FormWindow>
      <h2 className="text-2xl font-bold text-center mt-2 mb-4 text-blue-900">
        Realiza tu pago
      </h2>
      <hr className="bg-blue-400" />

      <CardPayment
        initialization={initialization}
        onSubmit={handleFormSubmit}
      />
    </FormWindow>
  );
}
