import { Helmet } from "react-helmet-async";
import useAllUserData from "../../../hooks/useAllUserData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageStudent = () => {
    const [allUserFromDB, refetch] = useAllUserData();

    const [axiosSecure] = useAxiosSecure();

const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
        .then(response => response.data)
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user?.userName} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        });
};
    
    const handleMakeInstructor = user => {
        axiosSecure.patch(`/users/instructor/${user._id}`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.userName} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            });
    };


    return (
        <div className="w-full">
            <Helmet>
                <title>Music School | Manage Student</title>
            </Helmet>

            <div className='my-5 border-2 border-b-2 py-5 bg-zinc-50'>
                <h2 className="text-center text-3xl font-bold  text-orange-600">Total Users: {allUserFromDB.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table border w-full">
                    {/* head */}
                    <thead className="bg-zinc-50 text-black">
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUserFromDB.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img className="h-10 w-10 rounded border" src={user.userImage} alt="User" /></td>
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-xs btn-neutral text-white">Admin</button>
                                }</td>
                                <td >{user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-xs btn-neutral  text-white">Instructor</button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageStudent;