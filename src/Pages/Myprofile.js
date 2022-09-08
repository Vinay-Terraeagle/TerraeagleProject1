
  
import React from 'react'
import '../Styles/Myprofile.css'
import Header from '../Components/Header'
import Footer from '../Components/footer'
// import {Container, Col, Row } from 'react-bootstrap'
// import bgbckgr from '../assets/images/background-bg.jpg'
// import Usericon from '../assets/images/user.png'
import { useState } from 'react'
import MyprofileComp from '../Components/MyProfileComponents/MyprofileComp'
import AccountAdmin from '../Components/MyProfileComponents/AccountAdmin'
import EditProfile from '../Components/MyProfileComponents/EditProfile'
// import { Link } from 'react-router-dom'


  export default function Myprofile() {

    const [activeTab, setActiveTab] = useState('MyprofileComp')

    return (
      <React.Fragment>
        <Header/>
       
        {/* myprofile page */}
          <section className='prof-section'>
              <div className='container'>
              <div className='prof-txt'>
                    <h1>Settings</h1>
                </div>
                <div className='myplantablist'>
                <button className={activeTab ==='MyprofileComp' ? 'activeTab activeplan' :'activeplan'} onClick={() => setActiveTab("MyprofileComp")}>My Profile</button>
                <button className={activeTab ==='EditProfile' ? 'activeTab activeplan' :'activeplan'} onClick={() => setActiveTab("EditProfile")}>Edit Profile</button>
                <button className={activeTab ==='AccountAdmin' ? 'activeTab activeplan' :'activeplan'} onClick={() => setActiveTab("AccountAdmin")}>Account Administrator</button>
                </div>
              </div>
          </section>
           {activeTab === "MyprofileComp" && <MyprofileComp/>}
           {activeTab === "EditProfile" && <EditProfile/>}
           {activeTab === "AccountAdmin" && <AccountAdmin/>}
          <Footer/>

      </React.Fragment>
    )
  }
