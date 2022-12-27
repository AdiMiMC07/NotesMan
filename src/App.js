import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const displayAlert = (message,type)=>{
    setAlert({
      msg : message,
      alertType : type
    });
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  return (
    <>
      <NoteState>
        <Navbar displayAlert={displayAlert}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home displayAlert={displayAlert}/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/login' element={<Login displayAlert={displayAlert}/>} />
          <Route exact path='/signup' element={<Signup displayAlert={displayAlert}/>} />
        </Routes>
      </NoteState>
    </>
  );
}

export default App;
