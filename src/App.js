import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Auth
import Forgotpassword from "./Components/AuthFile/Forgotpassword";
import Checkemail from "./Components/AuthFile/Checkemail"
import Passwordchanged from "./Components/AuthFile/Passwordchanged"
import EmailReq from "./Components/AuthFile/EmailReq"
import Login from "./Components/AuthFile/Login"
import Register from "./Components/AuthFile/Register"
import Logout from "./Components/AuthFile/Logout"
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
// Pages
import BloodBiomarker from './Pages/BloodBiomarker'
// error Pages
import PageNotFound from './Errors/PageNotFound'
// test route
import Biodetails from './Components/Biodetails'
import Discover from "./Pages/Discover";
import ThreadsDetailedView from "./Pages/ThreadsDetailedView"
import StrengthTraining from './Components/Workout/StrengthTraining'
import EventsView from "./Pages/EventsView"
import DailyHealthUpdate from "./Pages/DailyHealthUpdate";
import Talktous from './Components/TalkToUs/Talktous'
import Payment from "./Components/PaymentsPage/Payment";


function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Wizard Sections */}
        {/* Login and Reg Part */}
        <Route path='/'  element={<Login/>}/>
        <Route path='/Dashboard'  element={<Dashboard/>}/>
        <Route path='/Logout'  element={<Logout/>}/>
        <Route path='/Login'  element={<Login/>}/>
        
        <Route path='/Register' element={<Register/>}/>
         {/* <Route path="/Resetpassword" element={<Resetpassword/>}/> */}
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
        <Route path="/Payment" element={<Payment/>}/>
        {/* Recipe Instructions */}
        <Route path="/RecipeInstructionsView" element={<RecipeInstructionsView/>}/>
        {/* Add-on Pages */}
        <Route path="/BloodBiomarker" element={<BloodBiomarker/>}/>
        {/* ServerErrors */}
        <Route path="*" element={<PageNotFound/>}/>
        
        {/* test route */}
        <Route path="/Biodetails" element={<Biodetails/>}/>
        <Route path="/Discover" element={<Discover />} />
        <Route path="/ThreadsDetailedView" element={<ThreadsDetailedView />} />
        <Route path="/EventsView" element={<EventsView />} />
        <Route path="/StrengthTraining" element={<StrengthTraining />} />
        <Route path="/DailyHealthUpdate" element={<DailyHealthUpdate />} />
        <Route path="/Talktous" element={<Talktous/>} />
       </Routes>

    </Router>
  </>
  );
}

export default App;
