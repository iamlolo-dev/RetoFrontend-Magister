import React from 'react'
import { useStepperContext } from '../../contexts/StepperProvider';

export const InputMod = ({name, value, wRange}) => {

    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <>
            <div className="font-bold h-6 mt-3 text-txt-color-2 text-xs leading-8 uppercase">
                {name}
            </div>
            <div className={`bg-white my-2 p-2 mt-5 border border-hover-tp1 rounded-xl ${wRange} shadow-lg`}>
                <input
                    onChange={handleChange}
                    value={userData[value] || ""}
                    name={value}
                    placeholder="Ej: Camila Perez Sánchez"
                    className="px-2 appearance-none outline-none text-gray-800"
                />
            </div>
        </>
    )
}
