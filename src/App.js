import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Footer from "./component/Footer"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Education from "./component/Education"
import Certification from "./component/Certifications"
import Projects from "./component/Projects"
import Experience from "./component/Experience"
import MyServices from "./component/MyServices"
import Contact from "./component/Contact"
import Cert from "./component/Recommendations"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
         <div className="App">
             <Router>
                 <Navbar/>
                 <Routes>
                     <Route exact path="/" element={<Home/>}/>
                     <Route exact path="/education" element={<Education/>}/>
                     <Route exact path="/certification" element={<Certification/>}/>
                     <Route exact path="/projects" element={<Projects/>}/>
                     <Route exact path="/certificats" element={<Cert/>}/>
                     <Route exact path="/experience" element={<Experience/>}/>
                     <Route exact path="/services" element={<MyServices/>}/>
                     <Route exact path="/contact" element={<Contact/>}/>

                 </Routes>
                 <Footer/>
             </Router>
    </div>

  );
}

export default App;
