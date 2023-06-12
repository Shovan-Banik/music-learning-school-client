import './ExtraSection.css'
import Marquee from "react-fast-marquee";

const ExtraSection = () => {
    return (
        <div className='backImg md:bg-cover md:h-[80vh] mb-12 md:mb-24'>
            <div className='p-12'>
                <div className=' text-left md:text-center mt-20 p-12 bg-black opacity-60'>
                    <Marquee><h2 className='md:text-4xl text-2xl font-bold text-white py-5'>Learn to Play Your Favorite Instrument</h2></Marquee>
                    
                    <p className='text-white text-justify md:text-center py-5'>Learning music from the core and becoming a master is a transformative journey that enriches the soul and opens up a world of endless possibilities. Music is not merely a collection of sounds, but a language that transcends barriers, expresses emotions, and connects people on a profound level.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;