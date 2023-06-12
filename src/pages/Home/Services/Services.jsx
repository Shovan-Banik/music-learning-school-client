import animation1 from '../../../assets/animation/116605-services-title.json';
import animation2 from '../../../assets/animation/71611-singing-and-playing-music-with-guitar.json';
import Lottie from "lottie-react";
const Services = () => {
    return (
        <div className='bg-zinc-100 rounded-xl p-5'>
            <div className='md: w-1/4 w:1/2 mx-auto'>
                <Lottie animationData={animation1} loop={true} />
            </div>
            <div className='md:flex md:justify-between'>
                <div className='md:w-1/2 flex justify-center items-center py-5 px-12'>
                    <div>
                        <h2 className='text-3xl font-semibold text-center pb-4'>Explore the services</h2>
                        <p className='text-justify'>Our highly skilled and experienced instructors are dedicated to helping students develop their musical abilities and reach their full potential. Whether you're a beginner taking your first steps in learning an instrument or an advanced player looking to refine your skills, we have lessons suited for all levels.</p>
                    </div>
                </div>
                <div className='md:w-1/2 p-5'>
                    <Lottie animationData={animation2} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Services;