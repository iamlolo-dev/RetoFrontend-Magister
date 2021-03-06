import React, { useState, useEffect, useRef } from "react";

export const Stepper = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepsRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;

        while (count < newSteps.length) {
            //current step
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            }

            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }

        return newSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((step, index) =>
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false,
                }
            )
        );

        stepsRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepsRef.current);
        setNewStep(current);
    }, [steps, currentStep]);

    const stepsDisplay = newStep.map((step, index) => {
        return (
            <div
                key={index}
                className={
                    index !== newStep.length - 1
                        ? "w-full flex flex-col"
                        : "flex items-center"
                }
            >
                <div className="flex mt-10 mb-5 items-center text-white">
                    <div
                        className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-8 w-8 flex items-center justify-center py-3  ${step.selected
                            ? "bg-box-color text-white font-bold border border-box-color "
                            : ""
                            }`}
                    >
                        {step.completed ? (
                            <span className="text-white font-bold text-xl">&#10003;</span>
                        ) : (
                            index + 1
                        )}
                    </div>
                    <div
                        className="ml-5"
                    >
                        {step.description}
                    </div>
                </div>
                {index !== newStep.length - 1 && (
                <div
                    className={`vl justify-center absolute mt-20 ml-4 border-r-2 transition duration-500  ${step.completed ? "border-hover-tp2" : "border-text-color "} `}
                    
                />)}
            </div>
        );
    });

    return (
        <div className="mx-4 p-4 flex flex-col ">
            {stepsDisplay}
        </div>
    );
};