import { useState } from 'react';
import { Account, Details, Final, Payment, Stepper, StepperControl } from "../components/steps";
import { LogoMagister } from '../components/welcome/LogoMagister';
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

        if (step === 1) return <Account />;
        if (step === 2) return <Details />;
        if (step === 3) return <Payment />;
        if (step === 4) return <Final />;

        return null;
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === 'next' ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className='mt-12 mb-12 rounded-2xl shadow-xl p-0 m-10'>
            {/* Stepper */}
            <div className='grid grid-cols-8 gap-3'>

                {/* col 1 */}
                <div className='bg-transparent col-span-2 m-5'>
                    <LogoMagister config='w-72 max-w-lg' />
                    <Stepper steps={steps} currentStep={currentStep} />
                </div>

                {/* col 2 */}
                <div className='bg-white w-90 rounded-2xl col-span-6'>
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>

                    {/* navigation button */}
                    {currentStep !== steps.length && (
                        <StepperControl
                            handleClick={handleClick}
                            currentStep={currentStep}
                            steps={steps}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}
