/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Stepper, Step } from "@material-tailwind/react";

export default function Status({ Step1, Step2, Step3, Step4, valoresForms, setValoresForms }) {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    return (
        <>
            <div className="w-full bg-white-skyblue py-4 px-10">
                <div className="md:w-4/12 m-auto">
                    <Stepper
                        activeStep={activeStep}
                        isLastStep={(value) => setIsLastStep(value)}
                        isFirstStep={(value) => setIsFirstStep(value)}
                        lineClassName="bg-darkblue"
                        activeLineClassName="bg-darkblue"
                    >
                        <Step
                            className="bg-gray-200 border border-darkblue"
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            
                        >
                            1
                        </Step>

                        <Step
                            className="bg-gray-200 border border-darkblue"
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            
                        >
                            2
                        </Step>

                        <Step
                            className="bg-gray-200 border border-darkblue"
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            
                        >
                            3
                        </Step>

                        <Step
                            className="bg-gray-200 border border-darkblue"
                            activeClassName="bg-skyblue"
                            completedClassName="bg-darkblue-select"
                            
                        >
                            4
                        </Step>

                    </Stepper>


                </div>

            </div>

            <div>
                {activeStep === 0 && <Step1 valoresForms={valoresForms} setValoresForms={setValoresForms} setActiveStep={setActiveStep} />}
                {activeStep === 1 && <Step2 setActiveStep={setActiveStep} />}
                {activeStep === 2 && <Step3 setActiveStep={setActiveStep}/>}
                {activeStep === 3 && <Step4 valoresForms={valoresForms} setValoresForms={setValoresForms} setActiveStep={setActiveStep}/>}
            </div>
        </>
    );
}