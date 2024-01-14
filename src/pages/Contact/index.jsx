import contacts from "../../../public/contacts.jpg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.jpg";
import x from "../../assets/icons/x.svg";
export default function Contact() {
  return (
    <section className="md:h-[93vh] flex flex-wrap items-center">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-16">
        <h2 className="text-3xl font-semibold leading-normal">Contactanos:</h2>
        <p className="text-justify text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          En AutoPower, valoramos la comunicación y las relaciones con nuestros
          clientes. Estamos aquí para atender tus preguntas, escuchar tus
          comentarios y brindarte el soporte que necesitas. Ya sea que estés
          interesado en nuestros servicios o simplemente desees establecer un
          contacto, estamos encantados de poder ayudarte.
        </p>

        <div className="fle text-lg font-light leading-relaxed mt-12 mx-auto text-gray-700">
          <p className="font-semibold">Direccion principal:</p>
          <p>Av. República de Panamá 3545, San Isidro 15047, Perú</p>
        </div>

        <div className="flex gap-4 text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          <p className="font-semibold">Email:</p>
          <p>servicioalcliente@autopower.com</p>
        </div>

        <div className="flex gap-4 text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          <p className="font-semibold">Telefono:</p>
          <p>+51 33 333 333</p>
        </div>
      </div>

      <div className="max-w-full  md:w-4/12 px-4 mr-auto ml-auto mt-12">
        <div className="relative flex flex-col break-words bg-white w-full mb-10">
          <img
            alt=""
            src={contacts}
            className="w-full align-middle rounded-lg"
          />
        </div>

        <div className="text-lg font-light leading-relaxed mt-8 mb-4 text-gray-700">
          <p className="flex justify-center text-2xl font-semibold">
            Redes Sociales:
          </p>
          <p className="flex justify-center text-xl">AutoPower</p>
          <div className="flex justify-center w-10 mx-auto gap-3 mt-2">
            <img className="flex" src={facebook} alt="" />
            <img className="flex" src={instagram} alt="" />
            <img src={x} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
