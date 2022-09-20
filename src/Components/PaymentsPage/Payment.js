import React from 'react'
import './Payment.moudle.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Header'
import Footer from '../footer'
import { CreditCard, Ladder } from 'react-bootstrap-icons'

export default function Payment() {
    return (
        <React.Fragment>
            <Header />
            <section>
                <Container>
                    <Row>
                        <Col>
                        <div className='cardheading mt-5'>
                            <h2>Payments</h2>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card-left'>
                                <div className='formsdata'>
                                    <form className='cardform'>
                                        <div className='card-name mb-2'>
                                            <label>Card Holder Name</label>
                                            <input className='card-holdername' placeholder="card-holder-name" required/>
                                        </div>
                                        <div className='card-num  mb-2'>
                                            <label>Card Number</label>
                                            <input className='card-numer' placeholder='Card Number' required/>
                                        </div>
                                        <div className='card-exp  mb-2'>
                                            <div className='exp-date'>
                                                <label>Card Expiry date</label>
                                                <input className='crd-exp' placeholder='Card Expiry date' required/>
                                            </div>
                                            <div className='cvv '>
                                                <label>Security code</label>
                                                <input className='card-cvv' placeholder='CVV Number' required/>
                                            </div>
                                        </div>
                                        <div className='voucher-num  mb-2'>
                                            <label>Have Vouchers ?</label>
                                            <div className='vouchers-cards'>
                                            <input className='vouchers' placeholder='apply Vouchers Code...' required/>
                                            <button type="submit" className='voucher'>Apply Vouchers</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='card-right'>
                                {/* total qty */}
                                <div className='card-qty'>
                                    <div className='total-price'>
                                        <h5>Total Qty</h5>
                                    </div>
                                    <div className='qty d-flex justify-content-between'>
                                        <p>BloodBiomarker plan</p>
                                        <span><b>1</b> qty</span>
                                        <span>₹ 5000 -/</span>
                                    </div>
                                    <div className='price d-flex justify-content-between'>
                                        <p> Total Price</p>
                                        <span>₹ 5000 -/</span>
                                    </div>
                                    <div className='discount d-flex justify-content-between'>
                                        <p className='mt-2'> Total Discount</p>
                                        <span>₹ 500 -/</span>
                                    </div>
                                    <div className='total d-flex justify-content-between'>
                                        <p> Total </p>
                                        <span>₹ 500 -/</span>
                                    </div>
                                    <div className='paybtndiv d-flex justify-content-between'>
                                        <button className='changeplan'>Change Plan</button>
                                        <button className='nxt'>Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    )
}
