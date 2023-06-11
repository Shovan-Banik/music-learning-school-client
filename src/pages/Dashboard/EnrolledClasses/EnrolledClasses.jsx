import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EnrolledClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data: enrolledClasses = [] } = useQuery(['payment', user?.email], async () => {
        const res = await axiosSecure.get(`/payment/${user?.email}`)
        return res.data;
    })

    return (
        <div>
            <div className='my-5 border-2 border-b-2 py-5 bg-zinc-50'>
            <h2 className="text-center text-3xl font-bold  text-orange-600">My Classes</h2>
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
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map((singleClass, index) => <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td><img className="h-12 w-12" src={singleClass.classImage} /></td>
                                <td>{singleClass.className}</td>
                                <td>{singleClass.instructorEmail}</td>
                                <td>{singleClass.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;