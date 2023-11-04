import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Contract() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        className="underline font-semibold text-blue-400 cursor-pointer text-lg"
      >
        Contrato
      </span>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true">
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="mx-auto px-4 max-w-sm rounded bg-white">
                <Dialog.Title className="my-4 text-center font-bold text-blue-400 uppercase">
                  Contrato de Seguro para Vehículos Eléctricos
                </Dialog.Title>

                <p className="pb-2 text-xs text-justify">
                  Este contrato de seguro (“Contrato”) se celebra entre el
                  titular de la póliza (“Usted”) y nuestra compañía de seguros
                  (“Nosotros”). Este Contrato proporciona cobertura para su
                  vehículo eléctrico (“Vehículo”) sujeto a los términos y
                  condiciones que se detallan a continuación.
                </p>

                <h2 className="pb-1 text-xs font-semibold uppercase">
                  1. Cobertura de Daños Accidentales
                </h2>
                <p className="pb-2 text-xs text-justify">
                  Nosotros cubriremos los costos de reparación o reemplazo de su
                  Vehículo en caso de un accidente. Esto incluye daños a la
                  carrocería del Vehículo, el motor eléctrico y otros
                  componentes esenciales.
                </p>
                <h2 className="pb-1 text-xs font-semibold uppercase">
                  2. Cobertura contra Robo
                </h2>
                <p className="pb-2 text-xs text-justify">
                  En caso de robo de su Vehículo, cubriremos el costo de
                  reemplazo del Vehículo hasta el valor asegurado indicado en
                  este Contrato.
                </p>

                <h2 className="pb-1 text-xs font-semibold uppercase">
                  3. Cobertura de la Batería
                </h2>
                <p className="pb-2 text-xs text-justify">
                  Reconocemos que la batería es una parte esencial y costosa de
                  su Vehículo. Por lo tanto, ofrecemos cobertura específica para
                  la batería de su Vehículo. Cubriremos los costos de reparación
                  o reemplazo de la batería si se daña debido a un accidente o
                  defecto.
                </p>

                <h2 className="pb-1 text-xs font-semibold uppercase">
                  4. Extensión de Garantía
                </h2>
                <p className="pb-2 text-xs text-justify">
                  Además de la garantía del fabricante, ofrecemos una extensión
                  de garantía que cubre problemas que la garantía original puede
                  no cubrir. Esto incluye, entre otros, defectos en el motor
                  eléctrico, el sistema de frenos y el sistema de dirección.
                </p>

                <h2 className="pb-1 text-xs font-semibold">
                  5. Asistencia en Carretera
                </h2>
                <p className="pb-4 text-xs text-justify">
                  Como parte de este Contrato, ofrecemos asistencia en carretera
                  24/7. Esto incluye servicios como remolque, asistencia en caso
                  de avería y más.
                </p>

                <h2 className="pb-1 text-xs font-semibold">6. Exclusiones</h2>
                <p className="pb-4 text-xs text-justify">
                  Como parte de este Contrato, ofrecemos asistencia en carretera
                  24/7. Esto incluye servicios como remolque, asistencia en caso
                  de avería y más.
                </p>

                <h2 className="pb-1 text-xs font-semibold">7. Reclamaciones</h2>
                <p className="pb-4 text-xs text-justify">
                  Para hacer una reclamación, póngase en contacto con nosotros
                  lo antes posible después del incidente. Proporcione todos los
                  detalles relevantes y cualquier documentación de apoyo
                  requerida.
                </p>

                <h2 className="pb-1 text-xs font-semibold">
                  8. Pago de Primas
                </h2>
                <p className="pb-4 text-xs text-justify">
                  Las primas de seguro deben pagarse en la fecha acordada. El
                  incumplimiento en el pago puede resultar en la cancelación de
                  la cobertura.
                </p>

                <p className="pb-4 text-xs text-justify">
                  Este Contrato entra en vigencia en la fecha de inicio indicada
                  y continúa hasta la fecha de vencimiento, a menos que se
                  cancele antes de acuerdo con los términos de este Contrato.
                  Por favor, tenga en cuenta que este es solo un ejemplo y los
                  términos y condiciones específicos de su póliza de seguro
                  pueden variar. Le recomendamos que lea cuidadosamente su
                  póliza de seguro y se asegure de entender completamente su
                  cobertura. Si tiene alguna pregunta, no dude en ponerse en
                  contacto con nosotros. Estamos aquí para ayudarle.
                </p>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
