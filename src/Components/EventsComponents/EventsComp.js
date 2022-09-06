import React from 'react'
// import { Link } from 'react-bootstrap-icons'
import '../../Styles/app.css'

export default function EventsComp() {
  return (
    <>
      <div className='events'>
        <div className="calender-row">
          <div className='calender-txt'>
            <div className='cl-tx'>
              <div className='cl-txt'>
                <h1>Events Today. </h1>
              </div>
              <div className='cl-days'>
                <button className='wek-dropdwn'>
                  Today
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="drpdwn" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className='cal-rows'>
              <div className='cal-card'>
                <div className='day'>
                  <h1>20</h1>
                  <span>Aug</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>While we often see it as a means to populate a mockup or show</h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>10</h1>
                    <span>:00 AM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>
              <div className='cal-card'>
                <div className='day'>
                  <h1>02</h1>
                  <span>Sep</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>While we often see it as a means to populate a mockup or show</h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>2</h1>
                    <span>:40 PM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>
              <div className='cal-card'>
                <div className='day'>
                  <h1>25</h1>
                  <span>Oct</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>While we often see it as a means to populate a mockup or show</h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>9</h1>
                    <span>:00 AM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>
              <div className='cal-card'>
                <div className='day'>
                  <h1>25</h1>
                  <span>Oct</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>While we often see it as a means to populate a mockup or show</h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>9</h1>
                    <span>:00 AM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>
              <div className='cal-card'>
                <div className='day'>
                  <h1>25</h1>
                  <span>Oct</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>demo content can live up to its name by helping</h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>9</h1>
                    <span>:00 AM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>
              <div className='cal-card'>
                <div className='day'>
                  <h1>25</h1>
                  <span>Oct</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>While we often see it as a means to populate </h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>9</h1>
                    <span>:00 AM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>
              <div className='cal-card'>
                <div className='day'>
                  <h1>25</h1>
                  <span>Oct</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>Demo content is probably one of the least talked</h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>9</h1>
                    <span>:00 AM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>
              <div className='cal-card'>
                <div className='day'>
                  <h1>25</h1>
                  <span>Oct</span>
                </div>
                <div className='evnt-bdy'>
                  <h1>Demo content is probably one of the least talked</h1>
                </div>
                <div className='goto'>
                  <div className='clck'>
                    <h1>9</h1>
                    <span>:00 AM</span>
                  </div>
                  <div className='gg-btn'>
                    <button className='gt-btn'>View details..</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
</>
  )
}
