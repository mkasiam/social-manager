import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-dots loading-lg text-center py-14"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};
PrivateRoute.propTypes = {
    children:PropTypes.node, 
}
export default PrivateRoute;