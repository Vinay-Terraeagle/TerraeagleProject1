import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../Components/footer'
import Header from '../Components/Header'
// import BreakfastRecipe from "../assets/images/blueberryToast.jpg"
import { Eye } from 'react-bootstrap-icons'
import { ChatText } from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'
import { ArrowRight } from 'react-bootstrap-icons'
import '../Styles/Discover.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import TextEditor from '../Components/TextEditor'
import axios from 'axios';
import { BASE_URL, TOKEN } from '../Backend/config';
import moment from 'moment';

import { Editor } from "react-draft-wysiwyg"
import { EditorState, convertToRaw } from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import draftToHtml from "draftjs-to-html"

export default function Discover() {

    const [threadsList, setThreadsList] = useState();
    const [trendingThreadsList, setTrendingThreadsList] = useState();
    const [channelList, setChannelList] = useState();

    const [btn, activeBtn] = useState(false);

    const btnOpen = () => activeBtn(false);

    const [selectOptions, setSelectOptions] = useState();
    const showModalPopupToAskQuestion = () => {
        activeBtn(true);
        axios.get(`${BASE_URL}/threads/create`, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => {
            console.log(response.data.data.channels)
            const optionsList = response.data.data.channels.map((item, i) => 
                <option id={item.id} slug={item.slug} name={item.slug} 
                value={item.id} >{item.name} </option>
            )
            setSelectOptions(optionsList)

        }).catch((error) => {
            console.log(error)
        })
    }

    // Rendering the Threads on loading the threads page
    useEffect(() => {
        requestToGetAllThreads()
    },[]);

    const requestToGetAllThreads = () => {
        axios.get(`${BASE_URL}/threads`, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => {
            renderAllThreads(response)

        }).catch((error) => {
            console.log(error)
        })
    }
    // Rendering the threads based on the filter/Channel
    const filterThreads = (event) => {
        const channel = event.currentTarget.getAttribute('data-channel-slug')
        axios.get(`${BASE_URL}/threads/${channel}`, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => { 
            console.log(response)
            renderAllThreads(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const renderAllThreads = (response) => {
        const threadsData = response.data.data.threads
            if (threadsData !== undefined && threadsData.length > 0) {
                const threadsLists = threadsData.map((item, i) => 
                <div className='threads-left-section-wrapper p-4 mb-5' key={i} onClick={renderThreadsDetailedView} data-threadid={item.id} data-thread-slug={item.slug} data-channel-slug={item.channel.slug}>
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
                                    {moment(item.created_at).fromNow()}
                                    </small>
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
            setThreadsList(threadsLists)
            }

            const trendingThreadsData = response.data.data.trendings
            if (trendingThreadsData !== undefined && trendingThreadsData.length > 0) {
                const trendingThreadsLists = trendingThreadsData.map((item, i) => 
                    <li className="list-group-item" key={i}>
                        <div data-thread-slug={item.slug} data-channel-slug={item.channel.slug} onClick={renderThreadsDetailedView} className="trending-threads-question">
                            {item.title}
                        </div>
                    </li>
                )
                setTrendingThreadsList(trendingThreadsLists)
            }

            const channelData = response.data.data.channels
            if (channelData !== undefined && channelData.length > 0) {
                const channelDataLists = channelData.map((item, i) => 
                <div className="col-2 text-center" onClick={filterThreads} data-channel-slug={item.slug} key={i}>
                    <div className="btn btn-sm rounded-pill btn-primary w-100 text-uppercase font-weight-bold" >
                        {item.name}
                    </div>
                </div>
                )
                setChannelList(channelDataLists)
            }
    }

    // Render the threads in detail
    let navigate = useNavigate();
    const renderThreadsDetailedView = (event) => {
        event.preventDefault();

        const channel = event.currentTarget.getAttribute('data-channel-slug')
        const thread = event.currentTarget.getAttribute('data-thread-slug')
        axios.get(`${BASE_URL}/threads/${channel}/${thread}`, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => { 
            navigate("/ThreadsDetailedView",{
                state:{
                    id:JSON.stringify(response),
                    thread:thread.toString(),
                    channel:channel.toString()
                }
            })
        }).catch((error) => {
            console.log(error)
        })

        
    }
   
    const [threadTitle, setThreadTitle] = useState()
    const [threadBody, setThreadBody] = useState('')
    const [selectedElement, setSelectedElement] = useState([])
    const handleChannelChange = (event) => {
        setSelectedElement(event.target.value)
    }
    
    const threadTitleOnchange = (event) => {
        setThreadTitle(event.currentTarget.value)
    }

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    )

    const handleEditorChange = (state) => {
        setEditorState(state);
        setThreadBody(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }
    // Ask question related to thread
    const handleAskThreadQuestions = () => {
        const dataToThreadsQuestion = {
            channel_id: selectedElement,
            title : threadTitle, 
            body : threadBody
        }
        
        axios.post(`${BASE_URL}/threads/store`,dataToThreadsQuestion, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => { 
            
            activeBtn(false) 
            requestToGetAllThreads()

        }).catch((error) => {
            console.log(error)
        })
    }


    // Search thread by text
    const [searchText,setSearchText] = useState()
    const handleOnChangeSearchText = (event) => {
        setSearchText(event.target.value)
    }
    const handleSearchBtnClick = (event) => {
        event.stopPropagation()
        const dataToSearchThreads = {
            q: searchText,
        }
        axios.get(`${BASE_URL}/thread_search`,dataToSearchThreads, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => { 
            console.log(response)

        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <Header />
            <div className='container'>
                <h2 className="mt-4"> Threads</h2>
                <div className='threads-container w-100'>
                    <div className='row mt-3'>
                        <div className="sidebar-item sidebar-search col-6">
                            <div className="input-group">
                                <input 
                                    type="text" name="q" id="q" required="" className="form-control search-menu" placeholder="Search Wellness..." autoComplete="off" 
                                    value={searchText}
                                    onChange={handleOnChangeSearchText} 
                                />
                                <div className="input-group-append">
                                    <button type="button" className="input-group-text search-menu-icon" 
                                    onClick={handleSearchBtnClick}
                                    >
                                        <Search />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-5 mt-3 search-filter-wrapper'>
                        <div className="col-2 fs-18 filter-wrapper">
                            Filter By:
                            <span className='arrow-wrapper'>
                                <ArrowRight className='arrow-icon' />
                            </span>
                        </div>
                        {channelList}
                    </div>
                    <div className='row'>
                        <div className="col-8 p-4">
                            {threadsList}
                        </div>
                        <div className='col-4 trending-questions-wrapper mt-5'>
                            <div className="d-flex">
                                <span className="mr-2 fw-bold blink fs-20 trending-label">
                                    🔥 Trending Threads
                                </span>
                                <button className="btn btn-sm btn-primary text-white text-wrap ml-auto" onClick={showModalPopupToAskQuestion}>
                                    Ask a Question
                                </button>
                            </div>
                            <ul className="list-group mb-4">
                                {trendingThreadsList}
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
                                <h5>Choose Channel:</h5>
                                {/* <Select className='mb-2' options={channelListOption} onChange={handleClick} /> */}
                                <div>
                                    <select className='mb-2 channel-names' onChange={handleChannelChange}
                                    value={selectedElement}>
                                        {selectOptions}
                                    </select>
                                </div>
                                <small className='text-sm'>Ask your question to specific community</small>
                            </div>
                            <div className='d-flex flex-column mb-4 '>
                                <h5>Title :</h5>
                                <input type="text" placeholder="Title here" id="title" className="Title" onChange={threadTitleOnchange} value={threadTitle}/>
                                <small>Be specific and imagine you're asking a question to another person</small>
                            </div>
                        </div>
                        <Editor 
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={handleEditorChange} />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={btnOpen}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleAskThreadQuestions}>
                                Publish
                            </Button>
                        </Modal.Footer>
                    </form>

                </Modal.Body>
            </Modal>

        </>
    )
}
