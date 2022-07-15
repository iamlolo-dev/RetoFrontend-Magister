import { useState } from 'react';

import { LogoMagister } from '../components/welcome/LogoMagister';
import { Step1, Step2, Step3, Step4, Step6, Step5, Stepper, StepperControl } from "../components/steps";
import { UseContextProvider } from "../contexts/StepperProvider";

export const StepsHomePage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        '¿En qué te quieres especializar?',
        'Horario y Modalidad',
        'Tarifa',
        'Datos personales',
        'Dirección',
        'Forma de pago',
    ];

    const displayStep = (step) => {
        if (step === 1) return <Step1 />;
        if (step === 2) return <Step2 />;
        if (step === 3) return <Step3 />;
        if (step === 4) return <Step4 />;
        if (step === 5) return <Step5 />;
        if (step === 6) return <Step6 />;

        return null;
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === 'next' ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className='mt-12 mb-12 shadow-xl p-0 m-10'>
            {/* Stepper */}
            <div className='grid grid-cols-8 gap-3'>

                {/* col 1 */}
                <div className='bg-transparent col-span-2 m-5'>
                    <LogoMagister config='w-72 max-w-lg' />
                    <Stepper steps={steps} currentStep={currentStep} />
                </div>

                {/* col 2 */}
                <div className='bg-background-form-color w-90 col-span-6 p-5'>
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>

                    {/* navigation button */}

                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />

                </div>

            </div>
        </div>
    );
}
