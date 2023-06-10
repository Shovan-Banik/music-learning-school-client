
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
        <div className='mt-12'>
            <ul>
                {classes.map((classItem) => (
                    <div key={classItem._id} className="card card-side bg-base-100 shadow-xl h-72 w-1/2">
                        <figure><img src={classItem.classImage} className='image-full' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Class Name: {classItem.className}</h2>
                            <p>Instructor Name: {classItem.instructorName}</p>
                            <p>Available Seats: {classItem.instructorName}</p>
                            <p>Price: {classItem.instructorName}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Watch</button>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Classes;
