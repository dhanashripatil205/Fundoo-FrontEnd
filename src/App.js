import './App.css';
import Header from './Components/Header/header';
import TakeNoteOne from './Components/TakeNoteOne/takeNoteOne';
import TakeNoteTwo from './Components/TakeNoteTwo/takeNoteTwo';
import Login from './Page/Login/login'
import SignupNew from './Page/Signup/signup';
import Dashboard from './Page/Dashboard/dashboard';
import Router from './router';
import TakeNoteThree from './Components/TakeNoteThree/takeNoteThree'


function App() {
  return (
    <div className="App">
      {/* <TakeNoteOne/> */}
      {/* <TakeNoteThree/> */}
      {/* <TakeNoteTwo/> */}
      {/* <SignupNew/>
      <Login/>
      <Dashboard/> */}
      <Router />


    </div>
  );
}

export default App;
