import React, { useState } from 'react'
import '../Styles/Message.css'
import {Container, Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { PencilSquare } from 'react-bootstrap-icons'
import { Trash } from 'react-bootstrap-icons'
// import { CircleFill } from 'react-bootstrap-icons'
import UserIcon from '../assets/images/usericn.png'
import { ThreeDots } from 'react-bootstrap-icons'
import { SendFill } from 'react-bootstrap-icons'
import { X } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Message() {

  const [open, setOpen] = useState(false);

  const openHandle = () => setOpen(false);
  const showHandle = () => setOpen(true);

  return (
    <React.Fragment>
      <Header/>
      <section>
        <Container>
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
          <Row className="bg-white rounded-3 mt-5 p-5 col" style={{background : '#f8f8f8'}}>
          <Col className='col-6' style={{width:'47%'}}>
              <div className='msg-top rounded mb-4'>
                <div className='mg-tx '>
                  <div className='useravt d-flex align-items-center justify-content-between'> 
                    <img src={UserIcon} className="usravth" alt='/'/>
                    <h6 className='mb-0'>Message Heading</h6>
                    <span className='text-secondary'>2:30 pm</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <span className='text-secondary fst-italic'>Msg body</span>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Trash className='trash'/>
                      </div>
                  </div>
              </div>
              <div className='msg-top rounded mb-4'>
                <div className='mg-tx '>
                  <div className='useravt d-flex align-items-center justify-content-between'> 
                    <img src={UserIcon} className="usravth" alt='/'/>
                    {/* */}
                    <h6 className='mb-0'>Message Heading</h6>
                    <span className='text-secondary'>2:30 pm</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <span className='text-secondary fst-italic'>Msg body</span>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Trash className='trash'/>
                      </div>
                  </div>
              </div>
              <div className='msg-top rounded mb-4'>
                <div className='mg-tx '>
                  <div className='useravt d-flex align-items-center justify-content-between'> 
                    <img src={UserIcon} className="usravth" alt='/'/>
                   
                    <h6 className='mb-0'>Message Heading</h6>
                    <span className='text-secondary'>2:30 pm</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <span className='text-secondary fst-italic'>Msg body</span>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Trash className='trash'/>
                      </div>
                  </div>
              </div>
              <div className='msg-top rounded mb-4'>
                <div className='mg-tx '>
                  <div className='useravt d-flex align-items-center justify-content-between'> 
                    <img src={UserIcon} className="usravth" alt='/'/>
                   
                    <h6 className='mb-0'>Message Heading</h6>
                    <span className='text-secondary'>2:30 pm</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <span className='text-secondary fst-italic'>Msg body</span>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Trash className='trash'/>
                      </div>
                  </div>
              </div>
              <div className='msg-top rounded mb-4'>
                <div className='mg-tx '>
                  <div className='useravt d-flex align-items-center justify-content-between'> 
                    <img src={UserIcon} className="usravth" alt='/'/>
                   
                    <h6 className='mb-0'>Message Heading</h6>
                    <span className='text-secondary'>2:30 pm</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <span className='text-secondary fst-italic'>Msg body</span>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Trash className='trash'/>
                      </div>
                  </div>
              </div>
              <div className='msg-top rounded mb-4'>
                <div className='mg-tx '>
                  <div className='useravt d-flex align-items-center justify-content-between'> 
                    <img src={UserIcon} className="usravth" alt='/'/>
                   
                    <h6 className='mb-0'>Message Heading</h6>
                    <span className='text-secondary'>2:30 pm</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <span className='text-secondary fst-italic'>Msg body</span>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Trash className='trash'/>
                      </div>
                  </div>
              </div>
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

          <Modal show={open} size="lg" onHide={openHandle}>
            <Modal.Header closeButton>
              <Modal.Title>Raise Your Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>Need to add some editor
               </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={openHandle}>
                Close
              </Button>
              <Button variant="primary" onClick={openHandle}>
                Raise Ticket
              </Button>
            </Modal.Footer>
          </Modal>

        </Container>
      </section>
    </React.Fragment>
  )
}
