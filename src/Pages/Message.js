import React, { useState, useEffect } from 'react'
import '../Styles/Message.css'
import {Container, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { PencilSquare } from 'react-bootstrap-icons'
import { Trash } from 'react-bootstrap-icons'
import UserIcon from '../assets/images/usericn.png'
import { ThreeDots } from 'react-bootstrap-icons'
import { SendFill } from 'react-bootstrap-icons'
import { X } from 'react-bootstrap-icons'
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
// import nomsgsimg from "../../assets/images/no-message-img"
import nomsgsimg from '../assets/images/no-message-img.png'


export default function Message() {
  const [open, setOpen] = useState(false);
  
  const openHandle = () => setOpen(false);
  const showHandle = () => setOpen(true);
  
  const [show, setShow] = useState(false);
  const hideConfirmPopup = () => setShow(false);
  
  const [deleteMsgId, setDeleteMsgId] = useState();

  const [msgSubject, setMsgSubject] = useState('');
  const handleMsgSubjectChange = (event) => {
    setMsgSubject(event.target.value);
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
    setOpen(false)
   
    const msgSubjectText = msgSubject
    const  msgTextData =  msgText

    //Validation for the empty text message
    if(msgTextData === '' ) {

      return
    }
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
            console.log("sdfsd fs")
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
        
          <div className='msg-top rounded mb-4'  data-id={item.id} data-msgid={item.id}>
            <div className='mg-tx '>
              <div className='useravt d-flex align-items-center justify-content-between'> 
                <img src={UserIcon} className="usravth" alt='/'/>
                <h6 className='mb-0'>{item.subject}</h6>
                <span className='text-secondary'>
                  {
                    moment(item.created_at).format("DD-MM-YYYY HH:mm A")
                  }
                  </span>
                </div>
                <div className='d-flex justify-content-center'>
                  <span className='text-secondary fst-italic'>Msg body</span>
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
      } else {
        setMessageDetails('')
        setShowNoMessagesInfo('show-no-msgs')
      }
    });
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
                <Col className='readmsg'>
                  <div className='sndmsg rounded'>
                    <div className='snd-top p-1'>
                      <div className='useravt d-flex align-items-center justify-content-between'> 
                        <div className='d-flex align-items-center'>
                        <img src={UserIcon} className="usravth" alt='/'/>
                          <h6 className='mb-0 ml-2 fs-5'>Jhon_Doe</h6>
                        </div>
                          
                              <ThreeDots/>
                        </div>
                    </div>
                    <div className='dmo-msg'>
                      <div className='msgdte'>
                          <span>August 20</span>
                      </div>
                      <div className='msg-mbx'>
                        <img src={UserIcon} className="txicn" alt='/' />
                        <div className='mg-bx'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <form action='#' className='mt-5'>
                          <div className='txtrea'>
                              <textarea className='textarea_editor form-control ' rows="15" placeholder="Enter message ..." name="message" required=""/>
                          </div>
                          <div className='editorbtn'>
                            <button  className='discard mr-1'> <X className='mr-1'/> Discard</button>
                            <button className='send '> <SendFill className='mr-1'/> Send</button>
                          </div>
                      </form>
                    </div>

                  </div>
                </Col>
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
