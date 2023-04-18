import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Footer from "./component/Footer"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import {Router, Routes} from "react-router";
function App() {
  return (
    <div className="App">

    <Navbar/>
    <Home/>
        <Footer/>
    </div>
  );
}

export default App;
