import { useNavigate } from "react-router-dom";
import { CheckIcon } from "../../svg/CheckIcon";

export const Final = () => {

    const navigate = useNavigate();

    const onClick = () => navigate('/start');

    return (
        <div className="container md:mt-10">
            <div className="flex flex-col items-center">
                <div className="wrapper">
                    <CheckIcon />
                </div>
                <div className="mt-3 text-xl font-semibold uppercase text-box-color">
                    BIEN HECHO!
                </div>
                <div className="text-lg font-semibold text-gray-500">
                    Tú matricula se ha registrado correctamente.
                </div>
                <a className="mt-10">
                    <button
                        className="h-10 px-5 text-box-color transition-colors duration-150 border border-hover-tp1 rounded-lg focus:shadow-outline hover:bg-box-color hover:text-white hover:border-white"
                        onClick={onClick}
                    >
                        Cerrar
                    </button>
                </a>
            </div>
        </div>
    );
}
