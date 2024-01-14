import aboutImage from "../../../public/aboutImage.jpg";
export default function About() {
  return (
    <>
      <div className="md:h-[93vh] flex flex-wrap items-center">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl font-semibold leading-normal my-8 mt-16">
            Sobre Nosotros
          </h3>
          <p className="text-justify text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Juntos, estamos construyendo un mundo más limpio y sostenible, un
            viaje que comienza con la elección de tu seguro para vehículos
            eléctricos. AutoPower está aquí para asegurarse de que estés
            protegido en cada paso del camino.
          </p>
          <p className="text-justify text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            AutoPower es líder en el mercado de seguros para automóviles
            eléctricos. Nuestro compromiso es proporcionar una cobertura sólida
            y adaptada específicamente a las necesidades de los conductores de
            autos eléctricos
          </p>
        </div>
        <div className="max-w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col break-words bg-white w-full mt-12 mb-10 shadow-lg rounded-lg">
            <img
              alt=""
              src={aboutImage}
              className="w-full align-middle rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
