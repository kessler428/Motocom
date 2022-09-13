//Librerias
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SpinerLoading } from "../components/SpinnerLoading";
import { login } from "../redux/slices/auth/thunks";
import { setIsLoading } from "../redux/slices/ui/uiSlices";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Access } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.ui);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(setIsLoading(true));
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (Access?.rol === 'Administrador') {
      navigate("/index");
    } else if (Access?.rol === 'Vendedor') {
      navigate("/shop/index");
    }
  }, [Access, navigate]);
  

  return isLoading ? <SpinerLoading /> : (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div className='w-[400px] bg-white border p-9'>
            <p className='mt-4 text-3xl font-light'>Bienvenido!</p>
            <h3 className='text-2xl text-gray-400 font-light'>Iniciar sesion para continuar</h3>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
                <div className='mb-4'>
                    <input 
                        className='w-full p-2 border'
                        type="email"
                        placeholder="Email"
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
                    <p className="text-red-900 text-1s">
                        {errors.email && errors.email.message}
                    </p>
                </div>
                <div className='mb-12'>
                    <input
                        className='w-full p-2 border'
                        type="password"
                        placeholder="Contraseña"
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
                <button
                  type="submit"
                  className='text-sm uppercase w-full text-white tracking-wider border-0 min-h-[40px] mb-10 bg-gradient-to-r from-blue-400 to-purple-800 bg-repeat-x'
                >
                    Iniciar sesion
                </button>
            </form>
        </div>
    </div>
)
};

export default Login;
