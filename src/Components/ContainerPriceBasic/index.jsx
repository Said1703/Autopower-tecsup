import { Button } from "../../Components";
export default function ContainerPiceBasic() {
  return (
    <div className="border border-darkblue-select rounded-2xl flex flex-col md:w-[33%] md:h-[75%] md:mt-6 bg-white">
      <h2 className="mt-4 pb-4 text-center text-2xl font-bold tracking-widest border-b-2  w-[90%] mx-auto color-#1F3142 ">
        Plan basic
      </h2>

      <h2 className="text-3xl font-bold my-2 text-center color-#1F3142 ">
        S/. 19.99
      </h2>
      <div className=" flex justify-center">
        <Button type="submit" text="Cotizar" variant="primary" />
      </div>

      <ul>
        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left mt-4  bg-white-skyblue-select py-2">
          <div>
            <p className="font-semibold tracking-wide ">
              ⭐ Asistencia las 24 horas:
            </p>
            <p className="text-xs ml-6 ">
              Tendras asistencia ambulatoria, auxilio mecanico, entre otros.
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left py-2 ">
          <div>
            <p className="font-semibold tracking-wide ">⭐ Revision tecnica:</p>
            <p className="text-xs ml-6 ">
              Podras hacer una revision de tu vehiculo para tu seguridad y la de
              tu familia.
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left mb-4 md:mb-6  bg-white-skyblue-select py-2 ">
          <div>
            <p className="font-semibold  tracking-wide">
              ⭐ Mantenimiento mensual:
            </p>
            <p className="text-xs ml-6">
              ¡Auto seguro, familia segura!. Manten tu vehiculo en optimas
              condiciones.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
