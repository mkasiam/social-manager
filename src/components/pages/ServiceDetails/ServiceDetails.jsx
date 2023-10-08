import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const details = useParams();
    console.log(details);
    return (
        <div>
            <h1>Hello I am all time enjoyable service details</h1>
        </div>
    );
};

export default ServiceDetails;