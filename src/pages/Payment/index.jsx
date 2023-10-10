import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'

export default function Payment() {

    const [values, setValues] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    })

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setValues((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setValues((prev) => ({ ...prev, focus: evt.target.name }));
    }

    return(
        <div className="flex items-center bg-white justify-center mt-16 pb-4 px-2">

            <div className="w-full md:w-4/12 bg-white rounded-3xl md:mt-8 shadow-lg border hover:border-blue-500">
                <h2 className="text-2xl font-bold text-center mt-2 mb-4 text-blue-900">Tarjeta de Crédito</h2>
                <hr className="bg-blue-400" />

                <div className="card bg-white mt-6">
                    <Cards
                        number={values.number}
                        expiry={values.expiry}
                        cvc={values.cvc}
                        name={values.name}
                        focused={values.focus}
                    />

                    <form className="my-6 px-5" action="">

                        <div className="mb-4">
                            <input type="text"
                                name='name'
                                placeholder="Nombre del titular"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={values.name}
                                className="shadow-sm w-full px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500"
                                required />
                        </div>

                        <div className="mb-4">
                            <input type="text"
                                name="number"
                                maxLength="16"
                                placeholder="Número de tarjeta"
                                className="shadow-sm w-full px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                value={values.number}
                                required />
                        </div>

                        <div className="flex gap-4 justify-center">
                            <div>
                                <input type="text"
                                    name="expiry"
                                    className="w-32 md:w-[12vw] shadow-sm px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500 border"
                                    placeholder="00/00"
                                    maxLength="5"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    value={values.expiry}
                                    required />
                            </div>
                            <div>
                                <input name="cvc"
                                    placeholder="CVC"
                                    type="text"
                                    maxLength="4"
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    value={values.cvc}
                                    className="w-32 md:w-[12vw] shadow-sm px-1 py-2 border-b-2 focus:outline-none focus:border-blue-500 border"
                                    required />
                            </div>

                        </div>

                        <div className="text-center px-5 my-6">
                            <p className="text-xs">Acepto los términos y condiciones de este producto y autorizo el tratamiento de mis datos,documentos que manifiesto haber leído.</p>
                            <div className="flex justify-center mt-4">
                                <input type="checkbox" name="" id="checked-checkbox" className="border-rounded-3xl w-8" />
                                <p className="ml-2 text-s font-medium text-gray-900">Aceptar</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-gray-400 text-white font-semibold w-11/12 mt- py-2 mb-2 px-4 rounded-lg hover:bg-sky-400 hover:shadow-lg hover:shadow-cyan-200/50 md:w-7/12">
                                Siguiente
                            </button>
                        </div>

                    </form>




                </div>
            </div>
        </div>

    )
}