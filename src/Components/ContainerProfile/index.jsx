export default function ContainerProfile() {

    const user = JSON.parse(
        localStorage.getItem("datos_url")
      );


    return(
        <div className="h-full flex items-center justify-center">
            <div className="w-11/12 md:w-[40%] bg-white my-4 md:my-0 p-6 rounded-3xl shadow-md md:text-xl"> 
                <table className="table-auto w-full text-center border rounded-full border-slate-900">
                    <tbody>
                        <tr>
                            <td className="border border-slate-600 bg-skyblue-select">Nombres</td>
                            <td className="border border-slate-600 bg-skyblue-select">{user[0].nombre}</td>

                        </tr>
                        <tr>
                            <td className="border border-slate-600">Apellidos</td>
                            <td className="border border-slate-600">{user[0].apellidos}</td>

                        </tr>
                        <tr>
                            <td className="border border-slate-600 bg-skyblue-select">Documento</td>
                            <td className="border border-slate-600 bg-skyblue-select">{user[0].numero_doc}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-600">Correo Electronico</td>
                            <td className="border border-slate-600">{user[0].email}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-600 bg-skyblue-select">Placa</td>
                            <td className="border border-slate-600 bg-skyblue-select">{user[0].placa_vehiculo}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-600">Plan</td>
                            <td className="border border-slate-600">{user[0].subscription.title}</td>
                        </tr>
                        {/* <tr>
                            <td className="border border-slate-600 bg-skyblue-select">Caducidad</td>
                            <td className="border border-slate-600 bg-skyblue-select">19/12/2023</td>
                        </tr> */}
                    </tbody>
                </table>

            </div>
        </div>
    )
}