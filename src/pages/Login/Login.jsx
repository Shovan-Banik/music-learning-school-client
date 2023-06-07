import { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from '../../assets/animation/129750-login-orange.json'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left pt-12">
                    <div>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div>
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
                        </div>
                        <div className="form-control">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="absolute top-1 right-2"
                                    checked={showPassword}
                                    onChange={handleTogglePassword}
                                />
                                <label className="label">
                                    <span className="label-text-alt">Show password</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn my-btn" type="submit" value="SignUP" />
                        </div>
                    </form>
                    <p className="text-center">New to here! <Link to='/signup'><span className="text-orange-600">SingUP</span></Link></p>
                    <div className="text-center mt-4 ">
                        <button className="btn btn-circle btn-outline">
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;