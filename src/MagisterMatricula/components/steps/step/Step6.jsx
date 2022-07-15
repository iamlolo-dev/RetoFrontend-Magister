import React, { useEffect, useState } from 'react'

import { useStepperContext } from '../../../contexts/StepperProvider';
import { ButtonFake } from '../../ButtonFake';
import { ButtonGroup } from '../../buttongroup/ButtonGroup'
import { GoIcon } from '../../svg/GoIcon';

const formPago = [
    { id: 1, name: 'Tarjeta de crédito/debito' },
    { id: 2, name: 'Transferencia bancaria' },
]

export const Step6 = () => {

    const { userData, setUserData } = useStepperContext();


    const [formaPago, setFormaPago] = useState(formPago);
    const [selectedFormaPago, setSelectedFormaPago] = useState(null);

    useEffect(() => {

        if (selectedFormaPago !== null) return setUserData({ ...userData, ['formaPago']: selectedFormaPago.name });

    }, [selectedFormaPago])

    return (
        <>
            <div className='mt-10 text-txt-color-2 text-2xl font-bold p-5 text-center'>Forma de pago</div>
            <div className='flex flex-col'>
                {/* radio buttons modalidad */}
                <div className='m-10 mt-0 w-full'>

                    <ButtonGroup selected={selectedFormaPago} setSelected={setSelectedFormaPago} data={formaPago} />
                    <div className='text-box-color text-xl flex flex-row items-center font-bold'>Detalles sobre forma de pago y proceso post pago <GoIcon /></div>
                </div>
            </div>
            <div className='m-10'>
                <div className='text-txt-color-2 text-xl '>¿Has sido alumn@ de Magister?</div>
                <div className='mt-5 container flex flex-row'>
                    <ButtonFake text={'No'} />
                    <ButtonFake text={'Si'} />
                </div>
                <div className='text-box-color text-l flex flex-row items-center'>Ver información legal <GoIcon /></div>
            </div>

        </>
    )
}
