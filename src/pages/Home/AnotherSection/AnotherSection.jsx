import { FaMicrophoneAlt, FaDesktop, FaLaptopHouse, FaUserFriends } from "react-icons/fa";
import { Slide} from "react-awesome-reveal";

const AnotherSection = () => {
    return (
        <div className="my-12 px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="border-2 shadow-lg p-5 text-center rounded-xl">
                    <div className="flex justify-center">
                        <Slide><FaMicrophoneAlt className="text-5xl text-orange-700"></FaMicrophoneAlt></Slide>
                    </div>
                    <h2 className="text-xl my-2 font-semibold">Free Equipment</h2>
                    <p>We give you the free equipments</p>
                </div>
                <div className="border-2 shadow-lg p-5 text-center rounded-xl">
                    <div className="flex justify-center">
                       <Slide> <FaDesktop className="text-5xl text-orange-700"></FaDesktop></Slide>
                    </div>
                    <h2 className="text-xl my-2 font-semibold">High Tech</h2>
                    <p>We give you the free equipments</p>
                </div>
                <div className="border-2 shadow-lg p-5 text-center rounded-xl">
                    <div className="flex justify-center">
                        <Slide><FaLaptopHouse className="text-5xl text-orange-700"></FaLaptopHouse></Slide>
                    </div>
                    <h2 className="text-xl my-2 font-semibold">Music Studio</h2>
                    <p>We give you the free equipments</p>
                </div>
                <div className="border-2 shadow-lg p-5 text-center rounded-xl">
                    <div className="flex justify-center">
                        <Slide><FaUserFriends className="text-5xl text-orange-700"></FaUserFriends></Slide>
                    </div>
                    <h2 className="text-xl my-2 font-semibold">Expert Teache7</h2>
                    <p>We give you the free equipments</p>
                </div>

            </div>
        </div>
    );
};

export default AnotherSection;