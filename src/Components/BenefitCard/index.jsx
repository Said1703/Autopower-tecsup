import moneyBag from "../../assets/icons/bolsa-dinero.png";
import security from "../../assets/icons/security.png";
import technology from "../../assets/icons/technology.png";

export default function BenefitCard() {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-wrap">
        <div className=" w-full md:w-4/12 px-4 text-center mt-8">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className=" px-4 py-4 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full">
                <img src={moneyBag} alt="" />
              </div>
              <h6 className="text-xl font-semibold">Ahorro</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Nuestra póliza de seguro reconoce el ahorro y te recompensa con
                primas más asequibles.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 px-4 text-center mt-8">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-4 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full">
                <img src={technology} alt="" />
              </div>
              <h6 className="text-xl font-semibold">Tecnología Avanzada</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Te proporcionamos repuestos y tecnología de la más alta calidad
                para disfrutar de tu vehículo eléctrico al máximo.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-4/12 px-4 text-center mt-8">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-4 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full">
                <img className="" src={security} alt="" />
              </div>
              <h6 className="text-xl font-semibold">Seguridad</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Garantizamos que puedas seguir disfrutando de tu experiencia de
                conducción eléctrica con total seguridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
