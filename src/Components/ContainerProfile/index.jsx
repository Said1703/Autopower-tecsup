import login from "../../assets/img/login.jpg"


export default function ContainerProfile() {
    return(
        <div className="h-full flex items-center justify-center">
            <div className={`w-11/12 md:w-[50%] bg-white my-4 md:my-0 p-6 rounded-3xl shadow-md border border-red-500`}> 
                <div className="grid grid-cols-3 grid-rows-7 gap-1">
                    <div className="row-span-5 m-auto">
                        <p>Datos</p>
                    </div>
                    <div className="">
                        <p>Nombres</p>
                    </div>
                    <div className="">
                        <p>Marcos Alejandro</p>
                    </div>
                    <div className="">
                        <p>Apellidos</p>
                    </div>
                    <div className="">
                        <p>Arellano Vilchez</p>
                    </div>
                    <div className="">
                        <p>Documento</p>
                    </div>
                    <div className="">
                        <p>123213213</p>
                    </div>
                    <div className="">
                        <p>Correo Electronico</p>
                    </div>
                    <div className="">
                        <p>marcos@hotmail.com</p>
                    </div>
                    <div className="">
                        <p>Placa</p>
                    </div>
                    <div className="">
                        <p>AZF-992</p>
                    </div>

                    <div className="row-span-2 m-auto">
                        <p>Seguro AutoPower</p>
                    </div>

                    <div className="">
                        <p>Plan</p>
                    </div>

                    <div className="">
                        <p>Basico</p>
                    </div>

                    <div className="">
                        <p>Caducidad</p>
                    </div>
                    <div className="">
                        <p>19/12/2023</p>
                    </div>

                </div>
            </div>
        </div>
    )
}