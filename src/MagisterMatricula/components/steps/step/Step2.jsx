import { useEffect, useState } from "react";

import { useStepperContext } from "../../../contexts/StepperProvider";
import { useGetCollectionData } from "../../../hooks/useGetCollectionData";
import { ButtonGroup } from "../../buttongroup/ButtonGroup";
import { DropListBoxT2 } from "../../droplist/DropListBoxT2";

const init = [
    { id: 0, name: 'cargando...' },
    { id: 0, name: 'cargando...' },
    { id: 0, name: 'cargando...' },
    { id: 0, name: 'cargando...' },
]

export const Step2 = () => {
    const { userData, setUserData } = useStepperContext();

    const [modalidad, setModalidad] = useState(init);
    const [selectedModalidad, setSelectedModalidad] = useState(modalidad[0]);

    const [horario, setHorario] = useState([{ id: 0, name: 'horario 1 ejemplo..' }]);
    const [selectedHorario, setSelectedHorario] = useState(horario[0]);

    useGetCollectionData('Modalidad', setModalidad);
    useGetCollectionData('horario', setHorario);

    useEffect(() => {

        if (selectedModalidad.id !== 0 && selectedHorario.id !== 0) {
            setUserData({ ...userData, ['modalidad']: selectedModalidad.name, ['horario']: selectedHorario.name });
        }
    }, [selectedModalidad, selectedHorario])

    return (
        <>
            <div className='mt-10 text-txt-color-2 text-2xl font-bold p-5 text-center'>Elige el horario y modalidad que más te acomode.</div>
            <div className='flex flex-col'>
                {/* radio buttons modalidad */}
                <div className='m-10 mt-0 w-full'>
                    <div className=' w-full mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                        Modalidad
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>

                    <ButtonGroup selected={selectedModalidad} setSelected={setSelectedModalidad} data={modalidad} />

                </div>
                {/* droplist Provincia */}
                <div className='m-10 mt-0 w-full'>
                    <div className='mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                        Horario
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>
                    <DropListBoxT2 selected={selectedHorario} setSelected={setSelectedHorario} data={horario} />
                    <DropListBoxT2 selected={selectedHorario} setSelected={setSelectedHorario} data={horario} />
                    <DropListBoxT2 selected={selectedHorario} setSelected={setSelectedHorario} data={horario} />
                </div>
            </div >
        </>
    );
}
