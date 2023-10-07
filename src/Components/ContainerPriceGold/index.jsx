export default function ContainerPriceGold() {
  return (
    <div className="mt-12 md:mt-0 bg-darkblue-select rounded-2xl md:w-[33%] md:h-[33%]">
      <h2 className="text-center italic text-white rounded-t-2xl tracking-wide font-semibold">
        Plan recomendado
      </h2>

      <div className="border border-darkblue-select rounded-2xl flex flex-col bg-white md:h-[10%]">
        <h2 className="mt-4 pb-4 text-center text-2xl font-bold tracking-widest border-b-2  w-[90%] mx-auto color-#1F3142 ">
          Plan Gold
        </h2>

        <p className="text-center italic text-sm text-slate-700 ">
          ANTES US$ 29.99
        </p>

        <h2 className="text-3xl font-bold mb-2 text-center color-#1F3142">
          US$ 22.99
        </h2>

        <button className="bg-sky-400 text-white font-semibold py-2  tracking-widest rounded-md mx-10 hover:bg-sky-400 hover:shadow-lg hover:shadow-cyan-200/50">
          <a href="./pages/informacion-personal.html">Cotizar</a>
        </button>

        <ul>
          <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left mt-4  bg-[#d4f4fd] h-20">
            <div>
              <p className="font-semibold tracking-wide ">
                ⭐ Seguro contra robos del 35%:
              </p>
              <p className="text-xs ml-6 ">
                Si tu miedo es el robo de tu vehiculo, este plan te cubrira ante
                esta situacion para tu tranquilidad.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20">
            <div>
              <p className="font-semibold tracking-wide ">
                ⭐ Asistencia las 24 horas:
              </p>
              <p className="text-xs ml-6 ">
                Tendras asistencia ambulatoria, auxilio mecanico, entre otros.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20 bg-white-skyblue-select">
            <div>
              <p className="font-semibold tracking-wide ">
                ⭐ Chofer de reemplazo:
              </p>
              <p className="text-xs ml-6">
                Chofer de reemplazo cuando te sientas indispuesto de conducir.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20 ">
            <div>
              <p className="font-semibold tracking-wide ">
                ⭐ Revision tecnica:
              </p>
              <p className="text-xs ml-6">
                Podras realizar una revision de tu vehiculo para tu seguridad y
                la de tu familia.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20 bg-white-skyblue-select">
            <div>
              <p className="font-semibold  tracking-wide  ">
                ⭐ Mantenimiento mensual:
              </p>
              <p className="text-xs ml-6">
                ¡Auto seguro, familia segura!. Manten tu vehiculo en optimas
                condiciones.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20  mb-4 md:mb-2 ">
            <div>
              <p className="font-semibold tracking-wide ">⭐ Gruas:</p>
              <p className="text-xs ml-6">
                Asistencia de grua frente a percances inoportunos.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
