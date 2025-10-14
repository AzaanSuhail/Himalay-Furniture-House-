import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children, adminOnly }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && user.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    adminOnly: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
    adminOnly: false,
};

export default ProtectedRoute;