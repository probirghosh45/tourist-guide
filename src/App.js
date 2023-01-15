import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import OurServices from './Components/OurServices/OurServices';
import About from './Components/AboutUs/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Destination from './Components/Destination/Destination';
import Contact from './Components/ContactUs/Contact';
import OurBlogs from './Components/OurBlogs/OurBlogs';
import Login from './Components/Login/Login/Login';
import Registration from './Components/Login/Registration/Registration';

function App() {
  return (
    <div className="App">
       <Header></Header>
      <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>

          <Route path="/home" element={<Home />}>
          </Route>

          <Route path="/destination" element={ <Destination></Destination>}>
          </Route>

          <Route path="/about" element={<About></About>}>
          </Route>

          <Route path="/services" element={ <OurServices></OurServices>}>
         </Route>

          <Route path="/contact" element={ <Contact></Contact>}>
         </Route>

          <Route path="/blogs" element={ <OurBlogs></OurBlogs>}>
         </Route>

          <Route path="/login" element={ <Login></Login>}>
         </Route>

          <Route path="/registration" element={ <Registration></Registration>}>
         </Route>

          <Route path="*" element={<NotFound />}>
            
          </Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
