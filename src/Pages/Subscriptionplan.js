import React, { useState } from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import '../Styles/Subscription.css'
import Header from '../Components/Header'
import Footer from '../Components/footer'
// import { ArrowRightShort } from 'react-bootstrap-icons'
import Activeplan from '../Components/activeplan'
import Myaddonplans from '../Components/Myaddonplans'
import Purchase from './Purchase'
export default function Subscriptionplan() {

  const [Tabactive, setAct] = useState('Activeplan');

  return (
    <React.Fragment>
      <Header/>
      <section className='mb-5'>
        <Container>
            <Row>
            <div className='leader-section d-flex justify-content-between pt-5' style={{alignItems: 'center'}}>
                    <div className='plans-txts'>
                        <h1>MySubscriptions</h1>
                    </div>
                    {/* <div>
                        <button className='btn-dash-1'>My Profile </button>
                    </div> */}
                </div>
              <Col>
                {/* My plan tablist */}
                <div className='myplantablist'>
                  <button className={Tabactive === 'Activeplan' ? 'Tabactive activeplan' : 'activeplan'} onClick={() => setAct("Activeplan")}>
                    My Plans</button>
                  <button className={Tabactive === 'Myaddonplans' ? 'Tabactive activeplan' : 'activeplan'} onClick={() => setAct("Myaddonplans")}>Get addon Plans</button>
                  <button className={Tabactive === 'Purchase' ? 'Tabactive activeplan' : 'activeplan'} onClick={() => setAct("Purchase")}>Purchase Plan</button>
                </div>
              </Col>
            </Row>
        </Container>
      </section>
      {Tabactive === "Activeplan" && <Activeplan/>}
      {Tabactive === "Myaddonplans" && <Myaddonplans/>}
      {Tabactive === "Purchase" && <Purchase/>}

      <Footer/>
    </React.Fragment>
  )
}
