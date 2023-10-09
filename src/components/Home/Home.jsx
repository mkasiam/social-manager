import ChooseUs from "../pages/ChooseUs/ChooseUs";
import Banner from "./Banner";
import Events from "./Events";
import OurServices from "./OurServices/OurServices";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <OurServices></OurServices>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;