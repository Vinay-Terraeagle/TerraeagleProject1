import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import Register from './Pages/Register'
// Wizards Section
import Resetpassword from "./Pages/Resetpassword"
import Forgotpassword from './Pages/Forgotpassword'
import Checkemail from "./Pages/Checkemail"
import Passwordchanged from './Pages/Passwordchanged'
import EmailReq from "./Pages/EmailReq"
// Pages
// Dashboard Links
import Dashboard from "./Pages/Dashboard"
import Myplan from "./Pages/Myplan"
import Myprofile from "./Pages/Myprofile"
import Dietplan from "./Pages/Dietplan";
import RecipeView from "./Pages/Recipe"
import RecipeInstructionsView from "./Pages/RecipeInstructions"
import Subscriptionplan from './Pages/Subscriptionplan'
import Notification from './Components/Notification'
import RaiseTicket from './Pages/RaiseTicket'
import Message from "./Pages/Message";
import LeaderBoard from './Pages/LeaderBoard'
// import MySubscriptions from './Components/MySubscriptions'
// Pages
import BloodBiomarker from './Pages/BloodBiomarker'
// error Pages
import PageNotFound from './Errors/PageNotFound'
// test route
import Biodetails from './Components/Biodetails'

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Wizard Sections */}
        {/* Login and Reg Part */}
        <Route path='/'  element={<Dashboard/>}/>
        <Route path='/Login'  element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
         <Route path="/Resetpassword" element={<Resetpassword/>}/>
        <Route path="/Checkemail" element={<Checkemail/>}/>
        <Route path="/Passwordchanged" element={<Passwordchanged/>}/>
        <Route path="/EmailReq" element={<EmailReq/>}/>
        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        {/* DashboardPart */}
        {/* <Route path="/Dashboard" element={<Dashboard/>}/>  */}
        <Route path="/Notification" element={<Notification/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Myplan" element={<Myplan/>}/>
        <Route path="/Myprofile" element={<Myprofile/>}/>
        <Route path="/Dietplan" element={<Dietplan/>}/>
        <Route path="/RecipeView" element={<RecipeView/>}/>
        <Route path="/Subscriptionplan" element={<Subscriptionplan/>}/>
        <Route path="/RaiseTicket" element={<RaiseTicket/>}/>
        <Route path="/Message" element={<Message/>}/>
        <Route path="/LeaderBoard" element={<LeaderBoard/>}/>
        {/* plans and Subscriptions section */}
        {/* <Route path="/MySubscriptions" element={<MySubscriptions/>}/> */}
        {/* Recipe Instructions */}
        <Route path="/RecipeInstructionsView" element={<RecipeInstructionsView/>}/>
        {/* Add-on Pages */}
        <Route path="/BloodBiomarker" element={<BloodBiomarker/>}/>
        {/* ServerErrors */}
        <Route path="*" element={<PageNotFound/>}/>
        
        {/* test route */}
        <Route path="/Biodetails" element={<Biodetails/>}/>
       </Routes>

    </Router>
  </>
  );
}

export default App;
