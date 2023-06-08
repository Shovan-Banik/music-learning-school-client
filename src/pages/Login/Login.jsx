import { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from '../../assets/animation/129750-login-orange.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [err, setErr] = useState("");
    const { register, handleSubmit } = useForm();
    const { signIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage) {
                    setErr("Check your email and password");
                }
            });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse md:w-3/4 my-8">
                <div className="text-center lg:text-left pt-12 md:w-1/2">
                    <div>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-3xl font-semibold py-4 text-center">Login please</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email"
                                {...register("email", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password" {...register("password", { required: true })}
                                className="input input-bordered"
                            />
                            <p className='text-red-500 my-1'>{err}</p>
                        </div>
                        <div className="form-control">
                            <div className="relative">
                                <FaEye className="absolute top-1 right-2" onClick={handleTogglePassword} checked={showPassword}></FaEye>
                                <label className="label">
                                    <span className="label-text-alt">Show password</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn my-btn" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center">New to here! <Link to='/signup'><span className="text-orange-600">SingUP</span></Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;