/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components";
export default function ContainerPricePlatinum({pryceForm}) {

  const navigate = useNavigate()

  const handleButtonClick= ()=>{
    localStorage.setItem('plan_seleccionado', JSON.stringify({id:3, plan: 'Platinium', precio: 30 }))
    navigate("/BuyService")
  }

  return (
    <div className="border border-[#0083B4] rounded-2xl flex flex-col mt-12 md:w-[33%] md:mt-6 bg-white">
      <h2 className="mt-4 pb-4 text-center text-2xl font-bold tracking-widest border-b-2  w-[90%] mx-auto color-#1F3142 ">
        Plan Platinium
      </h2>

      <h2 className="text-3xl font-bold my-2 text-center color-#1F3142 ">
        ${pryceForm.Platinium}
      </h2>

      <div className=" flex justify-center">
        <Button type="submit" text="Cotizar" variant="primary" handleButtonClick={handleButtonClick}/>
      </div>

      <ul>
        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left mt-4  bg-white-skyblue-select h-20">
          <div>
            <p className="font-semibold tracking-wide ">
              ⭐ Seguro contra robos del 60%:
            </p>
            <p className="text-xs ml-6">
              Este plan te cubrira ante robos para tu tranquilidad.
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20">
          <div>
            <p className="font-semibold tracking-wide ">
              ⭐ Asistencia las 24 horas:
            </p>
            <p className="text-xs ml-6">
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
            <p className="font-semibold tracking-wide ">⭐ Revision tecnica:</p>
            <p className="text-xs ml-6">
              Podras realizar una revision de tu vehiculo para tu seguridad y la
              de tu familia.
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20 bg-white-skyblue-select ">
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

        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20 ">
          <div>
            <p className="font-semibold tracking-wide ">⭐ Razones externas:</p>
            <p className="text-xs ml-6">
              Tu vehiculo se encuentra cubierto frente a daño colateral por
              manifestaciones y disturbios.
            </p>
          </div>
        </li>

        <li className="flex items-center gap-4 pl-4 pr-5 text-sm text-left h-20 bg-white-skyblue-select ">
          <div>
            <p className="font-semibold tracking-wide ">⭐ Gruas:</p>
            <p className="text-xs ml-6">
              Asistencia de grua frente a percances inoportunos.
            </p>
          </div>
        </li>

        <li className="flex  items-center gap-4 pl-4 pr-5 text-sm text-left h-20  ">
          <div>
            <p className="font-semibold tracking-wide ">⭐ GPS antirrobo:</p>
            <p className="text-xs ml-6">
              Rastreo las 24 horas en vivo para detener un posible robo en
              accion.
            </p>
          </div>
        </li>

        <li className="flex  items-center gap-4 pl-4 pr-5 text-sm text-left h-20  mb-4 bg-white-skyblue-select">
          <div>
            <p className="font-semibold tracking-wide ">
              ⭐ Hackeo de software S.O.S.:
            </p>
            <p className="text-xs ml-6">
              Hackea el sistema del auto en situaciones de riesgo.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
