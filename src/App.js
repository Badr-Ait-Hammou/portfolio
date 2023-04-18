import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Footer from "./component/Footer"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Education from "./component/Education"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
         <div className="App">
             <Router>
                 <Navbar/>
                 <Routes>
                     <Route exact path="/" element={<Home/>}/>
                     <Route exact path="/education" element={<Education/>}/>

                 </Routes>
                 <Footer/>
             </Router>
    </div>

  );
}

export default App;
