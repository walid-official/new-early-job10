import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true
})
const useAxios = () => {
const {userSignOut } = useContext(AuthContext);
const navigate = useNavigate();

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response
        },error => {
            console.log("Error Caught in interceptors",error);
            if(error.status === 401 || error.status === 403){
                console.log("need To Logout The User");
                userSignOut()
                .then(() => {
                    console.log("Logged Out");
                    navigate("/login")
                })
                .catch(error => {
                    console.log(error);
                })
            }
            return Promise.reject(error)
        })
    },[])

    return axiosInstance;
};

export default useAxios;