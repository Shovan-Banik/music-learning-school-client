import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaEdit } from "react-icons/fa";

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: instructorClasses = [] } = useQuery(['classes', user?.email], async () => {
        const res = await axiosSecure.get(`/classes/${user?.email}`)
        return res.data;
    })

    // todo:
    const handleUpdate=()=>{

    }

    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-5 text-orange-600">My Classes</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full mt-5">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Enrolled Student</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClasses.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td><img className="h-12 w-12" src={singleClass.classImage}/></td>
                                <td>{singleClass.className}</td>
                                <td>{singleClass.enrolledStudents}</td>
                                <td>{singleClass.status}</td>
                                <td>{singleClass.price}</td>
                                <td><button onClick={() => handleUpdate(user)} className="btn btn-sm bg-orange-600  text-white flex">update<FaEdit ></FaEdit></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;