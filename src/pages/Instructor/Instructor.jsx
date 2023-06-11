import { useEffect, useState } from "react";
import axios from "axios";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://music-learning-school-server.vercel.app/instructor");
        setInstructors(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-orange-600 my-5 uppercase">All Instructors</h2>
      <div className="md:grid md:grid-cols-3 gap-4 my-8">
        {instructors.map(instructor => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-orange-600" key={instructor._id}>
            <figure>
              <img src={instructor.userImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {instructor.userName}</h2>
              <p>Email: {instructor.userEmail}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructor;