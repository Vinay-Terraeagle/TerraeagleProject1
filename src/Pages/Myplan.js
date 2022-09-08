import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
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
import ExcerciseComponentCopy from '../Components/WorkOutComponent/ExcerciseComponentCopy'
import MyprogressComponent from '../Components/MyprogressComponent';
import '../Styles/app.css'
import DatePicker from 'react-horizontal-datepicker';

export default function Myplan() {
  const [activeTab, setActive] = useState('dietPlan');

  let navigate = useNavigate(); 
    function useNavigateToBloodBiomarker(e) {
        e.preventDefault();
        let path = '/BloodBiomarker'; 
        navigate(path);
    } 

    const selectedDay = val => {
      console.log(val);
    };

  return (
    <React.Fragment>
      <Header/>
      <section className='myplan'>
        <div className='container'>
          <div></div>
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
            <div className='cals-col'>
              <DatePicker
                getSelectedDay={selectedDay}
                labelFormat={"MMMM yyyy"}
                color={"#374e8c"}
                selectDate={new Date()}
                endDate = '90'
              />
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
                    <h1>01</h1>
                      <span>August</span>
                      <p>2022</p>
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
                <div className='cl-txt'>
                  <h1>Grocery plan</h1>
                </div>
              </div>
              <div className={activeTab==='myprogress'?'activeTab calo-crd' : 'calo-crd'} onClick={() => setActive("myprogress")}>
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
    {activeTab === "dietPlan" && <DietPlanComponent/>}
    {activeTab === "groceryList" && <GroceryListComponent/>}
    {activeTab === "habits" && <HabbitsComponent />}
    {activeTab === "exercise" && <ExcerciseComponentCopy />}
    {activeTab === "myprogress" && <MyprogressComponent />}

    

    

    <Footer/>

      
    </React.Fragment>
  )
}
