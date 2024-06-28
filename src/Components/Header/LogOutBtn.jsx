import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logOut } from "../../store/authSlice";

function LogOutBtn(){

    const dispatch = useDispatch();

    const logOutHandler = () =>{
        authService.logOut().then(() => {
            dispatch(logOut())
        })
    }

    return(
            <button className='bg-blue-700 border border-none text-white font-bold inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full
            hover:text-black' onClick={logOutHandler}>Logout</button>
    )
}

export default LogOutBtn;