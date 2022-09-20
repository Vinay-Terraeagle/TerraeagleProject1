import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import Footer from '../Components/footer'
import Header from '../Components/Header'
// images
import Mount from '../assets/images/Mount.png'
import Demb from '../assets/images/Demb.png'
import groce from '../assets/images/groce.png'
import goals from '../assets/images/goals.png'
import DietPlanComponent from '../Components/DietPlanComponent'
import GroceryListComponent from '../Components/GroceryListComponent'
import HabbitsComponent from '../Components/HabbitsComponent'
import ExcerciseComponent from '../Components/WorkOutComponent/ExcerciseComponent'
import MyprogressComponent from '../Components/MyprogressComponent';
import '../Styles/app.css'
// import DatePicker from 'react-horizontal-datepicker';
import { BASE_URL, TOKEN } from '../Backend/config';
import { useEffect } from 'react';
import moment from 'moment';
import Payment from '../Components/PaymentsPage/Payment';

export default function Myplan() {

  // const [dietplanshow, setDietPlanshow] = useState(false);
  // const [dietplanhide, setdietplanhide] = useState();

  // const dietplanDatashow = {};

  // useEffect(() => {
  //   if(setDietPlanshow == true) {

  //   }else if() {

  //   }
  // })


  const location = useLocation();
  let setDefaultActiveTab = 'dietPlan'
  if(location.state !== null) {
    setDefaultActiveTab = location.state.showTab
  }
  const [activeTab, setActive] = useState(setDefaultActiveTab);

  

  let navigate = useNavigate(); 
    function useNavigateToBloodBiomarker(e) {
        e.preventDefault();
        let path = '/BloodBiomarker'; 
        navigate(path);
    } 

    const selectedDay = val => {
      console.log(val);
    };

    
    const [myprogressData, setMyprogressData]=useState()
    const handleMyProgress = (event) => {
      event.preventDefault()
      setActive("myprogress")
      const config = {
        headers:{
          Authorization: TOKEN,
        }
      }
      const data = {
        client_name: "Deepthi22 (9511938081)" 
      }
      axios.post(`${BASE_URL}/body_measures_client`, data, config)
        .then((myprogressResponse) => {
            console.log("Upload :::: "+myprogressResponse);
            setMyprogressData(myprogressResponse.data.data)
        });
    }

    const [dietPlan, setDietPlan] = useState()
    const [todaysDate, setTodaysDate] = useState()
    const [assignedWorkouts, setAssignedWorkouts] = useState()
    const [habitsAssigned, setHabitsAssigned] = useState()
    const [groceryList, setGroceryList] = useState()
    const [date, setDate] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    

    useEffect(() => { 
      axios.get(`${BASE_URL}/my_plan_section`, {
        headers: {
            Authorization: TOKEN
        }
      })
      .then((myplanResponse) => {

        setDietPlan(myplanResponse.data.data.my_plan_section_details.diet_plan)
        setTodaysDate(myplanResponse.data.data.my_plan_section_details.date)

        setAssignedWorkouts(myplanResponse.data.data.my_plan_section_details.workout_details)

        setHabitsAssigned(myplanResponse.data.data.my_plan_section_details.habit_details)

        setGroceryList(myplanResponse.data.data.my_plan_section_details.grocery_list)
        

       
        setDate(moment(todaysDate).format("DD"))
        setMonth(moment(todaysDate).format("MMMM"))
        setYear(moment(todaysDate).format("YYYY"))

      })

    },[]);

  return (
    <React.Fragment>
      <Header/>
      <section className='myplan'>
        <div className='container'>
          
          <div className='plan-col'>
            <div className='plan-txtrow'>
              <div className='plans-txts'>
                <h1>My Plan</h1>
              </div>
              <div className='plan-btn'>
                <button className='btn-dash-1' onClick={useNavigateToBloodBiomarker}>Blood  BioMarker</button>
              </div>
            </div>
            {/* calender */}
            {/* <div className='cals-col'>
              <DatePicker
                getSelectedDay={selectedDay}
                labelFormat={"MMMM yyyy"}
                color={"#374e8c"}
                selectDate={new Date()}
                endDate = '90'
              />            
            </div> */}
            <div className='dates d-flex justify-content-center'>
                <div>
                  <button className='btn-yesta'>Yesterday</button>
                </div>
                <div>
                  <button className='btn-today'>Today</button>
                </div>
                <div>
                  <button className='btn-Tommar'>Tomorrow</button>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='main-col'>
            <div className='cal-box'>
              <div className='tdy-dte'>
                  <div className='tdy-col'>
                    <h1>{date}</h1>
                      <span>{month}</span>
                      <p>{year}</p>
                  </div>
              </div>
            </div>
            <div className='cal-meal-bx'>
              <div className={activeTab==='dietPlan'?'activeTab calo-crd' : 'calo-crd'}  onClick={() => setActive("dietPlan")}>
                <div className='cl-icn'>
                  <img src={Demb} className="dembo" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>Diet Plan</h1>
                </div>
              </div>
              <div className={activeTab==='exercise'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("exercise")}>
                <div className='cl-icn'>
                <img src={Demb} className="dembo" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>Exercise</h1>
                </div>
              </div>
              <div className={activeTab==='habits'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("habits")}>
                <div className='cl-icn'>
                <img src={goals} className="goals" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>Habits</h1>
                </div>
              </div>
              <div className={activeTab==='groceryList'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("groceryList")}>
                <div className='cl-icn'>
                <img src={groce} className="groce" alt="/"/>
                </div>
                <div className='cl-txt' >
                  <h1>Grocery</h1>
                </div>
              </div>
              <div className={activeTab==='myprogress'?'activeTab calo-crd' : 'calo-crd'} onClick={handleMyProgress}>
                <div className='cl-icn'>
                  <img src={Mount} className="Mounimg" alt='/'/>
                </div>
                <div className='cl-txt'>
                  <h1>My Insight</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {activeTab === "dietPlan" && dietPlan ? <DietPlanComponent myDietPlan={dietPlan}/> : ""}
    {activeTab === "groceryList" && groceryList ? <GroceryListComponent groceryList={groceryList} /> : ""}
    {activeTab === "habits" && habitsAssigned ? <HabbitsComponent habitsAssigned={habitsAssigned} /> : ""}
    {activeTab === "exercise" && assignedWorkouts ? <ExcerciseComponent assignedWorkouts={assignedWorkouts} /> : ""}
    {activeTab === "myprogress" && <MyprogressComponent data={myprogressData}/>}

    

    

    <Footer/>

      
    </React.Fragment>
  )
}
