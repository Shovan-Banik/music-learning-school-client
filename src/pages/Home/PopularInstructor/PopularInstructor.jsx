import { useEffect, useState } from "react";
import { Zoom} from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const PopularInstructor = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    fetch('https://music-learning-school-server.vercel.app/user-popularInstructor')
      .then(res => res.json())
      .then(data => {
        setPopularInstructors(data);
      })
  }, [])
  return (
    <div className="my-12">
      <Zoom><h2 className="text-2xl md:text-5xl font-bold text-center my-12 uppercase">Popular Instructors</h2></Zoom>
      <Marquee>
      <div className="grid grid-cols-6 gap-8">
        {
          popularInstructors.map(popularInstructor => <div key={popularInstructor._id} className="card card-compact w-96 bg-base-100 shadow-xl border-2 mr-5">
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