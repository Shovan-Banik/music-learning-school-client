import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserData from "../../../hooks/useUserData";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";

const PaymentHistory = () => {
    const [userFromDB] = useUserData();
    const [axiosSecure] = useAxiosSecure();

    const { data: payments = [] } = useQuery(['paymentHistory', userFromDB?._id], async () => {
        const res = await axiosSecure.get(`/paymentHistory/${userFromDB?._id}`);
        return res.data;
    });

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    };

    return (
        <>
            <Helmet>
                <title>Music School | Dashboard | Payment History</title>
            </Helmet>
            <div>
                <div className='my-5 border-2 border-b-2 py-5 bg-zinc-50'>
                    <Zoom><h2 className="text-center text-3xl md:text-5xl font-bold text-orange-700 uppercase">Payment history</h2></Zoom>
                </div>
                <div className="overflow-x-auto">
                    <table className="table border w-full mt-5">
                        {/* head */}
                        <thead className="text-black bg-zinc-50">
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Email</th>
                                <th>Transaction Id</th>
                                <th>Paid Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td><img className="h-12 w-12" src={payment.classImage} /></td>
                                    <td>{payment.className}</td>
                                    <td>{payment.instructorEmail}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.price}</td>
                                    <td>{formatDate(payment.date)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;
