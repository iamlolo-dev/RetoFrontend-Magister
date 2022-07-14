import { useContext, useState } from "react";
import { StepperContext } from "./StepperContext";

export const  UseContextProvider = ({ children }) => {
    const [userData, setUserData] = useState("");

    console.log(userData);

    return (
        <StepperContext.Provider value={{ userData, setUserData }}>
            {children}
        </StepperContext.Provider>
    );
}

export const useStepperContext = () => {
    const { userData, setUserData } = useContext(StepperContext);

    return { userData, setUserData };
}
