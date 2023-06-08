import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from '../../assets/animation/119048-login-verification.json';
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
// import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { userName: data.name, userEmail: data.email, userImage: data.photoURL, role: 'student' }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/login');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col justify-between lg:flex-row-reverse border-4 my-12 shadow-xl rounded-xl md:w-3/4 px-2">
                <div className="text-center lg:text-left pt-12 md:w-1/2">
                    <div>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-3xl font-semibold py-4 text-center text-orange-600">SignUp please</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered block" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} placeholder="Password" className="input input-bordered" />
                            {errors.password?.type === "required" && <p className="text-red-600">Password is required.</p>}
                            {errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 characters.</p>}
                            {errors.password?.type === "maxLength" && <p className="text-red-600">Password must be less than 20 characters.</p>}
                            {errors.password?.type === "pattern" && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                        </div>
                        <div className="form-control">
                            <div className="relative">
                                <FaEye className="absolute top-1 right-2" onClick={handleTogglePassword} checked={showPassword} />
                                <label className="label">
                                    <span className="label-text-alt">Show password</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input type={showConfirmPassword ? "text" : "password"} {...register("confirmPassword", {
                                required: true,
                                validate: (value) => value === watch("password")
                            })} placeholder="Confirm password" className="input input-bordered" />
                            {errors.confirmPassword?.type === "required" && <span className="text-red-600">Confirm Password is required</span>}
                            {errors.confirmPassword?.type === "validate" && <span className="text-red-600">Passwords must match</span>}
                        </div>
                        <div className="form-control">
                            <div className="relative">
                                <FaEye className="absolute top-1 right-2" onClick={handleToggleConfirmPassword} checked={showConfirmPassword} />
                                <label className="label">
                                    <span className="label-text-alt">Show confirm password</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn my-btn" type="submit" value="SignUP" />
                        </div>
                    </form>
                    <p className="text-center">Already have an account! <Link to="/login"><span className="text-orange-600">Login</span></Link></p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
