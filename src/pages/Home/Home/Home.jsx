import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Services from "../Services/Services";
import AnotherSection from "../AnotherSection/AnotherSection";

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
            <AnotherSection></AnotherSection>
        </div>
    );
};

export default Home;