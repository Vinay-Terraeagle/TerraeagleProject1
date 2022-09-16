import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../Components/footer'
import Header from '../Components/Header'
// import BreakfastRecipe from "../assets/images/blueberryToast.jpg"
import { Eye } from 'react-bootstrap-icons'
import { ChatText } from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'
import { ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import '../Styles/Discover.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextEditor from '../Components/TextEditor'
import { ChooseChannelDropdownMenu } from '../Components/ChooseChannelDropdownMenu';
import Select from 'react-dropdown-select'
import axios from 'axios';
import { BASE_URL, TOKEN } from '../Backend/config';
import moment from 'moment';

export default function Discover() {

    const [threadsDataList, setThreadsDataList] = useState();
    const [threadsList, setThreadsList] = useState();
    const [btn, activeBtn] = useState(false);

    const btnOpen = () => activeBtn(false);
    const btnShow = () => activeBtn(true);
    

    let navigate = useNavigate();
    const renderThreadsDetailedView = (e) => {
        e.preventDefault();
        let path = '/ThreadsDetailedView';
        navigate(path);
    }

    const handleClick = (selectedOption) => {
        console.log(selectedOption)
    }


    // disciver api

    useEffect(() => {
        axios.get(`${BASE_URL}/threads`, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => {
            setThreadsDataList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    },[]);

    

    useEffect(() => {
        if (threadsDataList !== undefined && threadsDataList.length > 0) {
            const threadsData = threadsDataList.map((item, i) => 
                <div className='threads-left-section-wrapper p-4 mb-5' key={i} onClick={renderThreadsDetailedView} data-threadid={item.id}>
                    <div className="row">
                        <div className="col-12 d-flex align-items-center">
                            <div className="mr-2" title="How do millet affect your metabolism?" >
                                <h3 className="font-weight-bold">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                <span className="d-flex align-items-center rounded-pill">
                                    <span>{item.visits}</span>
                                    <Eye color='#fff' className='eye-icon' />
                                    <span>{item.replies_count}</span>
                                    <ChatText color='#fff' className='chat-icon' />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="secondary" title="Benefits of Millet's&nbsp;">
                        {item.body}&nbsp;
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 d-flex align-items-center justify-content-between">
                            <div className="mr-auto d-flex align-items-center">
                                <img src={item.creator.avatar} alt="/" className="img-fluid rounded-circle" width="20" />
                                <div className="d-flex flex-column ml-2">
                                    {item.creator.first_name}
                                    <small className="text-capitalize font-weight-bold text-muted">
                                        {
                                            moment(item.created_at).fromNow()
                                        
                                        }...</small>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <span className="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold">
                                    {item.channel.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
            setThreadsList(threadsData)
        }
    })




    return (
        <>
            <Header />
            <div className='container'>
                <h2 className="mt-4"> Threads</h2>
                <div className='threads-container w-100'>

                    <div className='row mt-3'>
                        <form method="GET" action="" className="d-inline order-md-1">
                            <div className="sidebar-item sidebar-search col-6">
                                <div className="input-group">
                                    <input type="text" name="q" id="q" required="" className="form-control search-menu" placeholder="Search Wellness..." autoComplete="off" />
                                    <div className="input-group-append">
                                        <button type="submit" className="input-group-text search-menu-icon">
                                            <Search />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='row mb-5 mt-3 search-filter-wrapper'>
                        <div className="col-2 fs-18 filter-wrapper">
                            Filter By:
                            <span className='arrow-wrapper'>
                                <ArrowRight className='arrow-icon' />
                            </span>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/" className="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" >
                                Workouts
                            </Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/" className="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" >
                                Mental Wellness
                            </Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/" className="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" >
                                Kids Nutrition
                            </Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/" className="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" >
                                General
                            </Link>
                        </div>
                        <div className="col-2 text-center">
                            <Link to="/" className="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" >
                                Nutrition
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-8 p-4">

                            {threadsList}

                            {/* <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                            <div className="row">
                                <div className="col-12 d-flex align-items-center">
                                    <div className="mr-2" title="How do millet affect your metabolism?" >
                                        <h3 className="font-weight-bold">
                                        How do millet affect your metabolism?
                                        </h3>
                                    </div>
                                        <div className="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                            <span className="d-flex align-items-center rounded-pill">
                                                <span>3</span>
                                                <Eye color='#fff' className='eye-icon'/>
                                                <span>1</span>
                                                <ChatText color='#fff' className='chat-icon'/>
                                            </span>
                                    </div>
                                </div>
                            </div>
                            <div className="secondary" title="Benefits of Millet's&nbsp;">
                                Benefits of Millet's&nbsp;
                            </div>
                            <div className="row mt-4">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <div className="mr-auto d-flex align-items-center">
                                        <img src={BreakfastRecipe} alt="/"  className="img-fluid rounded-circle" width="20" /> 
                                        <div className="d-flex flex-column ml-2">
                                        sanjana
                                        <small className="text-capitalize font-weight-bold text-muted"> asked
                                        2 days ago...</small>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold">
                                        General
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                            {/* <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center">
                                        <div className="mr-2" title="How do millet affect your metabolism?" >
                                            <h3 className="font-weight-bold">
                                                How do millet affect your metabolism?
                                            </h3>
                                        </div>
                                        <span className="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                            <span className="d-flex align-items-center rounded-pill">
                                                <span>3</span>
                                                <Eye color='#fff' className='eye-icon' />
                                                <span>1</span>
                                                <ChatText color='#fff' className='chat-icon' />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="secondary" title="Benefits of Millet's&nbsp;">
                                    Benefits of Millet's&nbsp;
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 d-flex align-items-center justify-content-between">
                                        <div className="mr-auto d-flex align-items-center">
                                            <img src={BreakfastRecipe} alt="/" className="img-fluid rounded-circle" width="20" />
                                            <div className="d-flex flex-column ml-2">
                                                sanjana
                                                <small className="text-capitalize font-weight-bold text-muted"> asked
                                                    2 days ago...</small>
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold">
                                                General
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center">
                                        <div className="mr-2" title="How do millet affect your metabolism?" >
                                            <h3 className="font-weight-bold">
                                                How do millet affect your metabolism?
                                            </h3>
                                        </div>
                                        <span className="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                            <span className="d-flex align-items-center rounded-pill">
                                                <span>3</span>
                                                <Eye color='#fff' className='eye-icon' />
                                                <span>1</span>
                                                <ChatText color='#fff' className='chat-icon' />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="secondary" title="Benefits of Millet's&nbsp;">
                                    Benefits of Millet's&nbsp;
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 d-flex align-items-center justify-content-between">
                                        <div className="mr-auto d-flex align-items-center">
                                            <img src={BreakfastRecipe} alt="/" className="img-fluid rounded-circle" width="20" />
                                            <div className="d-flex flex-column ml-2">
                                                sanjana
                                                <small className="text-capitalize font-weight-bold text-muted"> asked
                                                    2 days ago...</small>
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold">
                                                General
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center">
                                        <div className="mr-2" title="How do millet affect your metabolism?" >
                                            <h3 className="font-weight-bold">
                                                How do millet affect your metabolism?
                                            </h3>
                                        </div>
                                        <span className="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                            <span className="d-flex align-items-center rounded-pill ">
                                                <span>3</span>
                                                <Eye color='#fff' className='eye-icon' />
                                                <span>1</span>
                                                <ChatText color='#fff' className='chat-icon' />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="secondary" title="Benefits of Millet's&nbsp;">
                                    Benefits of Millet's&nbsp;
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 d-flex align-items-center justify-content-between">
                                        <div className="mr-auto d-flex align-items-center">
                                            <img src={BreakfastRecipe} alt="/" className="img-fluid rounded-circle" width="20" />
                                            <div className="d-flex flex-column ml-2">
                                                sanjana
                                                <small className="text-capitalize font-weight-bold text-muted"> asked
                                                    2 days ago...</small>
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold">
                                                General
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className='threads-left-section-wrapper p-4 mb-5' onClick={renderThreadsDetailedView}>
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center">
                                        <div className="mr-2" title="How do millet affect your metabolism?" >
                                            <h3 className="font-weight-bold">
                                                How do millet affect your metabolism?
                                            </h3>
                                        </div>
                                        <span className="ml-auto mb-2 d-none d-md-block d-flex-shrink0 thread-view-comment-wrapper">
                                            <span className="d-flex align-items-center rounded-pill">
                                                <span>3</span>
                                                <Eye color='#fff' className='eye-icon' />
                                                <span>1</span>
                                                <ChatText color='#fff' className='chat-icon' />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="secondary" title="Benefits of Millet's&nbsp;">
                                    Benefits of Millet's&nbsp;
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 d-flex align-items-center justify-content-between">
                                        <div className="mr-auto d-flex align-items-center">
                                            <img src={BreakfastRecipe} alt="/" className="img-fluid rounded-circle" width="20" />
                                            <div className="d-flex flex-column ml-2">
                                                sanjana
                                                <small className="text-capitalize font-weight-bold text-muted"> asked
                                                    2 days ago...</small>
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="btn btn-sm rounded-pill btn-color w-100 text-uppercase font-weight-bold" >
                                                General
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                        <div className='col-4 trending-questions-wrapper mt-5'>
                            <div className="d-flex">
                                <span className="mr-2 fw-bold blink fs-20 trending-label">
                                    🔥 Trending Threads
                                </span>
                                <button className="btn btn-sm btn-primary text-white text-wrap ml-auto" onClick={btnShow}>
                                    Ask a Question
                                </button>
                            </div>
                            <ul className="list-group mb-4">
                                <li className="list-group-item">
                                    <Link to="/" >
                                        How to handle overeating?
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/" >
                                        How long should i perform an HIIT workout?
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/" >
                                        Can lose fat in an area of the body by strength training or exercising that specific body part.Any exercise that decreases body fat percentage will help lose fat on their arms,Doing triceps p
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/" >
                                        What kind of foods can be consumed in PCOS?
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/" >
                                        Can beans and lentils alone fulfil my daily protein requirement?
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <Modal show={btn} size="lg" onHide={btnOpen}>
                <Modal.Header closeButton>
                    <Modal.Title> Ask a Question</Modal.Title>
                </Modal.Header>
                <Modal.Body className='question-body'>
                    <form className='channalform' action='#'>
                        <div>
                            <div className='mb-4'>
                                <h5>Choose Channal</h5>
                                <Select className='mb-2' options={ChooseChannelDropdownMenu} onChange={handleClick} />
                                <h6 className='text-sm'>Ask your question to specific community</h6>
                            </div>
                            <div className='d-flex flex-column mb-4 '>
                                <label>Title :</label>
                                <input type="text" placeholder="Title here" id="title" className="Title" />
                                <h5>Be specific and imagine you're asking a question to another person</h5>
                            </div>
                        </div>
                        <TextEditor />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={btnOpen}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={btnOpen}>
                                Publish
                            </Button>
                        </Modal.Footer>
                    </form>

                </Modal.Body>
                {/* <Modal.Footer>
              <Button variant="secondary" onClick={btnOpen}>
                Close
              </Button>
              <Button variant="primary" onClick={btnOpen}>
                Raise Ticket
              </Button>
            </Modal.Footer> */}
            </Modal>

        </>
    )
}
