import plus from "../../assets/icons/sin-desplegar.svg";
export default function SlideQuestions() {
  return (
    <>
      <div className="relative w-11/12 md:w-7/12 overflow-hidden mt-12 bg-white border rounded-t-lg">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />

        <div className="bg-white border-1px w-full pl-5 flex items-center md:justify-center h-16 md:h-14">
          <h2 className="text-xs md:text-lg font-semibold text-left md:text-center">
            ¿El Sistema de software instalado puede
            <br />
            apagar el vehículo en caso de robo?
          </h2>
        </div>

        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
          <img src={plus} />
        </div>

        <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
          <div className="p-3">
            <p className="text-xs md:text-lg">
              Sí, el sistema de robo puede frustrar un robo en acción ya que la
              tecnología instalada nos permite apagar el motor en vivo lass 24hr
              y, además podremos ver la ubicación del vehículo.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-11/12 md:w-7/12 overflow-hidden bg-white border rounded-t-lg">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />

        <div className="bg-white border-1px w-full pl-5 flex items-center md:justify-center h-16 md:h-14">
          <h2 className="text-xs md:text-lg font-semibold text-left md:text-center">
            ¿Qué pasa si decido salir del país?
          </h2>
        </div>

        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
          <img src={plus} />
        </div>

        <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
          <div className="p-3">
            <p className="text-xs md:text-lg">
              Sí, el sistema de robo puede frustrar un robo en acción ya que la
              tecnología instalada nos permite apagar el motor en vivo lass 24hr
              y, además podremos ver la ubicación del vehículo.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-11/12 md:w-7/12 overflow-hidden mb-12 bg-white border rounded-t-lg">
        <input
          type="checkbox"
          class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
        />

        <div className="bg-white border-1px w-full pl-5 flex items-center md:justify-center h-16 md:h-14">
          <h2 className="text-xs md:text-lg font-semibold text-left md:text-center">
            ¿El Sistema de software instalado puede
            <br />
            apagar el vehículo en caso de robo?
          </h2>
        </div>

        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
          <img src={plus} />
        </div>

        <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
          <div className="p-3">
            <p className="text-xs md:text-lg">
              Sí, el sistema de robo puede frustrar un robo en acción ya que la
              tecnología instalada nos permite apagar el motor en vivo lass 24hr
              y, además podremos ver la ubicación del vehículo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
