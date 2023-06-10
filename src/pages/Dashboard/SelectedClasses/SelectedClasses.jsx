import useCart from "../../../hooks/useCart";

const SelectedClasses = () => {
    const [cart] = useCart();

    const handleEnroll=()=>{

    }
    const handleDelete=()=>{

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
                                <td><button onClick={() => handleEnroll(singleClass)} className="btn btn-xs bg-green-600  text-white">Enroll</button></td>
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