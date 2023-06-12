import { useEffect, useState } from "react";
import 'animate.css';
import Marquee from "react-fast-marquee";

const PopularInstructor = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user-popularInstructor')
      .then(res => res.json())
      .then(data => {
        setPopularInstructors(data);
      })
  }, [])
  return (
    <div className="my-12">
      <h2 className="text-2xl md:text-5xl font-bold text-center my-12 animate__animated animate__bounce">Popular Instructors</h2>
      <Marquee>
      <div className="grid grid-cols-6  gap-8">
        {
          popularInstructors.map(popularInstructor => <div key={popularInstructor._id} className="card card-compact w-96 bg-base-100 shadow-xl border-2">
            <figure><img className="h-80" src={popularInstructor.userImage} alt="user" /></figure>
            <div className="card-body">
              <h2 className="text-center text-orange-900 text-2xl font-semibold">{popularInstructor.userName}</h2>
              <p className="text-center font-bold">Email: {popularInstructor.userEmail}</p>
            </div>
          </div>)
        }
      </div>
      </Marquee>
    </div>
  );
};

export default PopularInstructor;