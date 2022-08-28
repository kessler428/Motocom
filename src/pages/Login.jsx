//Librerias
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/auth/thunks";


const Login = () => {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onsubmit = (data) => {
        const { email, password } = data;

        dispatch(login(email, password));
    };

    return (
        <div className="flex w-full bg-dark-blue">
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 border-4 border-orange p-6 rounded-3xl">
                    <h1 className="text-3xl lg:text-4xl text-center font-bold pb-8 text-orange">
                    Oumurs Nicaragua
                    </h1>
                <form
                    onSubmit={handleSubmit(onsubmit)}
                    className="justify-center items-center  flex flex-col"
                >
                    <div className="mb-6 w-full border pt-1 bg-white rounded-lg">
                    <label className="block text-gray-500 text-sm ml-3">
                        Direccion de correo electronico
                    </label>
                    <input
                        className="w-full text-gray-700 px-4 outline-none pb-2 rounded-3xl"
                        type="email"
                        autoComplete="off"
                        {...register("email", {
                        required: {
                            value: true,
                            message: "Escribe tu correo",
                        },

                        maxLength: {
                            value: 40,
                            message: "Maximo de caracteres 40",
                        },

                        minLength: {
                            value: 2,
                            message: "Minimo de caracteres 2",
                        },

                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Escribe un correo valido",
                        },
                        })}
                    />
                    <p className="text-red-900 text-1s absolute">
                        {errors.email && errors.email.message}
                    </p>
                    </div>
                    <div className="mb-6 w-full border pt-1 bg-white rounded-lg">
                    <label className="block text-gray-500 text-sm ml-3">
                        Contraseña
                    </label>
                    <input
                        className="w-full text-gray-700 px-4 pb-2 outline-none rounded-3xl"
                        autoComplete="off"
                        type="password"
                        {...register("password", {
                        required: {
                            value: true,
                            message: "Escribe tu contraseña",
                        },

                        maxLength: {
                            value: 25,
                            message: "Maximo de caracteres 25",
                        },

                        minLength: {
                            value: 2,
                            message: "Minimo de caracteres 2",
                        },
                        })}
                    />
                    <p className="text-red-900 text-1s absolute">
                        {errors.password && errors.password.message}
                    </p>
                    </div>
                    <div className="w-full">
                    <button className="px-4 w-full rounded-lg py-4 hover:bg-hover-orange border-2 border-orange text-white font-bold">
                        Iniciar Sesión
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
