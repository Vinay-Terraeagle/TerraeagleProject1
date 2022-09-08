import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NutritionsCompo() {
  return (
    <React.Fragment>
      <section>
        <Container>
          <Row>
            <Col>
              <div className='bodypart '>
                <div className='navdiv'>
                  <Link to='/'>Lab Results</Link>
                </div>
                <div className="col-sm-12 col d-flex justify-center">
                  <div className="col-sm-6" style={{ background: 'pink', height: '47px' }}>
                    <p style={{ marginTop: '15px', alignItems: 'center' }}>NA<small>%</small></p>
                  </div>
                  <div className="col-sm-6" style={{ background: 'red', height: '47px' }}>
                    <p style={{ marginTop: '15px', alignItems: 'center' }}>NA<small>%</small></p>
                  </div>

                </div>
                <div className="col-sm-12 d-flex">
                  <div className="col-sm-2" style={{ height: '4px' }}>
                    <p style={{ fontSize: '10px', marginTop: '1.2rem', width: 'fit-content' }}>low</p></div>
                  <div className="col-sm-2" style={{ height: '4px' }}>
                    <p style={{ fontSize: '10px', marginTop: '1.2rem', width: 'fit-content' }}>border low</p></div>
                  <div className="col-sm-4" style={{ height: '4px', alignItems: 'center' }}>
                    <p style={{ fontSize: '10px', marginTop: '1.2rem', width: 'fit-content' }}>normal</p></div>
                  <div className="col-sm-2" style={{ height: '4px' }}>
                    <p style={{ fontSize: '10px', marginTop: '1.2rem', width: 'fit-content' }}>border high</p></div>
                  <div className="col-sm-2" style={{ height: '4px' }}>
                    <p style={{ fontSize: '10px', marginTop: '1.2rem', width: 'fit-content' }}>high</p></div>
                </div>

                <div className="col-sm-12 mt-5 d-flex">
                  <div className="col-sm-2" style={{ height: '4px', background: 'red' }}></div>
                  <div className="col-sm-2" style={{ height: '4px', background: 'orange' }}></div>
                  <div className="col-sm-4" style={{ height: '4px', background: 'green' }}></div>
                  <div className="col-sm-2" style={{ height: '4px', background: 'orange' }}></div>
                  <div className="col-sm-2" style={{ height: '4px', background: 'red' }}></div>
                </div>
                <div className='bio-details'>
                  <span>Background</span>
                  <p>Basophils are one of the circulating white blood cells. They constitute a small percentage of the total white blood cell count.  Basophils play an important role in the inflammatory process by releasing important substances, such as heparin, to prevent clotting in the inflamed tissue. Basophils will often be increased with tissue inflammation and is often seen with cases of intestinal parasites. </p>

                  <span>Discussion</span>
                  <p>Basophils are phagocytic and contain histamine, heparin, and serotonin in their cytoplasmic granules. They exist both in the blood and in the tissue where they are called mast cells.</p>

                  <p>Similar to the basophils found in the blood, mast cells store and produce histamine, serotonin, and heparin. Normally, mast cells are not found in peripheral blood. With inflammation, basophils deliver heparin to the affected tissue to prevent clotting.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}
