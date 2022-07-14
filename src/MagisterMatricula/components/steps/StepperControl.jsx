
export const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <div className="container mt-4 mb-8 flex justify-around">

            {currentStep !== 1 && (
                <button
                    onClick={() => handleClick()}
                    className={`rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
                        }`}
                >
                    Back
                </button>
            )}

            <button
                onClick={() => handleClick("next")}
                className="rounded-lg shadow-lg text-lg bg-box-color py-2 px-14 font-bold text-white transition duration-200 ease-in-out hover:text-hover-tp2"
            >
                {currentStep === steps.length - 1 ? "Confirm" : "Siguiente"}
            </button>
        </div>
    );
}