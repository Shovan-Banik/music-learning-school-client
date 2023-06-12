import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: instructorClasses = [] } = useQuery(['classes', user?.email], async () => {
        const res = await axiosSecure.get(`/classes/${user?.email}`)
        return res.data;
    })

    // todo:
    const handleUpdate = () => {

    }

    return (
        <>
            <Helmet>
                <title>Music School | Dashboard | MyClasses</title>
            </Helmet>
            <div>
                <div className='my-5 border-2 border-b-2 py-5 bg-zinc-50'>
                    <h2 className="text-center text-3xl font-bold  text-orange-600">My Enrolled Classes</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table border w-full mt-5">
                        {/* head */}
                        <thead className=" text-black bg-zinc-50">
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Enrolled Student</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Feedback</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructorClasses.map((singleClass, index) => <tr key={singleClass._id}>
                                    <th>{index + 1}</th>
                                    <td><img className="h-12 w-12" src={singleClass.classImage} /></td>
                                    <td>{singleClass.className}</td>
                                    <td>{singleClass.enrolledStudents}</td>
                                    <td>{singleClass.status}</td>
                                    <td>{singleClass.price}</td>
                                    <td>{singleClass.feedback}</td>
                                    <td><button onClick={() => handleUpdate(user)} className="btn btn-xs bg-orange-600  text-white">Update</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyClasses;