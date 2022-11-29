import React, { useContext } from 'react';
import { Blocks } from 'react-loader-spinner'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='mt-80 w-10 mx-auto'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;