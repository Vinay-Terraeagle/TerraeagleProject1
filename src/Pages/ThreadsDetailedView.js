import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import { useLocation } from 'react-router-dom'
// import TextEditor from '../Components/TextEditor'
import moment from 'moment'
import axios from 'axios';
import { BASE_URL, TOKEN } from '../Backend/config';
import { Editor } from "react-draft-wysiwyg"
import { EditorState, convertToRaw } from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import draftToHtml from "draftjs-to-html"

export default function ThreadsDetailedView() {

    const [threadsReply, setThreadsReply] = useState()
    const location =  useLocation();
    const [channelSlug, setChannelSlug] = useState()
    const [threadSlug, setThreadSlug] = useState()
    useEffect(() => {
        const threadResponse=JSON.parse(location.state.id);
        setChannelSlug(location.state.channel)
        setThreadSlug(location.state.thread)
        renderAllThreadsReply(threadResponse)
        
    },[location]);

    const renderAllThreadsReply = (threadResponse) => {
        if(threadResponse.data.data.replies !== undefined && threadResponse.data.data.replies.length > 0) {
            const threadsReplyList = threadResponse.data.data.replies.map((item, i) =>
                <div className="card mb-4" key={i}>
                    <div className="card-header p-3">
                        <div className='row align-items-center'>
                            <div  className="col-6 d-flex align-items-center">
                                <div className="d-flex flex-column">
                                    <div className="mr-2 fs-22 text-white">{item.owner.name}</div> 
                                    <small  className="mr-2 text-capitalize fw-bold text-white">said {
                                    moment(item.created_at).fromNow()
                                    }...</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button type="submit" className="btn btn-sm bg-white rounded-pill">
                                        <span className="">{item.favouritesCount}</span> 
                                        <span className="fa fa-heart"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-5">
                        {item.body}
                    </div>
                    <div className="card-footer p-4">
                        <div>
                            This thread was published {moment(item.thread.created_at).fromNow()} by {item.thread.creator.name} and currently has <span>{item.thread.replies_count} reply</span>
                        </div>
                    </div>
                </div>
            )
            setThreadsReply(threadsReplyList)
        } else {
            setThreadsReply('')
        }
    }
    const [threadReply, setThreadReply] = useState('')
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    )

    const handleEditorChange = (state) => {
        setEditorState(state);
        setThreadReply(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }
    const handleReplyToThread = () => {
        console.log(threadReply)
        const replyData = {
            body: threadReply
        }
        const channel = channelSlug
        const thread = threadSlug

        axios.post(`${BASE_URL}/threads/${channel}/${thread}/replies`, replyData, {
            headers: {
                Authorization: TOKEN
            }
        }).then((response) => { 
            console.log("qweqweqwe " +response)

            axios.get(`${BASE_URL}/threads/${channel}/${thread}`, {
                headers: {
                    Authorization: TOKEN
                }
            }).then((response) => { 
                renderAllThreadsReply(response)
            }).catch((error) => {
                console.log(error)
            })


        }).catch((error) => {
            console.log(error)
        })
    }
    
  return (
    <React.Fragment>
        <Header/>
        <div className='container'>
            <h2 className="mt-4"> How do millet affect your metabolism? </h2>
            <div className='threads-container w-100'>
                <div className="row justify-content-around threads-detailed-view-container">
                    <div className="col-10 mt-4">
                        <div className='row mb-4'>
                            <div className="col-12 d-flex justify-content-end">
                                {/* <button className="btn rounded-pill btn-sm btn-green mr-2">
                                    <span className="text-white fw-bold">Subscribe</span>
                                </button>  */}
                                {/* <button className="btn rounded-pill btn-sm btn-blue mr-2"><span className="fw-bold text-white">Unlocked</span></button> */}
                            </div>
                        </div>

                        {threadsReply}

                        <div className="card mt-5">
                            <div className="card-body"> 
                                <Editor 
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={handleEditorChange} />
                            </div>
                            <div className="card-footer pt-3 pb-3">
                                <button className='btn rounded-pill btn-blue text-white' 
                                onClick={handleReplyToThread} 
                                data-thread-slug={threadSlug}
                                data-channel-slug={channelSlug} >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>

  )
}
