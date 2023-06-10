import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
    const [cart,refetch] = useCart();

    const handleDelete=(singleClass)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${singleClass._id}`,{
                method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })

    }
   
    return (
        <div>
            <div className='my-5 border-2 border-b-2 py-5 bg-zinc-50'>
                <h2 className="text-center text-3xl font-bold  text-orange-600">Your Selected class: {cart.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table border w-full mt-5">
                    {/* head */}
                    <thead className=" text-black bg-zinc-50">
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td><img className="h-12 w-12" src={singleClass.classImage} /></td>
                                <td>{singleClass.className}</td>
                                <td>{singleClass.instructorEmail}</td>
                                <td>{singleClass.seats}</td>
                                <td>${singleClass.price}</td>
                                <td><Link to={`/dashboard/payment/${singleClass._id}`}><button className="btn btn-xs bg-green-600  text-white">Enroll</button></Link></td>
                                <td><button onClick={() => handleDelete(singleClass)} className="btn btn-xs bg-red-600  text-white">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;