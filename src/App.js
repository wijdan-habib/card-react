import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
// import AboutUs from './components/AboutUs';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import CrudFirebase from './components/CrudFirebase';

function App() {
  return (
    <div >
     
      <Routes>
        <Route path="/" element={<CrudFirebase/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile/:id" element={<UserProfile/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
