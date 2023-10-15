import { Button } from "../../Components";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function ContainerForms() {
  const [validateCampo, setValidateCampo] = useState(true);
  const [ValoresForms, setValoresForms] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "0",
    numeroDoc: "",
    pais: "0",
    direccion: "",
    telefono: "",
    email: "",
    tipoVehiculo: "0",
  });
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
  } = ValoresForms;
  const regExpCorreo = new RegExp(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const regExpTexto = new RegExp(/[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2,50}/i);
  const regExpNumeros = new RegExp(/^[0-9]{5,10}$/i);
  const [Mensaje, setMensaje] = useState(false);

  const handleActualizarInputs = ({ target }) => {
    setMensaje(false);
    setValoresForms({
      ...ValoresForms,
      [target.name]: target.value,
    });
  };

  const validate = () => {
    let status = true;
    if (
      ValoresForms.nombre === "" ||
      ValoresForms.apellido === "" ||
      ValoresForms.tipoDocumento === "0" ||
      ValoresForms.numeroDoc === "" ||
      ValoresForms.pais === "0" ||
      ValoresForms.direccion === "" ||
      ValoresForms.telefono === "" ||
      ValoresForms.tipoVehiculo === "0" ||
      ValoresForms.email === ""
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
      <div className="h-full flex items-center justify-center mt-24">
        <div className="w-10/12 md:w-4/12 bg-white my-10 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-center mt-2 mb-4">
            Información personal
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <input
                type="text"
                name="nombre"
                value={nombre}
                placeholder="Nombre"
                onChange={handleActualizarInputs}
                className="border-b-2  w-full px-4 py-2 focus:outline-none focus:border-blue-500"
              />

              {Mensaje && ValoresForms.nombre == "" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Ingrese un nombre.
                </p>
              )}

              {!regExpTexto.test(ValoresForms.nombre) &&
                ValoresForms.nombre.length > 0 && (
                  <p
                    className="text-left font-Roboto text-3xl"
                    style={{ fontSize: "14px", color: "red" }}
                  >
                    Ingrese un nombre válido.
                  </p>
                )}
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="apellido"
                placeholder="Apellidos"
                value={apellido}
                onChange={handleActualizarInputs}
                className="border-b-2 w-full px-4 py-2  focus:outline-none focus:border-blue-500"
              />

              {Mensaje && ValoresForms.apellido == "" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Ingrese un apellido.
                </p>
              )}

              {!regExpTexto.test(ValoresForms.apellido) &&
                ValoresForms.apellido.length > 0 && (
                  <p
                    className="text-left font-Roboto text-3xl"
                    style={{ fontSize: "14px", color: "red" }}
                  >
                    Ingrese un apellido válido.
                  </p>
                )}
            </div>
            <div className="mb-2">
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

              {Mensaje && ValoresForms.tipoDocumento == "0" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Seleccione un tipo de documento.
                </p>
              )}
            </div>
            <div className="mb-2 bg-white">
              <input
                type="number"
                name="numeroDoc"
                placeholder="Numero de documento"
                value={numeroDoc}
                onChange={handleActualizarInputs}
                className="border-b-2 w-full px-4 py-2 bg-white focus:outline-none focus:border-blue-500"
              />

              {Mensaje && ValoresForms.numeroDoc == "" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Ingrese un número de documento.
                </p>
              )}

              {!regExpNumeros.test(ValoresForms.numeroDoc) &&
                ValoresForms.numeroDoc.length > 0 && (
                  <p
                    className="text-left font-Roboto text-3xl"
                    style={{ fontSize: "14px", color: "red" }}
                  >
                    Ingrese un documento válido.
                  </p>
                )}
            </div>
            <div className="mb-2 gb-white">
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

              {Mensaje && ValoresForms.pais == "0" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Ingrese un número de documento.
                </p>
              )}
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="direccion"
                placeholder="Direccion de residencia"
                value={direccion}
                onChange={handleActualizarInputs}
                className="border-b-2 w-full px-4 py-2  focus:outline-none focus:border-blue-500"
              />

              {Mensaje && ValoresForms.direccion == "" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Ingrese una dirección.
                </p>
              )}
            </div>
            <div className="mb-2">
              <input
                type="tel"
                name="telefono"
                placeholder="Numero de telefono"
                value={telefono}
                onChange={handleActualizarInputs}
                className="border-b-2 w-full px-4 py-2  focus:outline-none focus:border-blue-500"
              />

              {Mensaje && ValoresForms.telefono == "" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Ingrese un número de teléfono.
                </p>
              )}

              {!regExpNumeros.test(ValoresForms.telefono) &&
                ValoresForms.telefono.length > 0 && (
                  <p
                    className="text-left font-Roboto text-3xl"
                    style={{ fontSize: "14px", color: "red" }}
                  >
                    Ingrese un teléfono válido.
                  </p>
                )}
            </div>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                placeholder="Correo electronico"
                value={email}
                onChange={handleActualizarInputs}
                className="border-b-2 w-full px-4 py-2  focus:outline-none focus:border-blue-500"
              />

              {Mensaje && ValoresForms.email == "" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Ingrese un email.
                </p>
              )}

              {!regExpCorreo.test(ValoresForms.email) &&
                ValoresForms.email.length > 0 && (
                  <p
                    className="text-left font-Roboto text-3xl"
                    style={{ fontSize: "14px", color: "red" }}
                  >
                    Ingrese un email válido.
                  </p>
                )}
            </div>
            <div className="mb-8">
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
                <option value="1">Camioneta</option>
                <option value="2">Carro</option>
                <option value="3">Moto</option>
                <option value="4">Otro</option>
              </select>

              {Mensaje && ValoresForms.tipoVehiculo == "0" && (
                <p
                  className="text-left font-Roboto text-3xl"
                  style={{ fontSize: "14px", color: "red" }}
                >
                  Seleccione un tipo de vehiculo.
                </p>
              )}
            </div>
            <div className="mb-4 text-center">
              <Button
                type="submit"
                text="siguiente"
                variant="primary"
                disabled={false}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// onClick={guardarForms}
