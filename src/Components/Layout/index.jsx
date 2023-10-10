import logo from "../../assets/logo/logo-blanco.svg";
import isotipo from "../../assets/logo/isotipo.svg";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 md:px-40 py-2 md:py-10 bg-gradient-to-r from-stone-950 via-blue-950  to-blue-900  h-12  ">
        <div className="w-28 md:w-48 ">
          <Link to={`/`}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="text-white ">
          <ul className="md:flex md:flex-row hidden md:visibility text-white gap-6 font-semibold hover:cursor-pointer">
            <li>BENEFICIOS</li>
            <li>COTIZA</li>
            <li>SOBRE NOSOTROS</li>
            <li>CONTACTO</li>
          </ul>

          <img className="visibility md:hidden" src={hamburger} alt="" />
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
