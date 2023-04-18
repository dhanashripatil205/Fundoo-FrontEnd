import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Page/Login/login'
import SignupNew from './Page/Signup/signup';
import Dashboard from './Page/Dashboard/dashboard';
import ProtectedRoute from './Components/routes/protectedRoute';
import AuthRoute from './Components/routes/authRoute';
import Header from './Components/Header/header';




function Router() {
    return (
      <BrowserRouter>
      <Routes>

          <Route exact path='/' element={<AuthRoute><Login/></AuthRoute>}/>
          <Route  path='/SignupNew' element={<AuthRoute><SignupNew/></AuthRoute>}/>
          <Route  path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          
      </Routes>
   

      </BrowserRouter>
    )
  }
  
  export default Router