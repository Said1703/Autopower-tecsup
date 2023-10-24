import { Dialog } from "@headlessui/react";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TermsAndConditions() {

    const [open, setOpen] = useState(false);


    return (
        <>
            <span onClick={() => setOpen(true)}
                className="underline font-semibold text-blue-400 cursor-pointer">
                Terminos y condiciones
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
                                <Dialog.Title className="my-4 text-center font-bold text-blue-400">TÉRMINOS Y CONDICIONES DE LA PÓLIZA DE SEGURO DE VEHÍCULOS ELÉCTRICOS
                                </Dialog.Title>
                                <h2 className="pb-1 text-xs font-semibold">DEFINICIONES</h2>
                                <p className="pb-2 text-xs text-justify">Asegurado: La persona física o jurídica titular de la póliza.
                                    Vehículo asegurado: El vehículo eléctrico identificado en las Condiciones Particulares de la póliza.
                                    Siniestro: Cualquier daño o pérdida accidental, súbita e imprevista que afecte al vehículo asegurado.

                                </p>
                                <h2 className="pb-1 text-xs font-semibold">COBERTURAS</h2>
                                <p className="pb-2 text-xs text-justify">                                    
                                    Daños propios: Cubre los daños materiales sufridos por el vehículo asegurado a consecuencia de un siniestro.
                                    Responsabilidad civil: Cubre los daños materiales y personales causados a terceros con el vehículo asegurado.
                                    Asistencia en viaje: Cubre los servicios de asistencia en carretera necesarios en caso de avería o accidente del vehículo asegurado.
                                </p>

                                <h2 className="pb-1 text-xs font-semibold">EXCLUSIONES</h2>
                                <p className="pb-2 text-xs text-justify">                                    
                                    No se cubren los daños causados por el mal uso del vehículo asegurado, ni los derivados de su falta de mantenimiento.
                                    No se cubren los daños causados intencionadamente por el asegurado.

                                </p>

                                <h2 className="pb-1 text-xs font-semibold">OBLIGACIONES DEL ASEGURADO</h2>
                                <p className="pb-2 text-xs text-justify">                                    
                                    El asegurado debe comunicar a la aseguradora cualquier siniestro en un plazo máximo de 7 días desde que tiene conocimiento del mismo.
                                    El asegurado debe mantener el vehículo asegurado en buen estado de conservación y seguir las recomendaciones del fabricante para su mantenimiento.
                                </p>

                                <h2 className="pb-1 text-xs font-semibold">DURACIÓN Y RENOVACIÓN DE LA PÓLIZA</h2>
                                <p className="pb-4 text-xs text-justify">
                                    La póliza tiene una duración de un año y se renueva automáticamente salvo que alguna de las partes comunique lo contrario con un mes de antelación a la fecha de vencimiento.
                                </p>
                            </Dialog.Panel>
                        </div>
                    </div>
                </div >
            </Dialog>
        </>

    )

}    