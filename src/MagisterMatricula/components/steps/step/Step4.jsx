import React from 'react'
import { useStepperContext } from '../../../contexts/StepperProvider';
import { InputMod } from '../../input/InputMod';

export const Step4 = () => {
    const { userData, setUserData } = useStepperContext();



    return (
        <>
            <div className='mt-10 text-txt-color-2 text-2xl font-bold p-5 text-center'>Tus datos personales</div>
            <div className='flex flex-col'>
                <div className='m-10 mt-0'>
                    <InputMod name='Nombre completo' value='nombreCompleto' wRange={'w-1/2'} />
                </div>

                <div className='m-10 mt-0 flex flex-row justify-start space-x-10'>
                    <div>
                        <InputMod name='DNI - NIE' value='DNI' wRange={'w-4/4'} />
                    </div>
                    <div>
                        <InputMod name='Móvil' value='movil' wRange={'w-4/4'} />
                    </div>
                    <div>
                        <InputMod name='Email' value='DNI' wRange={'w-4/4'} />
                    </div>

                </div>
            </div>
        </>
    );
}
