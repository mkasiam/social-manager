import ChooseUs from "../pages/ChooseUs/ChooseUs";
import Banner from "./Banner";
import Events from "./Events";
import OurServices from "./OurServices/OurServices";
import Review from "./Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <OurServices></OurServices>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;