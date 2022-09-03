import React, {useState} from 'react'
import '../Styles/Myprogress.css'
import { Plus } from 'react-bootstrap-icons'
import { Upload } from 'react-bootstrap-icons'
import { PencilSquare } from 'react-bootstrap-icons'
import { Trash } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



export default function MyProgressComponent() {

  const [ShowUpdateInput, setUpdateInput] = useState('hide');
  const [ShowUpdateBtn, setUpdateBtnState] = useState('hide');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>


        <div className='container myprogress-container p-0'>
          <div className='myprogress-filter-wrapper p-5'>
            <div className="row mb-5 mt-3 search-filter-wrapper">
              <div className="col-3 fs-18 filter-wrapper">Filter By:
                <span className="arrow-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="arrow-icon">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                  </svg>
                </span>
              </div>
              <div className="col-2 text-center">
                  <a className="btn btn-sm rounded-pill btn-red w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter by  Weight'">
                      Weight
                  </a>
              </div>
              <div className="col-2 text-center">
                  <a className="btn btn-sm rounded-pill btn-red w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter by Waist'">
                    Waist
                  </a>
              </div>
              <div className="col-2 text-center">
                <a className="btn btn-sm rounded-pill btn-red w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter by  Body Fat %'">
                  Body Fat %
                </a>
              </div>
              <div className="col-2 text-center">
                  <a className="btn btn-sm rounded-pill btn-red w-100 text-uppercase font-weight-bold" href="" v-tooltip="'Filter by Muscle Mass %'">
                    Muscle Mass %
                  </a>
              </div>
            </div>
          </div>
            
          <div className='my-progress-wrapper p-5'> 
          
            <div className='graph-wrapper my-progress-section'></div>

            <div className='my-progress-history-section'>
              <div className='d-flex justify-content-between align-items-center'>
                <h4>History</h4>
              </div>
              <div className='history my-progress-section p-5'>
                  <div className="d-inline-flex"> 
                    <button type="button" className="btn btn-xs rounded-pill btn-info" id="add_value_button" onClick={() => 
                      { 
                        ShowUpdateInput === 'hide' && setUpdateInput('show');
                        ShowUpdateInput === 'show' && setUpdateInput('hide');

                      }
                    }>
                      <span className="btn-icon-left text-info">
                        <Plus />
                      </span>
                      <span id="add-name" className="text-capitalize">Add Weight</span>
                    </button>
                  </div>
                  <div id="get_new_value_section" className={` form-inline align-items-center ${ShowUpdateInput} `}>
                      <input type="text" id="progress_date" className="date form-control m-2" placeholder="Progress Date" autocomplete="off" required data-dtp="" />

                      <input type="text" id="new_value" className="form-control" placeholder="new value" autocomplete="off" required />

                      <button type="button" className="btn btn-xs 
                      rounded-pill btn-success update_button d-inline-flex align-items-center" id="update_button" data-value="body_fat_percentage">
                        <span className="btn-icon-left text-success">
                          <Upload />
                        </span>
                        <span id="add-update" className="text-capitalize">Update</span>
                      </button>

                  </div>
                <div className="table-responsive mt-5">
                  <table className="table table-history" data-value="weight">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Values</th>
                                <th></th>
                            </tr>
                          </thead>
                          <tbody id="tbody-weight">
                            <tr>
                              <td>
                                <input className="date form-control" type="text" value="August 21 2022" readonly="" />
                                </td>
                              <td>
                                <input className="value form-control" type="text" value="69" readonly="" />
                              </td>
                              <td>
                                <input type="text" className="edit_previous_section1" data-id="284" style={{display:'none'}}/> 

                                <button type="button" className="btn btn-xs rounded-pill btn-secondary disp_1" id='edit-btn' onClick={ () => {
                                      ShowUpdateBtn === 'hide' && setUpdateBtnState('show');
                                      ShowUpdateBtn === 'show' && setUpdateBtnState('hide');
                                  }
                                  }> 
                                  <span className="btn-icon-left text-secondary">
                                    <PencilSquare />
                                  </span>
                                  Edit 
                                </button>

                                

                                <button type="button" className={`btn btn-xs 
                                rounded-pill btn-success update_button align-items-center ${ShowUpdateBtn} `} id="update_button" data-value="body_fat_percentage">
                                  <span className="btn-icon-left text-success">
                                    <Upload />
                                  </span>
                                  <span id="add-update" className="text-capitalize">Update</span>
                                </button>

                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input className="date form-control" type="text" value="August 11 2022" readonly=""  />
                              </td>
                              <td>
                                <input className="value form-control" type="text" value="70.55" readonly="" />
                              </td>
                              <td>
                                <input type="text" className="edit_previous_section1" style={{width:'80px', display:'none'}} data-id="268" /> 
                                <button type="button" className="btn btn-xs rounded-pill btn-secondary disp_1" id='edit-btn'> 
                                  <span className="btn-icon-left text-secondary">
                                      <PencilSquare />
                                  </span>
                                  Edit 
                                </button>
                                <span>&nbsp;&nbsp;</span>
                                <button type="button" className="btn btn-xs rounded-pill btn-danger delete_row" id='delete-btn'> 
                                  <span className="btn-icon-left text-danger">
                                    <Trash />
                                  </span>Delete 
                                </button>
                              </td>
                            </tr>
                          </tbody>
                    </table>
                </div>
              </div> 



            </div>

            <div className='my-progress-initial-section'>
              <div className='d-flex justify-content-between align-items-center'>
                <h4>Initial Shape</h4>
                <button type="button" className="btn btn-red btn-md mb-3" data-toggle="modal" data-target="#uploadModal" onClick={handleShow} >Upload Image</button>
              </div>
              <div className='initial-shape my-progress-section'>
                <div className="table-responsive">
                    <table className="table header-border">
                        <thead>
                            <tr>
                                <th className='text-center'>FRONT</th>
                                <th className='text-center'>SIDE</th>
                                <th className='text-center'>BACK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>
                                  <a href="#" className="pop">
                                    <img id="current_front_image" src="https://wellness.revibe.in/images/front.png" className="img-responsive" />
                                  </a>
                                </td>
                                <td className='text-center'>
                                  <a href="#" className="pop">
                                    <img id="current_side_image" src="https://wellness.revibe.in/images/side.png" className="img-responsive" />
                                  </a>
                                </td>
                                <td className='text-center'>
                                  <a href="#" className="pop">
                                    <img id="current_back_image" src="https://wellness.revibe.in/images/back.png" className="img-responsive" />
                                  </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>


            <div className='my-progress-current-section'>
              <div className='d-flex justify-content-between align-items-center'>
                <h4>Current Shape</h4>
                <button type="button" className="btn btn-red btn-md mb-3" data-toggle="modal" data-target="#uploadModal" onClick={handleShow} >Upload Image</button>
              </div>
              <div className='current-shape my-progress-section'>

              <div className="table-responsive">
                    <table className="table header-border">
                        <thead>
                            <tr>
                                <th className='text-center'>FRONT</th>
                                <th className='text-center'>SIDE</th>
                                <th className='text-center'>BACK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>
                                  <a href="#" className="pop">
                                    <img id="current_front_image" src="https://wellness.revibe.in/images/front.png" className="img-responsive" />
                                  </a>
                                </td>
                                <td className='text-center'>
                                  <a href="#" className="pop">
                                    <img id="current_side_image" src="https://wellness.revibe.in/images/side.png" className="img-responsive" />
                                  </a>
                                </td>
                                <td className='text-center'>
                                  <a href="#" className="pop">
                                    <img id="current_back_image" src="https://wellness.revibe.in/images/back.png" className="img-responsive" />
                                  </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

              </div>
            </div>
          </div>
        </div>

        <Modal show={show} size="lg" onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><h4 class="modal-title" id="uploadModalLabel">Upload Your Progress Photos</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
            <form action="https://wellness.revibe.in/uploadfile" class="fileUploadForm" method="post" enctype="multipart/form-data" novalidate="novalidate">
                            <input type="hidden" name="_token" value="" />                    
                            <input type="hidden" name="client_name" value="" id="upload_image_client" />
                            <div class="form-group row">
                                <div class="form-group">
                                    <input type="file" class="form-control-file" name="fileToUpload" id="exampleInputFile" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" />
                                    <small id="fileHelp" class="form-text text-muted">Front View. Size of image should not be
                                        more than 2MB.</small>
                                </div>
                                <div class="form-group">
                                    <input type="file" class="form-control-file" name="fileToUpload2" id="exampleInputFile2" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" />
                                    <small id="fileHelp2" class="form-text text-muted">Side View. Size of image should not be
                                        more than 2MB.</small>
                                </div>
                                <div class="form-group">
                                    <input type="file" class="form-control-file" name="fileToUpload3" id="exampleInputFile3" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" />
                                    <small id="fileHelp3" class="form-text text-muted">Back View. Size of image should not be
                                        more than 2MB.</small>
                                </div>
                              </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
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




        <div class="modal fade show" id="uploadModal" tabindex="-1" role="dialog" aria-modal="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="uploadModalLabel">Upload Your Progress Photos</h4>
                    </div>
                    <div class="modal-body">

                        <form action="https://wellness.revibe.in/uploadfile" class="fileUploadForm" method="post" enctype="multipart/form-data" novalidate="novalidate">
                            <input type="hidden" name="_token" value="" />                    
                            <input type="hidden" name="client_name" value="" id="upload_image_client" />
                            <div class="form-group row">
                                <div class="form-group">
                                    <input type="file" class="form-control-file" name="fileToUpload" id="exampleInputFile" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" />
                                    <small id="fileHelp" class="form-text text-muted">Front View. Size of image should not be
                                        more than 2MB.</small>
                                </div>
                                <div class="form-group">
                                    <input type="file" class="form-control-file" name="fileToUpload2" id="exampleInputFile2" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" />
                                    <small id="fileHelp2" class="form-text text-muted">Side View. Size of image should not be
                                        more than 2MB.</small>
                                </div>
                                <div class="form-group">
                                    <input type="file" class="form-control-file" name="fileToUpload3" id="exampleInputFile3" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" />
                                    <small id="fileHelp3" class="form-text text-muted">Back View. Size of image should not be
                                        more than 2MB.</small>
                                </div>
                              </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-link waves-effect" data-dismiss="modal">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>

    </React.Fragment>
  )
}
