import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([EffectCoverflow, Pagination]);

const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: popularClasses = [] } = useQuery(["popular"], async () => {
        const res = await axiosSecure.get("/classes/popular");
        return res.data;
    });

    return (
        <div className="my-12 mx-12 md:mx-0">
            <h2 className="text-5xl font-bold text-center my-12 capitalize text-black">Popular classes</h2>     
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
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
                                <img src={popularClass.classImage} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {popularClass.className}</h2>
                                <p>Instructor Name: {popularClass.instructorName}</p>
                                <p>Price: {popularClass.price}</p>
                                <p>Total Enrolled students: {popularClass.enrolledStudents}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopularClass;
