import React, { useState, useEffect, useRef } from 'react'
import '../Styles/Message.css'
import {Container, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { PencilSquare } from 'react-bootstrap-icons'
import { Trash } from 'react-bootstrap-icons'
import { SendFill } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
// import TextEditor from '../Components/TextEditor'
import { BASE_URL, TOKEN } from '../Backend/config'
import axios from 'axios'
import moment from 'moment'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import nomsgsimg from '../assets/images/no-message-img.png'


export default function Message() {
  const [activeMsgCard, setActiveMsgCard] = useState()
  
  const [open, setOpen] = useState(false);
  
  const openHandle = () => {
    setOpen(false);
  }
  const showHandle = () => {
    setMsgSubject('')
    setEditorState(EditorState.createEmpty())
    setOpen(true);
  }
  const [show, setShow] = useState(false);
  const hideConfirmPopup = () => setShow(false);
  
  const [deleteMsgId, setDeleteMsgId] = useState();
  const [msgSubject, setMsgSubject] = useState('');
  const handleMsgSubjectChange = (event) => {
    setMsgSubject(event.currentTarget.value);
  }

  const [msgText, setMsgText] = useState('');
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  )
  const handleEditorChange = (state) => {
    setEditorState(state);
    setMsgText(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }

  

  //API call to send the msg
  const handleSendMessage = (event) => {
    event.preventDefault();
    const msgSubjectText = msgSubject
    const  msgTextData =  msgText

    //Validation for the empty text message
    if(msgTextData === '' || msgSubjectText === '') {

      return
    }
    setOpen(false)
    const config = {
      headers:{
        Authorization: TOKEN
      }
    }
    const dataToSendMsg = {
      subject: msgSubjectText,
      message :msgTextData, 
    }
    axios.post(`${BASE_URL}/messages/store`, dataToSendMsg, config)
      .then((msgResponse) => {
          renderAllMessages()
      });
  }
  
  //API call to send the msg
  const handleDeleteMessage = (event) => {
    event.preventDefault();
    const config = {
      headers:{
        Authorization: TOKEN
      }
    }
    
    axios.get(`${BASE_URL}/messages/delete/${deleteMsgId}`, config)
      .then((deleteMsgResponse) => {
          setShow(false)
          if(deleteMsgResponse.data.success){
            renderAllMessages()
            toast.success(deleteMsgResponse.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          
      });
    }

  //Call the API on load
  const [messageDetails, setMessageDetails] = useState()
  const [showNoMessagesInfo, setShowNoMessagesInfo] = useState()
  useEffect(() => {
    renderAllMessages()
  },[]);

  const msgCardRef = useRef(null);
  const renderAllMessages = () => {
    axios.get(`${BASE_URL}/messages`, {
      headers: {
          Authorization: TOKEN
      }
    })
    .then((response) => {
      const messages = response.data.data.threads
      if (messages.length > 0) {
        setShowNoMessagesInfo('show-msgs')
        const messagesList = messages.map((item,i) => 
        
          <div className='message-card msg-top rounded mb-4'  
          key={i} 
          data-id={item.id} 
          data-msgid={item.id} 
          onClick={renderAllMessageReplies} 
          ref={msgCardRef}>
            <div className='mg-tx '>
              <div className='useravt d-flex align-items-center justify-content-between'> 
                <img src={item.profile_image} className="usravth" alt='/'/>
                <h6 className='mb-0'>{item.subject}</h6>
                <span className='text-secondary'>
                  {
                    moment(item.created_at).format("DD-MM-YYYY HH:mm A")
                  }
                  </span>
                </div>
                <div className='d-flex justify-content-center'>
                  <span className='text-secondary fst-italic'>{item.body}</span>
                </div>
                <div className='d-flex justify-content-end'>
                    <Trash className='trash' data-id={item.id} onClick={()=>{
                      setDeleteMsgId(item.id)
                      setShow(true)
                    }}
                    />
                  </div>
              </div>
          </div>
          
        )
        setMessageDetails(messagesList)
        getRightContainerMessageData(messages[0].id)
        setActiveMsgCard('active')
      } else {
        setMessageDetails('')
        setShowNoMessagesInfo('show-no-msgs')
      }

    });
  }

  //Render all the replies for a message
  const [msgReplies, setMsgReplies] = useState()
  const inputRef = useRef();
  
  const renderAllMessageReplies = (event) => {
    
    event.currentTarget.setAttribute("data-active", "active")
    const id = event.currentTarget.getAttribute("data-msgid")
    getRightContainerMessageData(id)
    
  }

  const replyToMessage = (e) => {
    const id = e.currentTarget.getAttribute("data-msgid") 
    const dataToMsgReply = {
      message : inputRef.current.value, 
    }
    axios.put(`${BASE_URL}/messages/${id}`,dataToMsgReply, {
      headers: {
          Authorization: TOKEN
      }
    })
    .then((msgResponse) => {
      console.log(msgResponse)
      inputRef.current.value = ''
      getRightContainerMessageData(id)
    })
  }

  const getRightContainerMessageData = (msgid) => {
    const id = msgid
    axios.get(`${BASE_URL}/messages/${id}`, {
      headers:{
        Authorization: TOKEN
      }
    })
    .then((msgResponse) => {
      const leftMsgContainer = <Col className='readmsg'>
              <div className='sndmsg rounded'>
                  { 
                    msgResponse.data.data.message_details.map((item,i) =>
                      <div className='dmo-msg'  key={i}>
                        <div className='msgdte'>
                          <span>
                            { moment(item.created_at).format("DD-MM-YYYY HH:mm A") }
                          </span>
                        </div>
                        <div className='msg-mbx'>
                          <img src={item.profile_image} className="txicn" alt='/' />
                          <div className='mg-bx'>
                            <p>{item.message}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                <div className='mt-5'>
                    <div className='form-group'>
                        <input 
                        type="text" 
                        name="message"  
                        className='form-control' 
                        placeholder="Enter message ..." 
                        required="" 
                        ref={inputRef}
                          />
                    </div>
                    <div className='editorbtn'>
                      {/* <button  className='discard mr-1'> <X className='mr-1'/> Discard</button> */}
                      <button className='send' onClick={replyToMessage} data-msgid={id}> <SendFill className='mr-1' /> Send</button>
                    </div>
                </div>
              </div>
            </Col>
      setMsgReplies(leftMsgContainer)
    })
  }


  return (
    <React.Fragment>
      <Header/>
      <section>
        <Container>
          <div className="" >
            <Row>
            <div className='leader-section d-flex justify-content-between pt-5' style={{alignItems: 'center'}}>
                <div className='plans-txts'>
                  <h1>Messages</h1>
                  </div>
                  
                      <div>
                    <button className='btn-dash-1'  onClick={showHandle}> <PencilSquare className='compos ' color='#ffffff'/> New Conversation</button>
                      </div>
              </div>
            </Row>
            <div className={`bg-white rounded-3 mt-5 p-5`} style={{background : '#f8f8f8'}}>
              <Row className={`message-wrapper ${showNoMessagesInfo}`}>
                <Col className='col-6' style={{width:'47%'}}>
                  {messageDetails}
                </Col>
                {/* left */}
                {msgReplies}
              </Row>
              <div className={`no-message-wrapper ${showNoMessagesInfo} justify-content-center`}>
                <img src={nomsgsimg} alt='' />
              </div>
            </div>
          </div>
          <Modal show={open} size="lg" onHide={openHandle}>
            <Modal.Header closeButton>
              <Modal.Title>Send Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="form-group row mb-3">
                  <div class="col-sm-6">
                    <input type="text" class="form-control border-color" name="subject" placeholder=" Subject:" value={msgSubject} autocomplete="off" required="" onChange={handleMsgSubjectChange}/>
                  </div>
                  <div class="col-sm-6">
                    <input type="text" class="form-control border-color" value="ChesttaMishra (7014328214)" readonly="" />
                  </div>
                </div>
                <Editor 
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleEditorChange} />
            </Modal.Body>
            <Modal.Footer>
                <div>
                  <Button variant="secondary" onClick={openHandle}>
                    Close
                  </Button>
                  <Button variant="primary" className="ml-2" onClick={handleSendMessage}>
                    Send
                  </Button>
                </div>
            </Modal.Footer>
          </Modal>


          <Modal show={show} size="lg" onHide={hideConfirmPopup}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>Are you sure you want to delete this message</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hideConfirmPopup}>
                Close
              </Button>
              <Button variant="primary" onClick={handleDeleteMessage}> 
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

        </Container>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </React.Fragment>
  )
}
