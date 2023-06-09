import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAClass = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const[axiosSecure]=useAxiosSecure();

    const onSubmit = data => {
        const { className, classImage, instructorEmail, instructorName, price, seats } = data;
        const newClass = { className, classImage, instructorEmail, instructorName, price: parseFloat(price), seats, status: 'pending', enrolledStudents:0}
        console.log(newClass);
        axiosSecure.post('/classes',newClass)
        .then(data=>{
            console.log('after added new class',data.data);
            if(data.data.insertedId){
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body  md:w-3/4 mx-auto">
                <h2 className="text-3xl font-semibold py-4 text-center text-orange-600">Add a Class</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name" {...register("className", { required: true })} className="input input-bordered block" />
                    {errors.className && <span className="text-red-600">Class name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="text" placeholder="Photo URL" {...register("classImage", { required: true })} className="input input-bordered" />
                    {errors.classImage && <span className="text-red-600">Class image is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" readOnly defaultValue={user?.displayName} {...register("instructorName", { required: true })} className="input input-bordered" />
                    {errors.instructorName && <span className="text-red-600">Instructor Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" readOnly defaultValue={user?.email} placeholder="Email" {...register("instructorEmail", { required: true })} className="input input-bordered" />
                    {errors.instructorEmail && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="number" min={0} placeholder="number of seats" {...register("seats", { required: true })} className="input input-bordered" />
                    {errors.seats && <span className="text-red-600">Seats is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" min={0} placeholder="price" {...register("price", { required: true })} className="input input-bordered" />
                    {errors.price && <span className="text-red-600">Price is required</span>}
                </div>

                <div className="form-control mt-6">
                    <input className="btn my-btn" type="submit" value="Add A Class" />
                </div>
            </form>
        </div>
    );
};

export default AddAClass;