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
import DhakaService from './Components/All District Details/DhakaService';
import BarisalService from './Components/All District Details/BarisalService';
import SylhetService from './Components/All District Details/SylhetService';
import ChittagongService from './Components/All District Details/ChittagongService';
import MymensinghService from './Components/All District Details/MymensinghService';
import KhulnaService from './Components/All District Details/KhulnaService';
import RangpurService from './Components/All District Details/RangpurService';
import RajshahiService from './Components/All District Details/RajshahiService';


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

          <Route path="/dhaka-division" element={<DhakaService/> }>
         </Route>
         <Route path="/barisal-division" element={<BarisalService/>}>
         </Route>

         <Route path="/sylhet-division" element={<SylhetService/>}>
         </Route>

         <Route path="/chittagong-division" element={<ChittagongService/> }>
         </Route>
         <Route path="/mymensingh-division" element={<MymensinghService/>}>
         </Route>

         <Route path="/khulna-division" element={<KhulnaService/>}>
         </Route>

         <Route path="/rangpur-division" element={<RangpurService/>}>
         </Route>
         <Route path="/rajshahi-division" element={<RajshahiService/>}>
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
