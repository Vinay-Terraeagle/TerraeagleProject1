import React from "react";
import { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import '../../Styles/Myprofile.css'
import ChangePassComp from "./ChangePassComp";
import DeleteAccount from "./DeleteAccount";
// import axios from "axios";


export default function AccountAdmin() {

    const [account, setAccount] = useState('ChangePassComp');
    
  return (
    <React.Fragment>
        <section>
            <Container>
                <Row>
                    <Col className="bg-white rounded-top mt-5 p-3">
                       <div className="btns">
                          <button className={account === 'ChangePassComp' ? 'account cngepass' :'cngepass'} onClick={() => setAccount("ChangePassComp")}>Change Password</button>
                          <button className={account === 'DeleteAccount' ? 'account cngepass' :'cngepass'} onClick={() => setAccount("DeleteAccount")}>Delete Account</button>
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
        {account === "ChangePassComp" && <ChangePassComp/>}
        {account === "DeleteAccount" && <DeleteAccount/>}
  </React.Fragment>
  )
}
