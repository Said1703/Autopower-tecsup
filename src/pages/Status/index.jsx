import { Stepper, Step, Button } from "@material-tailwind/react";
import { useState } from "react";


export default function Status() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className="w-full bg-white py-4 px-10 mt-24 border ">
            <div className="md:w-4/12 border m-auto">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step onClick={() => setActiveStep(0)}>1</Step>
                    <Step className="bg-white border border-darkblue" onClick={() => setActiveStep(1)}>2</Step>
                    <Step className="bg-white border border-darkblue" onClick={() => setActiveStep(2)}>3</Step>
                </Stepper>
                <div className="mt-16 flex justify-between">
                    <Button onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                    </Button>
                    <Button onClick={handleNext} disabled={isLastStep}>
                        Next
                    </Button>
                </div>
                <div>
                    {activeStep === 0 && (
                        <>
                            Estammos en el 1
                        </>

                    )}
                    {activeStep === 1 && (
                        <>
                            Estammos en el 2
                        </>

                    )}
                    {activeStep === 2 && (
                        <>
                            Estammos en el 3
                        </>

                    )}
                </div>
            </div>
            
        </div>
    );
}