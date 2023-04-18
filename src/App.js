import './App.css';

import Home from "./component/Home"
import Navbar from "./component/Navbar"
import {Router, Routes} from "react-router";
function App() {
  return (
    <div className="App">

    <Navbar/>
<Home/>
    </div>
  );
}

export default App;
