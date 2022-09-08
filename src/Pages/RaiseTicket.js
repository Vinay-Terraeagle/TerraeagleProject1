import React, { useState }from 'react'
import '../Styles/RaiseTicket.css'
import {Container, Col, Row} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import UserIcon from '../assets/images/usericn.png'
import { CircleFill } from 'react-bootstrap-icons'
// icons
import {PencilSquare}from 'react-bootstrap-icons';
import {TicketDetailedFill}from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Trash3 } from 'react-bootstrap-icons'
import TextEditor from '../Components/TextEditor'


export default function RaiseTicket() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <React.Fragment>
        <Header/>
        <Container>
            <Row> 
                <div className='leader-section d-flex justify-content-between pt-5' style={{alignItems: 'center'}}>
                    <div className='plans-txts'>
                        <h1>RaiseTicket</h1>
                    </div>
                    <div>
                        {/* <button className='btn-dash-1'>View my complaints</button> */}
                        <button className='btn-dash-1' onClick={handleShow}>
                            <PencilSquare className='mr-1 square'/>RaiseTicket</button>
                    </div>
                </div>
                <Col className='bg-white rounded-3 mt-5 p-5'>
                    <div className='ticketmenu'>
                        
                        <div className='ticket-cards'>
                          <div className='ticket-top d-flex justify-content-between text-center'>
                            <div className='icket-icn d-flex align-content-center' >
                               <div className='icn-wrap mr-2'>
                               <TicketDetailedFill className='ticketicn' color='#ffffff'/>
                               </div>
                                <div className='tct-txt d-flex mr-5'>
                                <h5>Ticket  #2022</h5>
                            </div>
                            </div>
                            <div className='tct-tm d-flex align-items-center'>
                              <span className='mr-1'>Created at: <b>2018-04-25 22:25:59</b></span>
                                <p>11:20 AM</p>
                            </div> 
                          </div>
                          <div className='body p-1 mt-3'>
                          <h1>How to write better Advertising Copy</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          </div>
                          <div className='userlst'>
                            <div className='ussr d-flex align-items-center justify-content-between'>
                            <div className='d-flex'>
                            <img src={UserIcon} className="usin" alt='/'/>
                            <p className='usrname'>Syamsir Alama</p>
                            </div>
                            <div className='tick-status d-flex justify-content-between'>
                              <div>
                                <CircleFill classsName="circle" style={{width: '10px'}} color="#00FF00"/>
                                <span className='m-1'>Open</span>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div className='ticket-cards'>
                          <div className='ticket-top d-flex justify-content-between text-center'>
                            <div className='icket-icn d-flex align-content-center' >
                               <div className='icn-wrap mr-2'>
                               <TicketDetailedFill className='ticketicn' color='#ffffff'/>
                               </div>
                                <div className='tct-txt d-flex mr-5'>
                                <h5>Ticket  #2022</h5>
                            </div>
                            </div>
                            <div className='tct-tm d-flex align-items-center'>
                            <span className='mr-1'>Created at: <b>2018-04-25 22:25:59</b></span>
                                <p>1:20 PM</p>
                            </div> 
                          </div>
                          <div className='body p-1 mt-3'>
                          <h1>How to write better Advertising Copy</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          </div>
                          <div className='userlst'>
                            <div className='ussr d-flex align-items-center justify-content-between'>
                            <div className='d-flex'>
                            <img src={UserIcon} className="usin" alt='/'/>
                            <p className='usrname'>Syamsir Alama</p>
                            </div>
                            <div className='tick-status d-flex justify-content-between'>
                              <div>
                                <CircleFill classsName="circle" style={{width: '10px'}} color="#ff0000"/>
                                <span className='m-1'>Closed</span>
                                <span>at: <b>2022-08-30 12:38:30</b></span>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div className='ticket-cards'>
                          <div className='ticket-top d-flex justify-content-between text-center'>
                            <div className='icket-icn d-flex align-content-center' >
                               <div className='icn-wrap mr-2'>
                               <TicketDetailedFill className='ticketicn' color='#ffffff'/>
                               </div>
                                <div className='tct-txt d-flex mr-5'>
                                <h5>Ticket  #2022</h5>
                            </div>
                            </div>
                            <div className='tct-tm d-flex align-items-center'>
                            <span className='mr-1'>Created at: <b>2018-04-25 22:25:59</b></span>
                                <p>1:20 PM</p>
                            </div> 
                          </div>
                          <div className='body p-1 mt-3'>
                          <h1>How to write better Advertising Copy</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          </div>
                          <div className='userlst'>
                            <div className='ussr d-flex align-items-center justify-content-between'>
                            <div className='d-flex'>
                            <img src={UserIcon} className="usin" alt='/'/>
                            <p className='usrname'>Syamsir Alama</p>
                            </div>
                            <div className='tick-status d-flex justify-content-between'>
                            <div>
                                <CircleFill classsName="circle" style={{width: '10px'}} color="#ff0000"/>
                                <span className='m-1'>Closed</span>
                                <span>at: <b>2022-08-30 12:38:30</b></span>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                        
                    </div>
                </Col>
            </Row>





            <Modal show={show} size="lg" onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Raise Your Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <TextEditor />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Raise Ticket
              </Button>
            </Modal.Footer>
          </Modal>


        </Container>
    </React.Fragment>
  )
}
