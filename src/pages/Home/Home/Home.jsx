import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClass from "../PopularClass/PopularClass";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Music School | Home</title>
            </Helmet>
            <Slider></Slider>
            <ExtraSection></ExtraSection>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;