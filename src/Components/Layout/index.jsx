import logo from "../../assets/logo/logo-blanco.svg";
import isotipo from "../../assets/logo/isotipo.svg";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav className="fixed top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-full shadow p-3 z-30">
        <div className="container m-auto flex justify-between items-center text-white">
          <Link to="/">
            <img className="md:w-44 w-32 ml-6" src={logo} />
          </Link>
          <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <Link to="/Benefits">
              <li className="hover:bg-darkblue-select py-4 px-6">BENEFICIOS</li>
            </Link>
            <Link to="/About">
              <li className="hover:bg-darkblue-select py-4 px-6">
                SOBRE NOSOTROS
              </li>
            </Link>
            <Link to="/Contact">
              <li className="hover:bg-darkblue-select py-4 px-6">CONTACTO</li>
            </Link>
            <Link to="/Login">
              <li className="hover:bg-darkblue-select py-4 px-6">AUTENTIFICAR</li>
            </Link>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gary-200 group">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="absolute top-0 right-full h-screen w-8/12 bg-darkblue border opacity-20 backdrop-blur-md group-focus:right-0 group-focus:opacity-100 transition-all duration-300 z-30">
              <ul>
                <Link to="/Benefits">
                  <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                    BENEFICIOS
                  </li>
                </Link>

                <Link to="/About">
                  <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                    SOBRE NOSOTROS
                  </li>
                </Link>
                <Link to="/Contact">
                  <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                    CONTACTO
                  </li>
                </Link>
                <Link to="/Login">
                  <li className="hover:bg-darkblue-select py-4 px-6 w-full">
                    LOGIN
                  </li>
                </Link>
              </ul>
            </div>
          </button>
        </div>
      </nav>

      <Outlet />

      <footer className="flex h-[7vh] flex-row justify-center items-center pt-4 pb-4 bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
        <img className="mr-6 h-8" src={isotipo} />
        <p className="text-white text-xs md:text-lg">
          Todos los derechos reservados 2023.
        </p>
      </footer>
    </>
  );
}
