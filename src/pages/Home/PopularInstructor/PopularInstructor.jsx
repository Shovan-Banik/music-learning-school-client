import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  console.log(popularInstructors);
  useEffect(() => {
    fetch('https://music-learning-school-server.vercel.app/user-popularInstructor')
      .then(res => res.json())
      .then(data => {
        setPopularInstructors(data);
      })
  }, [])
  return (
    <div className="my-12">
      <h2 className="text-2xl md:text-5xl font-bold text-center my-12">Popular Instructors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          popularInstructors.map(popularInstructor => <div key={popularInstructor._id} className="card card-compact w-96 bg-base-100 shadow-xl border-2">
            <figure><img className="h-80" src={popularInstructor.userImage} alt="user" /></figure>
            <div className="card-body">
              <h2 className="card-title">Instructor Name: {popularInstructor.userName}</h2>
              <p>Instructor Email: {popularInstructor.userEmail}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default PopularInstructor;