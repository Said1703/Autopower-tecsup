/* eslint-disable react/prop-types */
import { Button, FormWindow } from "../../Components";

export default function ContainerBill({ setActiveStep }) {
  const today = new Date();

  const datePeriodo = new Date();
  datePeriodo.setMonth(datePeriodo.getMonth() + 1);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setActiveStep(2);
  };

  const planSeleccionado = JSON.parse(
    localStorage.getItem("plan_seleccionado")
  );

  return (
    <FormWindow>
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-2xl font-bold text-center mt-2 mb-4">
          Contrato de plan
        </h2>
        <hr />

        <div className="flex justify-center">

          <h1 className="text-2xl font-bold text-center text-sky-400 mt-8 mb-4">
            {planSeleccionado.plan}
          </h1>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto  h-10">
            <p className=" ">Vigencia:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className=" font-bold ">Mensual</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto  h-10">
            <p className=" ">Fecha de Inicio:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className="font-bold">{today.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto  h-10">
            <p className=" ">Fecha fin:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className="font-bold">{datePeriodo.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto  h-10">
            <p className=" ">Contrato:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className="text-blue-700">
              <a href="#" className="text-xs">
                Término de contrato
              </a>
            </p>
          </div>
        </div>

        <hr />

        <div className="flex mb-4 mt-5">
          <div className="w-1/3 mx-auto  h-10">
            <p className="">Tarifa Mensual:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className="font-bold">${planSeleccionado.precio}</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto  h-10">
            <p className="">IGV:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className="font-bold">0%</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto h-10">
            <p className="">Pago total:</p>
          </div>
          <div className="w-1/3  mx-auto h-12">
            <p className="font-bold">$22.99</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <Button type="submit" text="siguiente" variant="primary" />
        </div>
      </form>
    </FormWindow>
  );
}
