import { Helmet } from "react-helmet-async";
import useAllUserData from "../../../hooks/useAllUserData";
import { FaUserSecret, FaUserTag } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageStudent = () => {
    const [allUserFromDB, refetch] = useAllUserData();

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.userName} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.userName} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }


    return (
        <div className="w-full">
            <Helmet>
                <title>Music School | Manage Student</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4 text-center">Total Users: {allUserFromDB.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
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
                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm bg-orange-600  text-white">admin<FaUserSecret></FaUserSecret></button>
                                }</td>
                                <td>{user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-sm bg-orange-600  text-white">Instructor<FaUserTag></FaUserTag></button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageStudent;