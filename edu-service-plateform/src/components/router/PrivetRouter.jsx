import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          );
    }
    if(user) return children;
    return <Navigate state={location.pathname} to="/login"></Navigate>
}   


export default PrivetRouter;