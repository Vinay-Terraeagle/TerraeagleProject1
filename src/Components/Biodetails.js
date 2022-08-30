import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Col , Row, Card } from 'react-bootstrap'
import '../Styles/BloodBiomarker.css'
import Header from './Header'
import Footer  from './footer'
import biodropdown from './biodropdown'
import biomenuitems from './biomenuitems'
import Breadcrumbs from '../Components/Breadcrumbs';

// Cards
export default function Biodetails() {
    const [crumbs, setCrumbs] = useState(['BloodBiomarker', 'Biodetails']);

    const selected = crumb => { }
    
  return (
   <React.Fragment>
    <Header/>
    <section>
        <Container ClassName="mb-5">
            <Row>
                <div className='bioDet pt-5 pb-4'>
                    <Breadcrumbs crumbs={crumbs} selected={selected}/>
                    <h2>Blood Details</h2>
                </div>
                <Col className='bg-white p-5 bio-detail-wrapper mt-3'>
                    <div className='boicard-body d-flex justify-content-around mt-2'>
                        <div className='table-resp rounded-2'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th><div className='thdiv'>
                                            <span>
                                                Last Test
                                            </span>
                                            <span className='txrp'>Date:01/10/2022</span>
                                            </div></th>
                                        <th>
                                        <div className='thdiv'>
                                            <span>
                                            Recent Test
                                            </span>
                                            <span className='txrp'>Date:01/10/2022</span>
                                            </div>
                                        </th>
                                        <th>Test Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                    <tr data-id="0">
                    <td>Basophils %</td>
                    <td id="row_0_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_0_1"><div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div></td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                   </a>
                   </td>
                </tr>
                <tr data-id="1">
                    <td>Bands - %</td>
                    <td id="row_1_0 d-flex">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_1_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td ClassName="detail">
                    <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                    </a>
                    </td>
                </tr>
                <tr data-id="2">
                    <td>Creatine Kinase</td>
                    <td id="row_2_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_2_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="3">
                    <td>Eosinophils %</td>
                    <td id="row_3_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_3_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="4">
                    <td>ESR</td>
                    <td id="row_4_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_4_1"><div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div></td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="5">
                    <td>PCV</td>
                    <td id="row_5_0"><div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div></td>
                    <td id="row_5_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="6">
                    <td>Hemoglobin</td>
                    <td id="row_6_0" ClassName="">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>12.00</span>
                </div>
                </td>
                    <td id="row_6_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="7">
                    <td>Lymphocytes %</td>
                    <td id="row_7_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_7_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="8">
                    <td>MCH</td>
                    <td id="row_8_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>3.00</span>
                </div></td>
                    <td id="row_8_1" ClassName="optimal">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>29.00</span>
                </div><span ClassName="px-2" id="arrow_8_1"><i ClassName="fa fa-arrow-down"></i></span>
                    </td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="9">
                    <td>MCHC</td>
                    <td id="row_9_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_9_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td ClassName="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="10">
                    <td>MCV</td>
                    <td id="row_10_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_10_1" ClassName="optimal_blw">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>90.00</span>
                </div>
                    <span class="px-2" id="arrow_10_1"></span></td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="11">
                    <td>Monocytes %</td>
                    <td id="row_11_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_11_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="12">
                    <td>Neutrophils %</td>
                    <td id="row_12_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_12_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="13">
                    <td>Platelet Count</td>
                    <td id="row_13_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_13_1" className="above_or_below_std">
                    100.00<span class="px-2" id="arrow_13_1"><i className="fa fa-arrow-down"></i></span>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="14">
                    <td>RBC</td>
                    <td id="row_14_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_14_1" class="above_or_below_std">6.00<span class="px-2" id="arrow_14_1"></span></td>
                    <td class="detail"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="15">
                    <td>RDW-CV</td>
                    <td id="row_15_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_15_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="16">
                    <td>Hs CRP</td>
                    <td id="row_16_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_16_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="17">
                    <td>C-Reactive Protein</td>
                    <td id="row_17_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_17_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="18">
                    <td>MPV</td>
                    <td id="row_18_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_18_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
                <tr data-id="19">
                    <td>RDW-SD</td>
                    <td id="row_19_0">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td id="row_19_1">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E41B17" className="droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/></svg>
                    <span>NA</span>
                </div>
                    </td>
                    <td class="detail"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" fill="currentColor" className="bioarw" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></td>
                </tr>
            </tbody>
                        </table>
                    </div>
                    <div className='information-card'>
                        <div className='inf-card rounded-2'>
                            <div className='headerpart'>
                                <h1>Basophils %</h1>
                            </div>
                            <div className='tabswitch'>
                                <div className='tabs d-flex jusstify-center mb-3'>
                                    <button className='inf-ntr'>Nutritions</button> 
                                    <button className='inf-sym'>Symptoms</button>
                                    <button className='inf'>Information</button>
                                </div>
                            </div>
                            {/*  */}



                            






                            {/*  */}

                            <div className='bodypart '>
                               <div className='navdiv'>
                                    <a href='/'>Lab Results</a>
                               </div>
                               <div class="col-sm-12 col d-flex justify-center">
                                    <div className="col-sm-6" style={{background: 'pink', height: '47px'}}>
                                        <p style={{marginTop: '15px' ,alignItems: 'center'}}>NA<small>%</small></p>
                                        </div>
                                    <div className="col-sm-6" style={{background: 'red', height: '47px'}}>
                                        <p style={{marginTop: '15px' ,alignItems: 'center'}}>NA<small>%</small></p>
                                        </div>
        
                                </div>
                                <div class="col-sm-12 d-flex">
                                    <div class="col-sm-2" style={{height: '4px'}}>
                                    <p style={{fontSize: '10px',marginTop: '1.2rem', width: 'fit-content'}}>low</p></div>
                                    <div class="col-sm-2" style={{height: '4px'}}>
                                    <p style={{fontSize: '10px',marginTop: '1.2rem', width: 'fit-content'}}>border low</p></div>
                                    <div class="col-sm-4" style={{height: '4px', alignItems: 'center'}}>
                                    <p style={{fontSize: '10px',marginTop: '1.2rem', width: 'fit-content'}}>normal</p></div>
                                    <div class="col-sm-2" style={{height: '4px'}}>
                                    <p style={{fontSize: '10px',marginTop: '1.2rem', width: 'fit-content'}}>border high</p></div>
                                    <div class="col-sm-2" style={{height: '4px'}}>
                                    <p style={{fontSize: '10px', marginTop: '1.2rem', width: 'fit-content'}}>high</p></div>
                                </div>

                                <div class="col-sm-12 mt-5 d-flex">
                                    <div class="col-sm-2" style={{height: '4px',background: 'red'}}></div>
                                    <div class="col-sm-2" style={{height: '4px', background: 'orange'}}></div>
                                    <div class="col-sm-4" style={{height: '4px', background: 'green'}}></div>
                                    <div class="col-sm-2" style={{height: '4px', background: 'orange'}}></div>
                                    <div class="col-sm-2" style={{height: '4px', background: 'red'}}></div>
                                </div>
                                <div className='bio-details'>
                                    <span>Background</span>
                                    <p>Basophils are one of the circulating white blood cells. They constitute a small percentage of the total white blood cell count.  Basophils play an important role in the inflammatory process by releasing important substances, such as heparin, to prevent clotting in the inflamed tissue. Basophils will often be increased with tissue inflammation and is often seen with cases of intestinal parasites. </p>
                                    
                                    <span>Discussion</span>
                                    <p>Basophils are phagocytic and contain histamine, heparin, and serotonin in their cytoplasmic granules. They exist both in the blood and in the tissue where they are called mast cells.</p>
                                
                                    <p>Similar to the basophils found in the blood, mast cells store and produce histamine, serotonin, and heparin. Normally, mast cells are not found in peripheral blood. With inflammation, basophils deliver heparin to the affected tissue to prevent clotting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </Col>    
            </Row>
        </Container>
    </section>
    <Footer/>
   </React.Fragment>
  )
}
