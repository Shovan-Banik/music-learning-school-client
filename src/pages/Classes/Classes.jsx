import { useEffect, useState } from 'react';
import useUserData from '../../hooks/useUserData';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const [, refetch] = useCart();
    const [userFromDB] = useUserData();
    const role = userFromDB?.role;
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then((response) => response.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((error) => {
                console.error('Error fetching classes:', error);
            });
    }, []);

    const handleAddToCart = (classItem) => {
        const { _id, className, classImage, price, instructorEmail, seats } = classItem;
        if (user && user.email) {
            const selectedClass = { selectedClassId: _id, className, classImage, price, instructorEmail, seats: parseInt(seats), email: user.email };
            axiosSecure.post('/carts', selectedClass)
                .then((response) => response.data)
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added to the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Music School | Classes</title>
            </Helmet>
            <div className="my-8">
                <div className='text-5xl font-bold text-center my-5'>
                    <h2> Classes </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {classes.map((classItem) => (
                        <div
                            key={classItem._id}
                            className={`card card-side shadow-xl h-full border-2 mx-2 md:mx-0 ${classItem.enrolledStudents === classItem.seats ? 'bg-red-200' : 'bg-base-100'
                                }`}
                        >
                            <figure className='w-1/2'>
                                <img src={classItem.classImage} className="object-cover h-full" alt="Class" />
                            </figure>
                            <div className="card-body w-1/2">
                                <h2 className="card-title text-xl font-semibold">{classItem.className}</h2>
                                <p className="mb-4 font-semibold"><span className='text-orange-900 font-bold'>Instructor:</span> {classItem.instructorName}</p>
                                <p className="mb-4ont-semibold"><span className='text-orange-900 font-bold'>Total Seats:</span> {classItem.seats}</p>
                                <p className="mb-4 font-semibold"><span className='text-orange-900 font-bold'>Enrolled Students:</span> {classItem.enrolledStudents}</p>
                                <p className="mb-4 font-semibold"><span className='text-orange-900 font-bold'>Price:</span> ${classItem.price}</p>
                                <div className="card-actions justify-start">
                                    <button
                                        onClick={() => handleAddToCart(classItem)}
                                        className="btn btn-sm btn-neutral"
                                        disabled={role === 'admin' || role === 'instructor' || classItem.enrolledStudents === classItem.seats}
                                    >
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Classes;
