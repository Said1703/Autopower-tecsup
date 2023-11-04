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
    nombre: "",
    apellido: "",
    tipoDocumento: "0",
    numeroDoc: "",
    pais: "0",
    direccion: "",
    telefono: "",
    email: "",
    tipoVehiculo: "0",
    //estos datos los tengo que pasar globales verdad
  });

  return (
    <>
      <main className="bg-white-skyblue">
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
