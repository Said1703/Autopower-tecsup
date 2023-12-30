/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, FormWindow, Paragraph } from "../../Components";
import Swal from "sweetalert2";
import TextFaild from "../TextField";
import { create } from "../../services";

export default function ContainerForms({
  valoresForms,
  setValoresForms,
  setActiveStep,
}) {


  const {
    nombre,
    apellido,
    tipoDocumento,
    numeroDoc,
    pais,
    direccion,
    telefono,
    email,
    tipoVehiculo,
  } = valoresForms;
  const regExpCorreo = new RegExp(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const regExpTexto = new RegExp(/[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2,50}/i);
  const regExpNumeros = new RegExp(/^[0-9]{5,10}$/i);
  const [Mensaje, setMensaje] = useState(false);

  const handleActualizarInputs = ({ target }) => {
    setMensaje(false);
    setValoresForms({
      ...valoresForms,
      [target.name]: target.value,
    });
  };

  const validate = () => {
    let status = true;
    if (
      valoresForms.nombre === "" ||
      valoresForms.apellido === "" ||
      valoresForms.tipoDocumento === "0" ||
      valoresForms.numeroDoc === "" ||
      valoresForms.pais === "0" ||
      valoresForms.direccion === "" ||
      valoresForms.telefono === "" ||
      valoresForms.tipoVehiculo === "0" ||
      valoresForms.email === ""
    ) {
      status = false;
    }

    if (!status) {
      setMensaje(true);
    }

    return status;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("guardando");
      await create(valoresForms, "buy_service");
      setActiveStep(1);
      Swal.fire("Exito", "Datos Registrados", "success");
    } else {
      Swal.fire(
        "Información",
        "Por favor ingresa la información faltante",
        "warning"
      );
    }
  };

  return (
    <section>
      <FormWindow className={"md:h-[75.2vh]"}>
        <h2 className="text-2xl font-bold text-center mt-2 mb-4">
          Información personal
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-1">
            <TextFaild
              type="text"
              name="nombre"
              value={nombre}
              placeholder="Nombre"
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.nombre == "" && (
              <Paragraph valueParagraph="Ingrese un nombre." />
            )}

            {!regExpTexto.test(valoresForms.nombre) &&
              valoresForms.nombre.length > 0 && (
                <Paragraph valueParagraph="Ingrese un nombre válido." />
              )}
          </div>
          <div className="mb-1">
            <TextFaild
              type="text"
              name="apellido"
              placeholder="Apellidos"
              value={apellido}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.apellido == "" && (
              <Paragraph valueParagraph="Ingrese un apellido." />
            )}

            {!regExpTexto.test(valoresForms.apellido) &&
              valoresForms.apellido.length > 0 && (
                <Paragraph valueParagraph="Ingrese un apellido válido." />
              )}
          </div>
          <div className="mb-1">
            <select
              type="text"
              name="tipoDocumento"
              placeholder="Tipo de documento"
              value={tipoDocumento}
              onChange={handleActualizarInputs}
              className="border-b-2 w-full px-3 py-2  focus:outline-none focus:border-blue-500 bg-white text-gray-400"
            >
              <option value="0">Tipo de documento</option>
              <option value="ced">Cedula</option>
              <option value="tar">Tarjeta</option>
              <option value="dni">DNI</option>
            </select>

            {Mensaje && valoresForms.tipoDocumento == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de documento." />
            )}
          </div>
          <div className="mb-1 bg-white">
            <TextFaild
              type="number"
              name="numeroDoc"
              placeholder="Numero de documento"
              value={numeroDoc}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.numeroDoc == "" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
            )}

            {!regExpNumeros.test(valoresForms.numeroDoc) &&
              valoresForms.numeroDoc.length > 0 && (
                <Paragraph valueParagraph="Ingrese un documento válido." />
              )}
          </div>
          <div className="mb-1 gb-white">
            <select
              type="text"
              name="pais"
              placeholder="Pais"
              value={pais}
              onChange={handleActualizarInputs}
              className="form-select border-b-2 w-full px-3 py-2  focus:outline-none focus:border-blue-500 bg-white text-gray-400"
            >
              <option value="0">País</option>
              <option value="per">Perú</option>
              <option value="col">Colombia</option>
              <option value="arg">Argentina</option>
              <option value="chi">Chile</option>
              <option value="uru">Uruguay</option>
              <option value="ecu">Ecuador</option>
              <option value="bol">Bolivia</option>
            </select>

            {Mensaje && valoresForms.pais == "0" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
            )}
          </div>
          <div className="mb-1">
            <TextFaild
              type="text"
              name="direccion"
              placeholder="Direccion de residencia"
              value={direccion}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.direccion == "" && (
              <Paragraph valueParagraph="Ingrese una dirección." />
            )}
          </div>
          <div className="mb-1">
            <TextFaild
              type="tel"
              name="telefono"
              placeholder="Numero de telefono"
              value={telefono}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.telefono == "" && (
              <Paragraph valueParagraph="Ingrese un número de teléfono." />
            )}

            {!regExpNumeros.test(valoresForms.telefono) &&
              valoresForms.telefono.length > 0 && (
                <Paragraph valueParagraph="Ingrese un teléfono válido." />
              )}
          </div>
          <div className="mb-1">
            <TextFaild
              type="email"
              name="email"
              placeholder="Correo electronico"
              value={email}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.email == "" && (
              <Paragraph valueParagraph="Ingrese un email." />
            )}

            {!regExpCorreo.test(valoresForms.email) &&
              valoresForms.email.length > 0 && (
                <Paragraph valueParagraph="Ingrese un email válido." />
              )}
          </div>
          <div className="mb-4">
            <select
              type="text"
              name="tipoVehiculo"
              placeholder="Tipo de Vehiculo"
              value={tipoVehiculo}
              onChange={handleActualizarInputs}
              className="Block border-b-2 w-full px-3 py-2  focus:outline-none focus:border-blue-500 bg-white text-gray-400"
            >
              <option className="text-gray-300" value="0">
                Tipo de Vehículo
              </option>
              <option value="camioneta">Camioneta</option>
              <option value="carro">Carro</option>
              <option value="4x4">4x4</option>
              <option value="otros">Otro</option>
            </select>

            {Mensaje && valoresForms.tipoVehiculo == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de vehiculo." />
            )}
          </div>
          <div className="text-center">
            <Button
              type="submit"
              text="Siguiente"
              variant="primary"
              disabled={false}
            />
          </div>
        </form>
      </FormWindow>
    </section>
  );
}

// onClick={guardarForms}
