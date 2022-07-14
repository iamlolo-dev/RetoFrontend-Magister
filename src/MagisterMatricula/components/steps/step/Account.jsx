import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../../../api/firebase-config';
import { useStepperContext } from '../../../contexts/StepperProvider';
import { DropListBox } from '../../droplist/DropListBox';


export const Account = () => {
    const { userData, setUserData } = useStepperContext();

    const [rama, setRama] = useState([{ id: 0, name: 'Ej: Maestros - Audición y lenguaje', disabled: true }]);
    const [provincia, setProvincia] = useState([{ id: 0, name: 'Ej: Madrid', disabled: true }]);

    const [selectedRama, setSelectedRama] = useState(rama[0])
    const [selectedProvincia, setSelectedProvincia] = useState(provincia[0])

    const ramaCollectionRef = collection(db, 'ramas');
    const provinciasCollectionRef = collection(db, 'provincias');

    useEffect(() => {

        const getRamas = async () => {
            const data = await getDocs(ramaCollectionRef);

            let auxArray = [];

            data.docs.map(doc => (
                auxArray.push(doc.data())

            ))

            setRama(auxArray);
        }

        const getProvincia = async () => {
            const data = await getDocs(provinciasCollectionRef);

            let auxArray = [];

            data.docs.map(doc => (
                auxArray.push(doc.data())

            ))

            setProvincia(auxArray);
        }

        getRamas();
        getProvincia();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <>
            <div className='mt-10 text-txt-color-2 text-2xs font-bold p-5 text-center'>¿En qué te quieres especializar?</div>
            <div className='flex flex-row'>
                {/*  */}
                <div className='p-3 w-full flex-1'>
                    <div className=' w-full mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                        Rama
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>

                    <DropListBox selected={selectedRama} setSelected={setSelectedRama} data={rama} />
                </div>
                {/*  */}
                <div className='p-3 w-full flex-1'>
                    <div className='mt-3 h-7 text-xs font-bold leading-8 text-txt-color-2'>
                        Provincia
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>
                    <DropListBox selected={selectedProvincia} setSelected={setSelectedProvincia} data={provincia} />
                </div>
            </div>
        </>
    );
}
