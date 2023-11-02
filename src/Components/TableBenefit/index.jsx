export default function TableBenefit() {
  return (
    <div className="relative w-8/12">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Servicio
            </th>
            <th scope="col" className="px-6 py-3">
              Plan
            </th>
            <th scope="col" className="px-6 py-3">
              Tiempo
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Seguro contra robos
            </th>
            <td className="px-6 py-4">Gold/Platinum</td>
            <td className="px-6 py-4">Anual</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Asistencia las 24 horas
            </th>
            <td className="px-6 py-4">Todos</td>
            <td className="px-6 py-4">Anual</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Chofer de reemplazo
            </th>
            <td className="px-6 py-4">Gold/Platinum</td>
            <td className="px-6 py-4">Anual</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Revision técnica
            </th>
            <td className="px-6 py-4">Todos</td>
            <td className="px-6 py-4">Anual</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Mantenimiento mensual
            </th>
            <td className="px-6 py-4">Todos</td>
            <td className="px-6 py-4">Anual</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Razones externas
            </th>
            <td className="px-6 py-4">Platinum</td>
            <td className="px-6 py-4">Anual</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Gruas
            </th>
            <td className="px-6 py-4">Gold/Platinum</td>
            <td className="px-6 py-4">Anual</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              GPS antirrobo
            </th>
            <td className="px-6 py-4">Platinum</td>
            <td className="px-6 py-4">Anual</td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Hackeo de software S.O.S
            </th>
            <td className="px-6 py-4">Platinum</td>
            <td className="px-6 py-4">Anual</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
