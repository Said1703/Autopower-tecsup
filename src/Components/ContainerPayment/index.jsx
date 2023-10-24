import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import TextFaild from '../TextField';
import FormWindow from '../FormWindow';
import TermsAndConditions from '../TermsAndConditions';



export default function ConatinerData() {

    const [values, setValues] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    })

    const [buttonActive, setButtonActive] = useState(false)

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setValues((prev) => ({ ...prev, [name]: value }));

        const inputs = Object.values(values)

        const complete = inputs.every(input => input !== "")

        if (complete) {
            setButtonActive(true)
        }

        console.log(inputs)
        console.log(complete);
    }

    const handleInputFocus = (evt) => {
        setValues((prev) => ({ ...prev, focus: evt.target.name }));
    }


    return (

        <FormWindow >
            <h2 className="text-2xl font-bold text-center mt-2 mb-4 text-blue-900">Tarjeta de Crédito</h2>
            <hr className="bg-blue-400" />

            <div className='my-4'>
                <Cards
                    number={values.number}
                    expiry={values.expiry}
                    cvc={values.cvc}
                    name={values.name}
                    focused={values.focus}
                />
            </div>

            <form className="my-6" action="">

                <div className="mb-4">
                    <TextFaild
                        name="name"
                        placeholder="Nombre del titular"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        value={values.name}
                        className="w-full"
                    />
                </div>

                <div className="mb-4">
                    <TextFaild
                        name="number"
                        maxLength="16"
                        placeholder="Número de tarjeta"
                        className="w-full"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        value={values.number}
                        required />
                </div>

                <div className="flex justify-between">
                    <div>
                        <TextFaild
                            name="expiry"
                            className="w-32 md:w-[10vw]"
                            placeholder="00/00"
                            maxLength="5"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            value={values.expiry}
                        />
                    </div>
                    <div>
                        <TextFaild
                            name="cvc"
                            placeholder="CVC"
                            type="text"
                            maxLength="4"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            value={values.cvc}
                            className="w-32 md:w-[10vw]"
                        />
                    </div>

                </div>

                <div className="text-justify px-3 my-6 opacity-75">
                    <p className="text-xs">Al hacer click en pagar doy conocimiento de que he leido y estoy de acuerdo con los <span><TermsAndConditions /></span> de este producto y autorizo el tratamiento de mis datos personales.</p>
                </div>

                <div className="flex justify-center">
                    <button
                        className="bg-blue-400 text-white font-semibold w-11/12 mt- py-2 mb-2 px-4 rounded-lg hover:bg-sky-400 hover:shadow-lg hover:shadow-cyan-200/50 md:w-7/12"
                        disabled={!buttonActive}
                        onChange={handleInputChange}
                    >
                        Siguiente
                    </button>
                </div>

            </form>

        </FormWindow>

    );
}