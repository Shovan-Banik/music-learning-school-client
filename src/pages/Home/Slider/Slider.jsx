import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/1.jpg';
import banner2 from '../../../assets/banner/2.jpg';
import banner3 from '../../../assets/banner/3.jpg';
import banner4 from '../../../assets/banner/4.jpg';

const Slider = () => {
    return (
       <div > <Carousel autoPlay autoFocus className="">
       <div>
           <img  src={banner1} alt="Banner 1" />
           <div className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 text-white p-10 md:p-4">
               <h2 className="md:text-5xl text-xl font-bold">Improve Your Skill With Us</h2>
               <hr className="w-1/4 mx-auto my-4 hidden md:block"/>
               <p className="py-5 text-justify hidden md:block">We are thrilled to have you here on this virtual journey into the world of music. Whether you're a beginner taking your first steps or an experienced musician looking to further refine your skills, our school offers a nurturing and inspiring environment for students of all ages and levels.</p>
           </div>
       </div>
       <div>
           <img src={banner2} alt="Banner 2" />
           <div className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 text-white p-10 md:p-4">
               <h2 className="md:text-5xl text-xl font-bold "> Discover the Language of Music</h2>
               <hr className="w-1/4 mx-auto my-4 hidden md:block"/>
               <p className="py-5 text-justify hidden md:block"> At our music school, we take pride in offering a comprehensive range of musical programs and services to cater to the diverse needs and interests of our students. Whether you're a complete beginner or an experienced musician looking to refine your skills, we have something to offer you.</p>
           </div>
       </div>
       <div>
           <img src={banner3} alt="Banner 3" />
           <div className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 text-white p-10 md:p-4">
               <h2 className=" md:text-5xl text-xl font-bold  ">Unleash Your Musical Talent</h2>
               <hr className="w-1/4 mx-auto my-4 hidden md:block"/>
               <p className="py-5 text-justify hidden md:block">Our dedicated team of experienced instructors is passionate about music and committed to helping you unlock your full potential. We provide individualized lessons tailored to your specific goals and aspirations, ensuring that you receive the personalized attention you deserve.</p>
           </div>
       </div>
       <div>
           <img src={banner4} alt="Banner 4" />
           <div className="absolute top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 text-white p-10 md:p-4">
               <h2 className="md:text-5xl text-xl font-bold ">Find Your Groove with Us</h2>
               <hr className="w-1/4 mx-auto my-4 hidden md:block"/>
               <p className="py-5 text-justify hidden md:block">Welcome to our music school website! We are thrilled to have you here on this virtual journey into the world of music. Whether you're a beginner taking your first steps or an experienced musician looking to further refine your skills, our school offers a nurturing and inspiring environment for students of all ages and levels.</p>
           </div>
       </div>
   </Carousel></div>
    );
};

export default Slider;
