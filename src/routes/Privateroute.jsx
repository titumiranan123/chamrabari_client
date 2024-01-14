import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authporvider";

// eslint-disable-next-line react/prop-types
const Privateroute = ({ children }) => {

    const { user } = useContext(Authcontext)
    const location = useLocation()
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;

};

export default Privateroute;