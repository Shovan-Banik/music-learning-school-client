import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Music School | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
            <PopularClass></PopularClass>
            <Services></Services>
        </div>
    );
};

export default Home;