import React, { useEffect, useState } from 'react'
import '../Styles/RaiseTicket.css'
import { Container, Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { CircleFill } from 'react-bootstrap-icons'
// icons
import { PencilSquare } from 'react-bootstrap-icons';
import { TicketDetailedFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { TOKEN, BASE_URL } from '../Backend/config'
import moment from 'moment'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html'

export default function RaiseTicket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditorState(editorState.createEmpty)
    setShow(true);
  }
  
  // Raise a Tickets
  const [inputBox, setInputBox] = useState();
  const handleDataChange = (event) => {
    setInputBox(event.target.value);
  }

  const [msgbody, setMsgBody] = useState();
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  )

  const handleEditorChange = (state) => {
    setEditorState(state);
    setMsgBody(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }
  
  const [showtickets, setshowtickets] = useState();

  useEffect(() => {
    renderAllRaisedTickets()
  },[]);

  const renderAllRaisedTickets = () => {
    axios.get(`${BASE_URL}/my_complaints`, {
      headers: {
        Authorization: TOKEN
      }
    }).then((response) => {
      
      const ticketsData = response.data.data.tickets
      if(ticketsData !== undefined && ticketsData.length > 0) {
        const TicketList = ticketsData.map((item, i) =>
          <div className='ticket-cards' data-ticketid={item.id} key={i}>
            <div className='ticket-top d-flex justify-content-between text-center' key={i}>
              <div className='icket-icn d-flex align-content-center' >
                <div className='icn-wrap mr-2'>
                  <TicketDetailedFill className='ticketicn' color='#ffffff' />
                </div>
                <div className='tct-txt d-flex mr-5'>
                  <h5>Ticket No: {item.ticket_id}</h5>
                </div>
              </div>
              <div className='tct-tm d-flex align-items-center'>
                <span className='mr-1'>Created at: <b>
                {
                    moment(item.created_at).format("DD-MM-YYYY HH:MM A")
                  }
                  </b></span>
              </div>
            </div>
            <div className='body p-1 mt-3'>
              <h1>{item.title}</h1>
              <p>{item.comments}</p>
            </div>
            <div className='userlst'>
              <div className='ussr d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                  <img src={item.avatar} className="usin" alt='/' />
                  <p className='usrname'>{item.ticket_name}</p>
                </div>
                <div className='tick-status d-flex justify-content-between'>
                  <div>
                  {/* <span className='mr-1'>Priority: {item.priority}</span> */}
                    <CircleFill classsName="circle" style={{ width: '10px' }} color="#00FF00" />
                    <span className='m-1'>{item.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        setshowtickets(TicketList)
      }

    }).catch((error) => {
      console.log(error)
    })
  }

  const handleRaiseTicket = (event) => {
    event.preventDefault();
    const sendRaiseTxt = inputBox
    const sendRaiseData = msgbody

    if(sendRaiseTxt === '' || sendRaiseData === '') {
      return
    }
    setShow(false)
    const dataToRaiseTicket = {
      title: sendRaiseTxt,
      comments: sendRaiseData
    }

      axios.post(`${BASE_URL}/store_complaint`,dataToRaiseTicket,{
        headers: {
          Authorization:TOKEN
        }
      }).then((response) => {
        renderAllRaisedTickets()
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          <div className='leader-section d-flex justify-content-between pt-5' style={{ alignItems: 'center' }}>
            <div className='plans-txts'>
              <h1>RaiseTicket</h1>
            </div>
            <div>
              {/* <button className='btn-dash-1'>View my complaints</button> */}
              <button className='btn-dash-1' onClick={handleShow}>
                <PencilSquare className='mr-1 square' />RaiseTicket</button>
            </div>
          </div>
          <Col className='bg-white rounded-3 mt-5 p-5 '>
            <div className='ticketmenu'>
              {showtickets}
            </div>
          </Col>
        </Row>

        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Raise Your Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="col-sm-6">
                  <input type="text" class="form-control border-color raisecommentform mb-4" name="Title" placeholder=" Title:" onChange={handleDataChange} value={inputBox}  autocomplete="off" required=""/>
                </div>
             <small>Comment</small>
          <Editor 
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={handleEditorChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRaiseTicket}>
              Raise Ticket
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </React.Fragment>
  )
}
