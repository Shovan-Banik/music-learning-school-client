
import { useEffect, useState } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([]);

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

    return (
        <div className="my-8">
            <div className='text-5xl font-bold text-center my-5'>
                <h2> Classes </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {classes.map((classItem) => (
                    <div key={classItem._id} className="card card-side bg-base-100 shadow-xl h-full border-2 mx-2 md:mx-0">
                        <figure className='w-1/2'>
                            <img src={classItem.classImage} className="object-cover h-full" alt="Class" />
                        </figure>
                        <div className="card-body w-1/2">
                            <h2 className="card-title text-xl font-semibold">{classItem.className}</h2>
                            <p className="mb-4">Instructor: {classItem.instructorName}</p>
                            <p className="mb-4">Available Seats: {classItem.seats}</p>
                            <p className="mb-4">Price: ${classItem.price}</p>
                            <div className="card-actions justify-start">
                                <button className="btn btn-sm btn-neutral">Select</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
