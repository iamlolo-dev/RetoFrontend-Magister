import React, { useState } from 'react'

import { DropListBoxT2 } from '../../droplist/DropListBoxT2';
import { InputMod } from '../../input/InputMod';
import { useGetCollectionData } from '../../../hooks/useGetCollectionData';

export const Step5 = () => {
    
    const [comunidad, setComunidad] = useState([{ id: 0, name: 'Ej: Madrid' }]);
    const [selectedComunidad, setSelectedComunidad] = useState(comunidad[0]);

    useGetCollectionData('comunidades', setComunidad);

    return (
        <>
            <div className='mt-10 text-txt-color-2 text-2xl font-bold p-5 text-center'>Tu dirección</div>

            <div className='m-10 mt-0 w-full'>
                <div className='mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                    Comunidad de Exámen
                </div>
                <div className='text-xs leading-4 text-txt-color-2'>
                    (Selecciona una opción)
                </div>
                <DropListBoxT2 selected={selectedComunidad} setSelected={setSelectedComunidad} data={comunidad} />
            </div>

            <div className='flex flex-col'>
                <div className='m-10 mt-0'>
                    <InputMod name='Dirección' value='direccion' wRange={'w-1/2'} />
                </div>

                <div className='m-10 mt-0 flex flex-row justify-start space-x-10'>
                    <div>
                        <InputMod name='Localidad' value='localidad' wRange={'w-4/4'} />
                    </div>
                    <div>
                        <InputMod name='Provincia' value='Provincia' wRange={'w-4/4'} />
                    </div>
                    <div>
                        <InputMod name='Código Postal' value='CP' wRange={'w-4/4'} />
                    </div>
                </div>
            </div>
        </>
    )
}