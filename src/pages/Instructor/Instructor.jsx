import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Zoom} from "react-awesome-reveal";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/instructor");
        setInstructors(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Music School | Instructors</title>
      </Helmet>
      <Zoom><h2 className="text-3xl md:text-5xl font-bold text-center text-orange-700 my-5 uppercase">All Instructors</h2></Zoom>
      <div className="md:grid md:grid-cols-3 gap-4 my-8">
        {instructors.map(instructor => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl mb-2 md:mb-0 px-2 md:px-0 mx-auto border-2 border-orange-600" key={instructor._id}>
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