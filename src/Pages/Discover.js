import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../Components/footer'
import Header from '../Components/Header'
import BreakfastRecipe from "../assets/images/blueberryToast.jpg"
import {Eye} from 'react-bootstrap-icons'
import {ChatText} from 'react-bootstrap-icons'
import {Search} from 'react-bootstrap-icons'
import {ArrowRight} from 'react-bootstrap-icons'

import '../Styles/Discover.css'


export default function Discover() {
    let navigate = useNavigate(); 
    const renderThreadsDetailedView = (e) => {
        e.preventDefault();
        let path = '/ThreadsDetailedView'; 
        navigate(path);
    }

  return (
    <React.Fragment>
        <Header/>
        <div className='container'>
            <h2 className="mt-4"> Threads</h2>
            <div className='threads-container w-100'>
                
                <div className='row mt-3'>
                    <form method="GET" action="https://wellness.revibe.in/threads/search" class="d-inline order-md-1">
                        <div class="sidebar-item sidebar-search col-6">
                            <div class="input-group">
                                <input type="text" name="q" id="q" required="" class="form-control search-menu" placeholder="Search Wellness..." autocomplete="off" />
                                <div class="input-group-append">
                                    <button type="submit" class="input-group-text search-menu-icon">
                                    <Search />
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
                <div className='row mb-5 mt-3 search-filter-wrapper'>
                    <div class="col-2 fs-18 filter-wrapper">
                        Filter By: 
                        <span className='arrow-wrapper'>
                            <ArrowRight className='arrow-icon'/>
                        </span>
                    </div>
                    <div class="col-2 text-center">
                        <a class="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" href="" v-tooltip="''">
                        <i class="fa fa-dumbbell"></i>
                        Workouts
                        </a>
                    </div>
                    <div class="col-2 text-center">
                        <a class="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter threads by Mental Wellness'">
                        <i class="fas fa-user-md red"></i>
                        Mental Wellness
                        </a>
                    </div>
                    <div class="col-2 text-center">
                        <a class="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter threads by Kids Nutrition'">
                        <i class="fas fa-baby blue"></i>
                        Kids Nutrition
                        </a>
                    </div>
                    <div class="col-2 text-center">
                        <a class="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter threads by General'">
                        <i class="fas fa-th"></i>
                        General
                        </a>
                    </div>
                    <div class="col-2 text-center">
                        <a class="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter threads by Nutrition'">
                        <i class="fab fa-nutritionix blue"></i>
                        Nutrition
                        </a>
                    </div>

                </div>
                <div className='row'>
                    <div class="col-8 p-4">
                        <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center">
                                    <a class="mr-2" title="How do millet affect your metabolism?" href="">
                                        <h3 class="font-weight-bold">
                                        How do millet affect your metabolism?
                                        </h3>
                                    </a>
                                        <div class="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                            <span class="d-flex align-items-center rounded-pill">
                                                <span>3</span>
                                                <Eye color='#fff' className='eye-icon'/>
                                                <span>1</span>
                                                <ChatText color='#fff' className='chat-icon'/>
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="secondary" title="Benefits of Millet's&nbsp;">
                                Benefits of Millet's&nbsp;
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 d-flex align-items-center justify-content-between">
                                    <div class="mr-auto d-flex align-items-center">
                                        <img src={BreakfastRecipe} alt="/"  class="img-fluid rounded-circle" width="20" /> 
                                        <div class="d-flex flex-column ml-2">
                                        sanjana
                                        <small class="text-capitalize font-weight-bold text-muted"> asked
                                        2 days ago...</small>
                                        </div>
                                    </div>
                                    <div class="ml-auto">
                                        <span class="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold" v-tooltip="'Filter threads by General'">
                                        <i class="fas fa-th"></i>
                                        General
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center">
                                    <a class="mr-2" title="How do millet affect your metabolism?" href="">
                                        <h3 class="font-weight-bold">
                                        How do millet affect your metabolism?
                                        </h3>
                                    </a>
                                        <span class="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                        <span class="d-flex align-items-center rounded-pill">
                                            <span>3</span>
                                            <Eye color='#fff' className='eye-icon'/>
                                            <span>1</span>
                                            <ChatText color='#fff' className='chat-icon'/>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="secondary" title="Benefits of Millet's&nbsp;">
                                Benefits of Millet's&nbsp;
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 d-flex align-items-center justify-content-between">
                                    <div class="mr-auto d-flex align-items-center">
                                        <img src={BreakfastRecipe} alt="/"  class="img-fluid rounded-circle" width="20" /> 
                                        <div class="d-flex flex-column ml-2">
                                        sanjana
                                        <small class="text-capitalize font-weight-bold text-muted"> asked
                                        2 days ago...</small>
                                        </div>
                                    </div>
                                    <div class="ml-auto">
                                        <span class="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold" v-tooltip="'Filter threads by General'">
                                        <i class="fas fa-th"></i>
                                        General
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center">
                                    <a class="mr-2" title="How do millet affect your metabolism?" href="">
                                        <h3 class="font-weight-bold">
                                        How do millet affect your metabolism?
                                        </h3>
                                    </a>
                                        <span class="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                        <span class="d-flex align-items-center rounded-pill">
                                            <span>3</span>
                                            <Eye color='#fff' className='eye-icon'/>
                                            <span>1</span>
                                            <ChatText color='#fff' className='chat-icon'/>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="secondary" title="Benefits of Millet's&nbsp;">
                                Benefits of Millet's&nbsp;
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 d-flex align-items-center justify-content-between">
                                    <div class="mr-auto d-flex align-items-center">
                                        <img src={BreakfastRecipe} alt="/"  class="img-fluid rounded-circle" width="20" /> 
                                        <div class="d-flex flex-column ml-2">
                                        sanjana
                                        <small class="text-capitalize font-weight-bold text-muted"> asked
                                        2 days ago...</small>
                                        </div>
                                    </div>
                                    <div class="ml-auto">
                                        <span class="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold"  v-tooltip="'Filter threads by General'">
                                        <i class="fas fa-th"></i>
                                        General
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center">
                                    <a class="mr-2" title="How do millet affect your metabolism?" href="">
                                        <h3 class="font-weight-bold">
                                        How do millet affect your metabolism?
                                        </h3>
                                    </a>
                                        <span class="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                        <span class="d-flex align-items-center rounded-pill ">
                                            <span>3</span>
                                            <Eye color='#fff' className='eye-icon'/>
                                            <span>1</span>
                                            <ChatText color='#fff' className='chat-icon'/>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="secondary" title="Benefits of Millet's&nbsp;">
                                Benefits of Millet's&nbsp;
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 d-flex align-items-center justify-content-between">
                                    <div class="mr-auto d-flex align-items-center">
                                        <img src={BreakfastRecipe} alt="/"  class="img-fluid rounded-circle" width="20" /> 
                                        <div class="d-flex flex-column ml-2">
                                        sanjana
                                        <small class="text-capitalize font-weight-bold text-muted"> asked
                                        2 days ago...</small>
                                        </div>
                                    </div>
                                    <div class="ml-auto">
                                        <span class="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold" v-tooltip="'Filter threads by General'">
                                        <i class="fas fa-th"></i>
                                        General
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center">
                                    <a class="mr-2" title="How do millet affect your metabolism?" href="">
                                        <h3 class="font-weight-bold">
                                        How do millet affect your metabolism?
                                        </h3>
                                    </a>
                                        <span class="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                        <span class="d-flex align-items-center rounded-pill">
                                            <span>3</span>
                                            <Eye color='#fff' className='eye-icon'/>
                                            <span>1</span>
                                            <ChatText color='#fff' className='chat-icon'/>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="secondary" title="Benefits of Millet's&nbsp;">
                                Benefits of Millet's&nbsp;
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 d-flex align-items-center justify-content-between">
                                    <div class="mr-auto d-flex align-items-center">
                                        <img src={BreakfastRecipe} alt="/"  class="img-fluid rounded-circle" width="20" /> 
                                        <div class="d-flex flex-column ml-2">
                                        sanjana
                                        <small class="text-capitalize font-weight-bold text-muted"> asked
                                        2 days ago...</small>
                                        </div>
                                    </div>
                                    <div class="ml-auto">
                                        <span class="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold" v-tooltip="'Filter threads by General'">
                                        <i class="fas fa-th"></i>
                                        General
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-4 trending-questions-wrapper mt-5'>
                        <div class="d-flex">
                            <span class="mr-2 fw-bold blink fs-20 trending-label">
                            🔥 Trending Threads
                            </span>
                            <a v-tooltip="'Create a Thread'" href="" class="btn btn-sm btn-primary text-white text-wrap ml-auto">
                                Ask a Question
                            </a>
                        </div>
                        <ul class="list-group mb-4">
                            <li class="list-group-item">
                                <a title="How to handle overeating?" href="" v-pre="">
                                How to handle overeating?
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a title="How long should i perform an HIIT workout?" href="" v-pre="">
                                How long should i perform an HIIT workout?
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a title="Can lose fat in an area of the body by strength training or exercising that specific body part.Any exercise that decreases body fat percentage will help lose fat on their arms,Doing triceps p" href="" v-pre="">
                                Can lose fat in an area of the body by strength training or exercising that specific body part.Any exercise that decreases body fat percentage will help lose fat on their arms,Doing triceps p
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a title="What kind of foods can be consumed in PCOS?" href="" v-pre="">
                                What kind of foods can be consumed in PCOS?
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a title="Can beans and lentils alone fulfil my daily protein requirement?" href="" v-pre="">
                                Can beans and lentils alone fulfil my daily protein requirement?
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer />  
    </React.Fragment>
  )
}
