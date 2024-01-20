/* eslint-disable react/prop-types */
import TextFaild from "../TextField";
import FormWindow from "../FormWindow";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContainerLogin() {
  const [values, setValues] = useState({
    placa_vehiculo: "",
    tipo_documento: "",
    numeroDoc: "",
  });

  const navigate = useNavigate();

  const [buttonActive, setButtonActive] = useState(false);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    const inputs = Object.values(values);

    const complete = inputs.every((input) => input !== "");

    if (complete) {
      setButtonActive(true);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    navigate("/profile");
    console.log(values);
  };

  return (
    <FormWindow className={"md:h-[93vh] pt-20"}>
      <form onSubmit={handleFormSubmit}>
        <h2 className="text-2xl font-bold text-center mt-2 mb-4 text-blue-900">
          Consulta Autopower
        </h2>
        <hr className="bg-blue-400" />

        <div className="py-2">
          <TextFaild
            type="text"
            name="placa"
            placeholder="Placa"
            className="w-full"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="py-2">
          <select
            type="text"
            name="tipo_documento"
            placeholder="Tipo de documento"
            className="border-b-2 w-full px-3 py-2  focus:outline-none focus:border-blue-500 bg-white text-gray-400"
            onChange={handleInputChange}
          >
            <option value="0">Tipo de documento</option>
            <option value="ced">Cedula</option>
            <option value="tar">Tarjeta</option>
            <option value="dni">DNI</option>
          </select>
        </div>

        <div className="py-2">
          <TextFaild
            type="number"
            name="numeroDoc"
            placeholder="Numero de documento"
            className="w-full"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="text-center pt-6">
          <Button
            type="submit"
            text="Buscar"
            variant="primary"
            disabled={!buttonActive}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </FormWindow>
  );
}
