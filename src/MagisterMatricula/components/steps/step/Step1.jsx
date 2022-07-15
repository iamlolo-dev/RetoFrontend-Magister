import { useEffect, useState } from 'react';

import { useStepperContext } from '../../../contexts/StepperProvider';
import { DropListBox } from '../../droplist/DropListBox';
import { GoIcon } from '../../svg/GoIcon';
import { ButtonFake } from '../../ButtonFake';
import { useGetCollectionData } from '../../../hooks/useGetCollectionData';


export const Step1 = () => {
    const { userData, setUserData } = useStepperContext();

    const [rama, setRama] = useState([{ id: 0, name: 'Ej: Maestros - Audición y lenguaje', disabled: true }]);
    const [provincia, setProvincia] = useState([{ id: 0, name: 'Ej: Madrid', disabled: true }]);

    const [selectedRama, setSelectedRama] = useState(rama[0])
    const [selectedProvincia, setSelectedProvincia] = useState(provincia[0])

    useGetCollectionData('ramas', setRama);
    useGetCollectionData('provincias', setProvincia);

    useEffect(() => {
        if (selectedRama.id !== 0 && selectedProvincia.id !== 0) {
            setUserData({ ...userData, ['rama']: selectedRama.name, ['provincia']: selectedProvincia.name  });
        }
    }, [selectedRama, selectedProvincia])

    
    return (
        <>
            <div className='mt-10 text-txt-color-2 text-2xl font-bold p-5 text-center'>¿En qué te quieres especializar?</div>
            <div className='flex flex-row'>

                {/* droplist Rama */}
                <div className='p-10 w-full'>
                    <div className=' w-full mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                        Rama
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>

                    <DropListBox selected={selectedRama} setSelected={setSelectedRama} data={rama} />
                </div>
                {/* droplist Provincia */}
                <div className='p-10 w-full'>
                    <div className='mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                        Provincia
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>
                    <DropListBox selected={selectedProvincia} setSelected={setSelectedProvincia} data={provincia} />
                </div>
            </div >
            <div className='m-10'>
                <div className='text-txt-color-2 text-xl '>¿Has sido alumn@ de Magister?</div>
                <div className='text-box-color text-l flex flex-row items-center'>Consulta Condiciones <GoIcon /></div>
                <div className='mt-5 container flex flex-row'>
                    <ButtonFake text={'No'} />
                    <ButtonFake text={'Si'} />
                    <ButtonFake text={'Sí, después de 2017'} />
                </div>
                <div className='mt-12 text-txt-color-2 text-xl '>Entrega de material</div>
                <div className='text-box-color text-l flex flex-row items-center'>Consulta Condiciones <GoIcon /></div>
                <button
                    className='mt-5 rounded-xl bg-button-fak-color text-background-color py-2 px-6 text-txt-color-2 '
                    type="button"
                >
                    Material mes a mes
                </button>
            </div>

        </>
    );
}
