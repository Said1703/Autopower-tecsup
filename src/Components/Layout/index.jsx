import logo from "../../assets/logo/logo-blanco.svg";
import isotipo from "../../assets/logo/isotipo.svg";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav className="fixex top-0 left-0 bg-gradient-to-r from-stone-950 via-blue-950  to-blue-900 w-full shadow p-3">
        <div className="container m-auto flex justify-between items-center text-white">
          <img className="md:w-44 w-32 ml-6" src={logo} />
          <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <li className="hover:bg-darkblue-select py-4 px-6">BENEFICIOS</li>
            <li className="hover:bg-darkblue-select py-4 px-6">COTIZA</li>
            <li className="hover:bg-darkblue-select py-4 px-6">
              SOBRE NOSOTROS
            </li>
            <li className="hover:bg-darkblue-select py-4 px-6">CONTACTO</li>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gary-200 group">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="absolute top-0 right-full h-screen w-8/12 bg-darkblue border opacity-20 backdrop-blur-md group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul>
                <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                  BENEFICIOS
                </li>
                <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                  COTIZA
                </li>
                <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                  SOBRE NOSOTROS
                </li>
                <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                  CONTACTO
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>

      <Outlet />

      <footer className="flex flex-row justify-center items-center pt-4 pb-4 bg-gradient-to-r from-stone-950 via-blue-950 to-blue-900 font-semibold">
        <img className="mr-6 h-8" src={isotipo} />
        <p className="text-white text-xs md:text-lg">
          Todos los derechos reservados 2023
        </p>
      </footer>
    </>
  );
}
