import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Music School | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <ExtraSection></ExtraSection>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;