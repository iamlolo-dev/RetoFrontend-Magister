import { useStepperContext } from '../../../contexts/StepperProvider';

export const Account = () => {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };







    return (
        <>
            <div className='text-txt-color-2 text-2xs font-bold p-5'>¿En qué te quieres especializar?</div>
            <div className='flex flex-row'>
                <div className='p-3 w-full flex-1'>

                    <div className='mt-3 h-6 text-xs font-bold leading-8 text-txt-color-2'>
                        Rama
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Selecciona una opción)
                    </div>
                    <div className='my-2 flex rounded border border-txt-color-2 bg-white p-1 rounded-lg'>
                        <input
                            onChange={handleChange}
                            value={userData['rama'] || ''}
                            name='rama'
                            placeholder='Ej: Maestros- Audición y lenguaje'
                            className='w-full appearance-none p-1 px-2 text-gray-800 outline-none'
                        />
                    </div>
                </div>
                <div className='p-3 w-full flex-1'>
                    <div className='mt-3 h-6 text-xs font-bold leading-8 text-txt-color-2'>
                        Provincia
                    </div>
                    <div className='text-xs leading-4 text-txt-color-2'>
                        (Seleccuiona una opción)
                    </div>
                    <div className='my-2 flex rounded border border-txt-color-2 bg-white p-1 rounded-lg'>
                        <input
                            onChange={handleChange}
                            value={userData['provincia'] || ''}
                            name='provincia'
                            placeholder='Ej: Madrid'
                            type='provincia'
                            className='w-full appearance-none p-1 px-2 text-gray-800 outline-none'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
