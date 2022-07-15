import { useEffect, useState } from "react";

import { useStepperContext } from "../../../contexts/StepperProvider";
import { useGetCollectionData } from "../../../hooks/useGetCollectionData";
import { ButtonGroupT2 } from "../../buttongroup/ButtonGroupT2";

const init = [
    { id: 0, name: 'cargando...' },
    { id: 2, name: 'cargando...' },
    { id: 1, name: 'cargando...' },
]

export const Step3 = () => {
    const { userData, setUserData } = useStepperContext();

    const [tarifa, setTarifa] = useState(init);
    const [selectedTarifa, setSelectedTarifa] = useState(tarifa[0]);

    useGetCollectionData('tarifas', setTarifa);

    useEffect(() => {

        if (selectedTarifa.id !== 0) {
            setUserData({ ...userData, ['tarifa']: selectedTarifa.name });
        }
    }, [selectedTarifa])

    return (
        <>
            <div className='mt-10 text-txt-color-2 text-2xl font-bold p-5 text-center'>Selecciona tú tarifa</div>
            <div className='flex flex-col'>
                {/* droplist tarifa */}
                <div className='m-10 mt-0 w-full'>
                    <div className='mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                        Tarifas
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>
                    <ButtonGroupT2 selected={selectedTarifa} setSelected={setSelectedTarifa} data={tarifa} />
                </div>
            </div >
        </>
    );
}
