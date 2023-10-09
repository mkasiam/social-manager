import { Helmet } from "react-helmet-async";
import ChooseUs from "../pages/ChooseUs/ChooseUs";
import Banner from "./Banner";
import Events from "./Events";
import OurServices from "./OurServices/OurServices";
import Review from "./Review/Review";

const Home = () => {
    return (
        <div data-aos="fade-down">
            <Helmet>
                <title>Social Manager | Home </title>
            </Helmet>
            <Banner></Banner>
            <Events></Events>
            <OurServices></OurServices>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;