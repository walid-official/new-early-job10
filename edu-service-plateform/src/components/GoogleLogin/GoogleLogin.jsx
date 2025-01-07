import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
            console.log(result);
            navigate("/")
        }).catch((error) => {
            console.log("Error is :", error);
        })
    }
    return (
        <div>
             <div className="divider">OR</div>
             <div className="">
                <button type='button' onClick={handleGoogleSignIn} className='btn bg-gradient-to-r from-[#774ede] to-[#8e67f1cb] w-full text-white'>Continue With Google</button>
             </div>
        </div>
    );
};

export default GoogleLogin;