import React from 'react'
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {
 if(localStorage.getItem('token')){
    console.log(children)
    return children
 }else{
    return <Navigate to="/" replace={true} />
 }
}

export default ProtectedRoute