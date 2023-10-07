import isotipo from "../../assets/logo/isotipo.svg";
export default function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center pt-4 pb-4 bg-gradient-to-r from-stone-950 via-blue-950 to-blue-900 font-semibold">
      <img className="mr-6 h-8" src={isotipo} />
      <p className="text-white text-xs md:text-lg">
        Todos los derechos reservados 2023
      </p>
    </footer>
  );
}
