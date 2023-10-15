import { Button } from "../../Components";

export default function ContainerBill() {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="border max-w-md md:w-full w-11/12 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mt-2 mb-4">
          Contrato de plan
        </h2>
        <hr />

        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-center text-sky-400 mt-8 mb-4">
            Plan Gold
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
            <p className="font-bold">25/10/2023</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto  h-10">
            <p className=" ">Fecha fin:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className="font-bold">25/11/2023</p>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/3 mx-auto  h-10">
            <p className=" ">Fecha fin:</p>
          </div>
          <div className="w-1/3  mx-auto h-10">
            <p className="text-blue-700">
              <a href="#" class="text-xs">
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
            <p className="font-bold">$22.99</p>
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
      </div>
    </div>
  );
}
