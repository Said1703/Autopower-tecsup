import { useState } from "react";

import {
  ContainerPayment,
  ContainerForm,
  ContainerBill,
  PaymentConfirmation,
  Status,
} from "../../Components";
export default function BuyService() {
  // En este componente deben tener los inputs a nivel de variable y el setValoresForm como lo pasamos ?
  const [valoresForms, setValoresForms] = useState({
    user_name: "",
    last_name: "",
    tipo_documento: "0",
    numero_doc: "",
    pais: "0",
    placa_vehiculo: "",
    telefono: "",
    email: "",
    tipo_vehiculo: "0",
    //estos datos los tengo que pasar globales verdad
  });

  return (
    <>
      <main className="h-full pt-20 pb-4 bg-white-skyblue">
        <Status
          valoresForms={valoresForms}
          setValoresForms={setValoresForms}
          Step1={ContainerForm}
          Step2={ContainerBill}
          Step3={ContainerPayment}
          Step4={PaymentConfirmation}
        />
      </main>
    </>
  );
}
