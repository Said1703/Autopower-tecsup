/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, FormWindow, Paragraph } from "../../Components";
import { create } from "../../services";
import Swal from "sweetalert2";
import TextFaild from "../TextField";

export default function ContainerForms({
  valoresForms,
  setValoresForms,
  setActiveStep,
}) {
  const {
    user_name,
    last_name,
    tipo_documento,
    numero_doc,
    pais,
    placa_vehiculo,
    telefono,
    email,
    tipo_vehiculo,
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
      valoresForms.user_name === "" ||
      valoresForms.last_name === "" ||
      valoresForms.tipo_documento === "0" ||
      valoresForms.numero_doc === "" ||
      valoresForms.pais === "0" ||
      valoresForms.placa_vehiculo === "" ||
      valoresForms.telefono === "" ||
      valoresForms.tipo_vehiculo === "0" ||
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
      await create(valoresForms, "information/");
      setActiveStep(1);
      Swal.fire("Exito", "Datos Registrados", "success");
    } else {
      Swal.fire(
        "Información",
        "Por favor ingresa la información faltante",
        "warning"
      );
    }

    const [user_name, setNombre] = useState("");

    const { ok, data } = await create(
      {
        user_name: user_name,
        last_name: last_name,
        email: email,
        tipo_documento: tipo_documento,
        numero_doc: numero_doc,
        pais: pais,
        telefono: telefono,
        tipo_vehiculo: tipo_vehiculo,
        placa_vehiculo: placa_vehiculo,
      },
      "user"
    );

    if (!ok) {
      //aqui estoy validando el post del backend//
      showError(data);
      return;
    }

    setNombre("");

    Swal.fire({
      title: "Success",
      text: "Se creo la tarea correctamente",
      icon: "success",
    });

    dispatch(saveUser(user));
    Navigate("/");
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
              name="user_name"
              value={user_name}
              placeholder="Nombre"
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.user_name == "" && (
              <Paragraph valueParagraph="Ingrese un nombre." />
            )}

            {!regExpTexto.test(valoresForms.user_name) &&
              valoresForms.user_name.length > 0 && (
                <Paragraph valueParagraph="Ingrese un nombre válido." />
              )}
          </div>
          <div className="mb-1">
            <TextFaild
              type="text"
              name="last_name"
              placeholder="Apellidos"
              value={last_name}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.last_name == "" && (
              <Paragraph valueParagraph="Ingrese un apellido." />
            )}

            {!regExpTexto.test(valoresForms.last_name) &&
              valoresForms.last_name.length > 0 && (
                <Paragraph valueParagraph="Ingrese un apellido válido." />
              )}
          </div>
          <div className="mb-1">
            <select
              type="text"
              name="tipo_documento"
              placeholder="Tipo de documento"
              value={tipo_documento}
              onChange={handleActualizarInputs}
              className="border-b-2 w-full px-3 py-2  focus:outline-none focus:border-blue-500 bg-white text-gray-400"
            >
              <option value="0">Tipo de documento</option>
              <option value="PAS">Pasaporte</option>
              <option value="CAR">Carnet de extranjeria</option>
              <option value="DNI">DNI</option>
            </select>

            {Mensaje && valoresForms.tipo_documento == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de documento." />
            )}
          </div>
          <div className="mb-1 bg-white">
            <TextFaild
              type="number"
              name="numero_doc"
              placeholder="Numero de documento"
              value={numero_doc}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.numero_doc == "" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
            )}

            {!regExpNumeros.test(valoresForms.numero_doc) &&
              valoresForms.numero_doc.length > 0 && (
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
              <option value="PE">Perú</option>
              <option value="VE">Venezuela</option>
              <option value="MX">México</option>
              <option value="EC">Ecuador</option>
              <option value="AR">Argentina</option>
              <option value="UY">Uruguay</option>
              <option value="CL">Chile</option>
              <option value="BO">Bolivia</option>
              <option value="PY">Paraguay</option>
              <option value="BR">Brasil</option>
              <option value="CO">Colombia</option>
            </select>

            {Mensaje && valoresForms.pais == "0" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
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

          <div className="mb-1">
            <select
              type="text"
              name="tipo_vehiculo"
              placeholder="Tipo de Vehiculo"
              value={tipo_vehiculo}
              onChange={handleActualizarInputs}
              className="Block border-b-2 w-full px-3 py-2  focus:outline-none focus:border-blue-500 bg-white text-gray-400"
            >
              <option className="text-gray-300" value="0">
                Tipo de Vehículo
              </option>
              <option value="SEDAN">Sedán</option>
              <option value="HATCHBACK">Hatchback</option>
              <option value="COUPE">Coupé</option>
              <option value="STATION_WAGON">Station Wagon</option>
              <option value="SUV">SUV</option>
              <option value="CROSSOVER">Crossover</option>
              <option value="CONVERTIBLE">Convertible</option>
              <option value="4X4">4X4</option>
              <option value="OTROS">Otros</option>
            </select>

            {Mensaje && valoresForms.tipo_vehiculo == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de vehiculo." />
            )}
          </div>

          <div className="mb-4">
            <TextFaild
              type="text"
              name="placa_vehiculo"
              placeholder="Ingrese la placa de su vehiculo"
              value={placa_vehiculo}
              onChange={handleActualizarInputs}
              className="w-full"
              required={false}
            />

            {Mensaje && valoresForms.placa_vehiculo == "" && (
              <Paragraph valueParagraph="Ingrese una placa." />
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
