import './App.css';
import Header from './Components/Header/header';
import TakeNoteOne from './Components/TakeNoteOne/takeNoteOne';
import TakeNoteTwo from './Components/TakeNoteTwo/takeNoteTwo';
import Login from './Page/Login/login'
import Signup from './Page/Signup/signup';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <TakeNoteOne/> */}
      {/* <TakeNoteTwo/> */}
      <Signup/>
      <Login/>

    </div>
  );
}

export default App;
