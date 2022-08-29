import React from 'react'
import '../Styles/RaiseTicket.css'
import {Container, Col, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import UserIcon from '../assets/images/usericn.png'
// icons
import {PencilSquare}from 'react-bootstrap-icons';
import {TicketDetailedFill}from 'react-bootstrap-icons';
import {ThreeDots} from 'react-bootstrap-icons'


export default function RaiseTicket() {
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
                        <button className='btn-dash-1'>View my complaints</button>
                    </div>
                </div>
                <Col className='bg-white rounded-3 mt-5 p-5'>
                    <div className='ticketmenu'>
                        <div className='nw-ticket d-flex justify-content-end'>
                            <button className='ticketadd'>
                            <PencilSquare className='mr-1 square'/>RaiseTicket</button>
                        </div>
                        <div className='ticket-cards'>
                          <div className='ticket-top d-flex justify-content-between text-center'>
                            <div className='icket-icn d-flex align-content-center' >
                               <div className='icn-wrap mr-2'>
                               <TicketDetailedFill className='ticketicn' color='#f46154'/>
                               </div>
                                <div className='tct-txt d-flex mr-5'>
                                <h5>Ticket  #2022</h5>
                            </div>
                            </div>
                            <div className='tct-tm d-flex align-items-center'>
                                <p>11:20 AM</p>
                                <div className='icn-wrap ml-2'>
                                <ThreeDots color='#f46154'/>
                                </div>
                            </div> 
                          </div>
                          <div className='body p-1 mt-3'>
                          <h1>How to write better Advertising Copy</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          </div>
                          <div className='userlst'>
                            <div className='ussr d-flex'>
                            <img src={UserIcon} className="usin" alt='/'/>
                            <p className='usrname'>Syamsir Alam</p>
                            </div>
                          </div>
                        </div>
                        <div className='ticket-cards'>
                          <div className='ticket-top d-flex justify-content-between text-center'>
                            <div className='icket-icn d-flex align-content-center' >
                               <div className='icn-wrap mr-2'>
                               <TicketDetailedFill className='ticketicn' color='#f46154'/>
                               </div>
                                <div className='tct-txt d-flex mr-5'>
                                <h5>Ticket  #2022</h5>
                            </div>
                            </div>
                            <div className='tct-tm d-flex align-items-center'>
                                <p>11:20 AM</p>
                                <div className='icn-wrap ml-2'>
                                <ThreeDots color='#f46154'/>
                                </div>
                            </div> 
                          </div>
                          <div className='body p-1 mt-3'>
                          <h1>How to write better Advertising Copy</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          </div>
                          <div className='userlst'>
                            <div className='ussr d-flex'>
                            <img src={UserIcon} className="usin" alt='/'/>
                            <p className='usrname'>Syamsir Alam</p>
                            </div>
                          </div>
                        </div>
                        <div className='ticket-cards'>
                          <div className='ticket-top d-flex justify-content-between text-center'>
                            <div className='icket-icn d-flex align-content-center' >
                               <div className='icn-wrap mr-2'>
                               <TicketDetailedFill className='ticketicn' color='#f46154'/>
                               </div>
                                <div className='tct-txt d-flex mr-5'>
                                <h5>Ticket  #2022</h5>
                            </div>
                            </div>
                            <div className='tct-tm d-flex align-items-center'>
                                <p>11:20 AM</p>
                                <div className='icn-wrap ml-2'>
                                <ThreeDots color='#f46154'/>
                                </div>
                            </div> 
                          </div>
                          <div className='body p-1 mt-3'>
                          <h1>How to write better Advertising Copy</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                          </div>
                          <div className='userlst'>
                            <div className='ussr d-flex'>
                            <img src={UserIcon} className="usin" alt='/'/>
                            <p className='usrname'>Syamsir Alam</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
  )
}
