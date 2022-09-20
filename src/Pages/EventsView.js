import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import '../Styles/EventsView.css'
import {Container, Col, Row } from 'react-bootstrap'

export default function EventsView() {
  return (
    <React.Fragment>
      <Header />
      <section>
        <Container>
          <Row>
          <Col>
            <div className='m-3'>
              <h1>Events</h1>
            </div>
            {/* slider */}
            <div className='slider'>
              <div></div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-arround w-100 bg-white  mt-3 h-100 rounded-2'>
            <div>
              <div>
              <aside className="sidebar">
        <h4 className="sidebar-heading mt-4">
            Filter by
        </h4>
        <ul className="filter-ul">
            <li className="filter-item">
                <section className="filter-item-inner">
                    <h4 className="filter-item-inner-heading minus">
                        Categories
                    </h4>
                    <ul className="filter-attribute-list ul-reset">
                        <div className="filter-attribute-list-inner">
                            <li className="filter-attribute-item justify-content-arround">
                                <input type="checkbox" id="colour-attribute-1" className="filter-attribute-checkbox event-category ib-m" data-cat-id="1" data-value="Fitness" />
                                <label for="colour-attribute-1" className="filter-attribute-label ib-m text-capitalize">
                                    Fitness
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="colour-attribute-2" className="filter-attribute-checkbox event-category ib-m" data-cat-id="2" data-value="Health" />
                                <label for="colour-attribute-2" className="filter-attribute-label ib-m text-capitalize">
                                    Health
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="colour-attribute-3" className="filter-attribute-checkbox event-category ib-m" data-cat-id="3" data-value="mental wellness" />
                                <label for="colour-attribute-3" className="filter-attribute-label ib-m text-capitalize">
                                    mental wellness
                                </label>
                            </li>
                        </div>
                    </ul>
                </section>
            </li>

            <li className="filter-item">
                <section className="filter-item-inner">
                    <h5 className="filter-item-inner-heading minus">
                        Timing
                    </h5>
                    <ul className="filter-attribute-list ul-reset">
                        <div className="filter-attribute-list-inner">
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="size-attribute-1" className="filter-attribute-checkbox event-timing ib-m" data-value="morning" />
                                <label for="size-attribute-1" className="filter-attribute-label ib-m">
                                    Morning
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="size-attribute-2" className="filter-attribute-checkbox event-timing ib-m" data-value="afternoon" />
                                <label for="size-attribute-2" className="filter-attribute-label ib-m">
                                    Afternoon
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="size-attribute-3" className="filter-attribute-checkbox event-timing ib-m" data-value="evening" />
                                <label for="size-attribute-3" className="filter-attribute-label ib-m">
                                    Evening
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="size-attribute-4" className="filter-attribute-checkbox event-timing ib-m" data-value="night" />
                                <label for="size-attribute-4" className="filter-attribute-label ib-m">
                                    Night
                                </label>
                            </li>
                        </div>
                    </ul>
                </section>
            </li>

            <li className="filter-item">
                <section className="filter-item-inner">
                    <h5 className="filter-item-inner-heading minus">
                        Level
                    </h5>
                    <ul className="filter-attribute-list ul-reset">
                        <div className="filter-attribute-list-inner">
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="material-attribute-12" className="filter-attribute-checkbox event-level ib-m" data-value="general" />
                                <label for="material-attribute-13" className="filter-attribute-label ib-m">
                                    General
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="material-attribute-13" className="filter-attribute-checkbox event-level ib-m" data-value="beginner" />
                                <label for="material-attribute-13" className="filter-attribute-label ib-m">
                                    Beginner
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="material-attribute-14" className="filter-attribute-checkbox event-level ib-m" data-value="intermediate" />
                                <label for="material-attribute-14" className="filter-attribute-label ib-m">
                                    Intermediate
                                </label>
                            </li>
                            <li className="filter-attribute-item">
                                <input type="checkbox" id="material-attribute-15" className="filter-attribute-checkbox event-level a-btn-warningib-m" data-value="advanced" />
                                <label for="material-attribute-15" className="filter-attribute-label ib-m">
                                    Advanced
                                </label>
                            </li>
                        </div>
                    </ul>
                </section>
            </li>
        </ul>
    </aside>
                
              </div>
            </div>
            <div>
            <div className='w-100 row justify-content-center pt-5 pb-5'>
            <div
            className="events_card_wrapper m-4 col-4">
            <div className="event_img_wrapper">
              <img
                src="https://media.allforsport.in/events/f4edd60c-bfd2-11ec-9c8d-f360743f77e3/1650367714463.jpeg"
                loading="lazy"
                width="100%"
                weight="100%"
                alt='/'
              />
            </div>

            <div className="event_details">
              <div className="mb-3 event_name">
                <h4>Endurance Challenge - 100 km in a Month Challenge </h4>
              </div>
              <div className="mb-3">
                Link will be shared along with booking confirmation email
              </div>
              {/* <div className="mb-4 ml-2">
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  A
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  B
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  C
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  D
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  E
                </span>
                <span>+46 going</span>
              </div> */}

              <div className="event_date_time">

                10 Apr . 12:00 AM to 10 May . 11.59 PM
              </div>

              <div className="event_submit_btns d-flex justify-content-center align-items-center mt-4">
                <div className="event_charges blink">FREE</div>
                <div>
                  <button
                    type="button"
                    className="event_book_now width-btn align-right"
                  >
                    BOOK NOW
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      className="svg-inline--fa fa-angle-right fa-w-8 book-now-rgt-arw-act"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="events_card_wrapper m-4 col-4">
            <div className="event_img_wrapper">
              <img
                src="https://media.allforsport.in/events/12b2d9fa-af05-11ec-b3e6-efe2f1c1361c/1648520391247.jpeg"
                loading="lazy"
                width="100%"
                weight="100%"
                alt='/'
              />
            </div>

            <div className="event_details">
              <div className="mb-3 event_name">
                {' '}
                <h4>Endurance Challenge - 100 km in a Month Challenge </h4>
              </div>
              <div className="mb-3">
                {' '}
                Link will be shared along with booking confirmation email
              </div>
              <div className="mb-4 ml-2">
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  A
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  B
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  C
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  D
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  E
                </span>
                <span>+46 going</span>
              </div>

              <div className="event_date_time">
                {' '}
                10 Apr . 12:00 AM to 10 May . 11.59 PM
              </div>

              <div className="event_submit_btns d-flex justify-content-center align-items-center mt-4">
                <div className="event_charges blink">FREE</div>
                <div>
                  <button
                    type="button"
                    className="event_book_now width-btn align-right"
                  >
                    BOOK NOW
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      className="svg-inline--fa fa-angle-right fa-w-8 book-now-rgt-arw-act"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="events_card_wrapper m-4 col-4">
            <div className="event_img_wrapper">
              <img
                src="https://media.allforsport.in/events/2d9fceb2-bbda-11ec-88e4-970e9900e2a6/1649930975752.jpeg"
                loading="lazy"
                width="100%"
                weight="100%"
                alt="/"
              />
            </div>

            <div className="event_details">
              <div className="mb-3 event_name">
                {' '}
                <h4>Endurance Challenge - 100 km in a Month Challenge </h4>
              </div>
              <div className="mb-3">
                {' '}
                Link will be shared along with booking confirmation email
              </div>
              <div className="mb-4 ml-2">
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  A
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  B
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  C
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  D
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  E
                </span>
                <span>+46 going</span>
              </div>

              <div className="event_date_time">
                {' '}
                10 Apr . 12:00 AM to 10 May . 11.59 PM
              </div>

              <div className="event_submit_btns d-flex justify-content-center align-items-center mt-4">
                <div className="event_charges blink">FREE</div>
                <div>
                  <button
                    type="button"
                    className="event_book_now width-btn align-right"
                  >
                    BOOK NOW
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      className="svg-inline--fa fa-angle-right fa-w-8 book-now-rgt-arw-act"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="events_card_wrapper m-4 col-4">
            <div className="event_img_wrapper">
              <img
                src="https://media.allforsport.in/events/1b141dc8-b5ab-11ec-8101-17832aca8834/1649250926539.jpeg"
                loading="lazy"
                width="100%"
                weight="100%"
                alt="/"
              />
            </div>

            <div className="event_details">
              <div className="mb-3 event_name">
                {' '}
                <h4>Endurance Challenge - 100 km in a Month Challenge </h4>
              </div>
              <div className="mb-3">
                {' '}
                Link will be shared along with booking confirmation email
              </div>
              <div className="mb-4 ml-2">
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  A
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  B
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  C
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  D
                </span>
                <span className="firstletter_of_interrested_user justify-content-center align-items-center">
                  E
                </span>
                <span>+46 going</span>
              </div>

              <div className="event_date_time">
                {' '}
                10 Apr . 12:00 AM to 10 May . 11.59 PM
              </div>

              <div className="event_submit_btns d-flex justify-content-center align-items-center mt-4">
                <div className="event_charges blink">FREE</div>
                <div>
                  <button
                    type="button"
                    className="event_book_now width-btn align-right"
                  >
                    BOOK NOW
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      className="svg-inline--fa fa-angle-right fa-w-8 book-now-rgt-arw-act"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
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
