import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../../Styles/Myprofile.css'
import bgbckgr from '../../assets/images/background-bg.jpg'
import Usericon from '../../assets/images/user.png'
import {PencilSquare} from 'react-bootstrap-icons'
import axios from 'axios'
import { BASE_URL, TOKEN } from '../../Backend/config';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
export default function EditProfile() {
  // box
  const [box, setBox] = useState(false);
  const [bgBox, setbgBox] = useState(false);
  const openBox = () => setBox(false);
  const showBox = () => setBox(true);
  const openbgBox = () => setbgBox(false);
  const showbgBox = () => setbgBox(true);

    const [editname, setname] = useState()
    const [editemail, setemail] = useState()
    const [editfirst_name, first_nam] = useState()
    const [editlast_name, setlast_name] = useState()
    
    // const [editgithub, setgithub] = useState()
    

    useEffect(() => {
      axios.get(`${BASE_URL}/profile/Deepti22/edit`, {
        headers: {
          Authorization: TOKEN
        }
      }).then((response) => {
        console.log(response.data)
        setname(response.data.data.user.name)
        setemail(response.data.data.user.email)
        first_nam(response.data.data.user.first_name)
        setlast_name(response.data.data.user.last_name)
  
      }).catch((error) => {
        console.log(error)
      })
    },[]);


    // const updateProfile = async (e) => {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append('_method', 'PATCH')
    //   formData.append('editname', editname)
    //   formData.append('bio',bio)
    //   formData.append
    // } 


    // const [value, setValue] = useState()
    // const [biodetails, bio] = useState()
    // const [twitterUsername, twitter_username] = useState()
    // const [gitUsername, github_username] = useState()

    // useEffect(() => {
    //   axios.patch(`${BASE_URL}/profile/Deepti22`,
    //   {bio:"",
    //   twitter_username:"",
    //   github_username:"",}
    //   ,{
    //     headers: {
    //       Authorization: TOKEN
    //     }
    //   }).then((response) => {
    //     console.log(response)

    //   })
    // })
    


  return (
    <React.Fragment>
      <section>
        <Container>
          <Row className='d-flex flex-column'>
            <Col className='prof-p-bg  rounded'>
              <div className='prof-dwn'>
                <div>
                <img src={bgbckgr} id="avatar_status" className="ProfileBg  pt-3" alt="/" />
                <div className='bgbackgroundbtn'>
                  <button className='pencilsqbtn' onClick={showbgBox}> <PencilSquare className='pencilsq'/></button> 
                    </div>
                </div>
                <div className='proflie'>
                  <img src={Usericon} alt="/" className='usericn' />
                  <div className='editbtn'>
                    <button className='editbtnbtn ' onClick={showBox}>
                      <PencilSquare className='pencilsq'/>
                    </button>
                    </div>
                </div>
              </div>
            </Col>
            <Col className='usr-details '>
              <div className='acc-wrp '>
                <div className='user-det'>
                  <div className='user-pers-info'>
                    <form className='userform'  >
                      <div className='username'>
                        <label>UserName</label>
                        <input type="text" style={{cursor:'not-allowed'}} className='editemail' value={editname} disabled/>
                      </div>
                      <div className='username'>
                        <label>Name </label>
                        <input type="text" value={editfirst_name} />
                      </div>
                      <div className='username'>
                        <label>Last Name </label>
                        <input type="text" id="editlast_name" name="editlast_name"  Value={editlast_name} />
                      </div>
                      <div className='username'>
                        <label>Email:</label>
                        <input type="email" id="lname" name="lname" style={{cursor:'not-allowed'}} className='editemail' value={editemail} disabled />
                      </div>
                      <div className='username'>
                        <label>Your Location:</label>
                        <input type="text"  />
                      </div>
                      <div className='username'>
                        <label>Your bio:</label>
                        <input type="text"  id="bio" />
                      </div>
                      <div className='username'>
                        <label>Your Twitter UserName:</label>
                        <input type="text" id="twitter_username"  />
                      </div>
                      <div className='username'>
                        <label>Your Github info:</label>
                        <input type="text" id="github_username" />
                      </div>
                      <div className='prof-btns'>
                    <button className='cancel' type='submit'>Cancel</button>
                    <button className='save'>Save</button>
                  </div>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Container>
          <Row>
            <Col className='usr-details'>
              <div className='acc-wrp '>
                <div className='user-det'>
                  <div className='user-heading-txt'>
                    <h1>My Account Informaction</h1>
                  </div>
                  <div className='user-pers-info'>
                    <form className='userform'>
                      <div className='username'>
                        <label>UserName</label>
                        <input type="text" className='editemail' value={editname} disabled/>
                      </div>
                      <div className='username'>
                        <label>Name </label>
                        <input type="text"  detaultvalue={editfirst_name} />
                      </div>
                      <div className='username'>
                        <label>Last Name </label>
                        <input type="text" id="editlast_name" name="editlast_name"  Value={editlast_name} />
                      </div>
                      <div className='username'>
                        <label>Email:</label>
                        <input type="email" id="lname" name="lname" className='editemail' value={editemail} disabled />
                      </div>
                      <div className='username'>
                        <label>Your Location:</label>
                        <input type="text"  />
                      </div>
                      <div className='username'>
                        <label>Your bio:</label>
                        <input type="Email"  />
                      </div>
                      <div className='username'>
                        <label>Your Twitter UserName:</label>
                        <input type="Email"  />
                      </div>
                      <div className='username'>
                        <label>Your Github info:</label>
                        <input type="Email"  />
                      </div>
                      <div className='prof-btns'>
                    <button className='cancel'>Cancel</button>
                    <button className='save'>Save</button>
                  </div>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}


      {/* popupbox */}
      <Modal show={box} className="uploadimgbox" size="lg" onHide={openBox}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Profile </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <TextEditor /> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={openBox}>
                Close
              </Button>
              <Button variant="primary" onClick={openBox}>
                Upload
              </Button>
            </Modal.Footer>
          </Modal>

          {/* background image */}
      <Modal show={bgBox} className="uploadimgbox" size="lg" onHide={openbgBox}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Cover Profile </Modal.Title>
            </Modal.Header>
            <Modal.Body className='boxbody'>
              {/* <TextEditor /> */}
            </Modal.Body>
            <div className="uploadimage">
                <input type="file" className="uploadfile" name="fileToUpload3" id="exampleInputFile3" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" />
                <small id="fileHelp3" className="form-text text-muted">Size of image should not be
                  more than 2MB.</small>
              </div>
            <Modal.Footer>
              <Button variant="secondary"  onClick={openbgBox}>
                Close
              </Button>
              <Button variant="primary" onClick={openbgBox}>
                Upload
              </Button>
            </Modal.Footer>
          </Modal>


    </React.Fragment>
  )
}
