import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from '../../assets/animation/119048-login-verification.json'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
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
                        <h2 className="text-3xl font-semibold py-4 text-center">SignUp please</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"
                                {...register("name", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email"
                                {...register("email", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password"
                                {...register("password", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input type="password" placeholder="confirm password"
                                {...register("confirm-password", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="url" placeholder="photoURL"
                                {...register("photoURL", { required: true })} className="input input-bordered" />
                        </div>
                        
                        <div className="form-control mt-6">
                            <input className="btn my-btn" type="submit" value="SignUP" />
                        </div>
                    </form>
                    <p className="text-center">Already have an account! <Link to='/login'><span className="text-orange-600">Login</span></Link></p>
                    <div className="text-center my-4 ">
                        <button className="btn btn-circle btn-outline">
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;