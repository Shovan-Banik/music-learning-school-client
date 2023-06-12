import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import 'animate.css';

SwiperCore.use([EffectCoverflow, Pagination]);

const PopularClass = () => {
    const[popularClasses,setPopularClasses]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/classes/popular')
        .then(res=>res.json())
        .then(data=>{
            setPopularClasses(data);
        })
    },[])

    return (
        <div className="my-12 mx-6 md:mx-0">
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 capitalize text-black animate__animated animate__bounce">Popular classes</h2>     
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                }}
            >
                {popularClasses.map((popularClass) => (
                    <SwiperSlide key={popularClass._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                            <figure>
                                <img className="h-80" src={popularClass.classImage} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{popularClass.className}</h2>
                                <p className="font-bold text-black"><span className='text-orange-900 font-bold'>Instructor Name:</span> {popularClass.instructorName}</p>
                                <p className="font-bold text-black"><span className='text-orange-900 font-bold'>Price:</span> {popularClass.price}</p>
                                <p className="font-bold text-black pb-5"><span className='text-orange-900 font-bold'>Total Enrolled students:</span> {popularClass.enrolledStudents}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopularClass;
