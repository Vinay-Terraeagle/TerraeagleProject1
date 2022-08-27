import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Login from './Components/Login'
import Register from './Pages/Register'
// reset password pages
import Resetpassword from "./Pages/Resetpassword"
import Forgotpassword from './Pages/Forgotpassword'
import Checkemail from "./Pages/Checkemail"
import Passwordchanged from './Pages/Passwordchanged'
import EmailReq from "./Pages/EmailReq"
// Dashboard Links
import Dashboard from "./Pages/Dashboard"
import Myplan from "./Pages/Myplan"
import Myprofile from "./Pages/Myprofile"
import Dietplan from "./Pages/Dietplan";
import RecipeView from "./Pages/Recipe"
import RecipeInstructionsView from "./Pages/recipeInstructions"
import Subscriptionplan from './Pages/Subscriptionplan'
import Notification from './Components/Notification'
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
        <Route path='/'  element={<Dashboard/>}/>
        <Route path='/Register' element={<Register/>}/>
<<<<<<< HEAD
        {/* <Route path="/Dashboard" element={<Dashboard/>}/>  */}
        <Route path="/Notification" element={<Notification/>}/>
=======
        <Route path="/Dashboard" element={<Dashboard/>}/> 
>>>>>>> c087f36692f2e24a328be43b156b6c7aebacbd17
        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        {/* PasswordReset */}
        <Route path="/Resetpassword" element={<Resetpassword/>}/>
        <Route path="/Checkemail" element={<Checkemail/>}/>
        <Route path="/Passwordchanged" element={<Passwordchanged/>}/>
        <Route path="/EmailReq" element={<EmailReq/>}/>
        {/* Dashboard */}
        <Route path="/Myplan" element={<Myplan/>}/>
        <Route path="/Myprofile" element={<Myprofile/>}/>
        <Route path="/Dietplan" element={<Dietplan/>}/>
        <Route path="/RecipeView" element={<RecipeView/>}/>
        <Route path="/Subscriptionplan" element={<Subscriptionplan/>}/>
        {/* Pages */}
        <Route path="/BloodBiomarker" element={<BloodBiomarker/>}/>
        {/* errors */}
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/RecipeInstructionsView" element={<RecipeInstructionsView/>}/>
        {/* test route */}
        <Route path="/Biodetails" element={<Biodetails/>}/>
       </Routes>

    </Router>
  </>
  );
}

export default App;
