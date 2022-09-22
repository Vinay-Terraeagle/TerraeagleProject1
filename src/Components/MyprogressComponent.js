import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/Myprogress.css'
import { Plus } from 'react-bootstrap-icons'
import { Upload } from 'react-bootstrap-icons'
import { PencilSquare } from 'react-bootstrap-icons'
import { Trash } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import LineChart from './LineChart'
import { MyProgressFilterMenus } from './MyprogressFilterMenus'
import { weekDropdown } from './weekDropdown'
import Select from 'react-dropdown-select'
import { BASE_URL, TOKEN } from '../Backend/config';
import '../../node_modules/react-datetime/css/react-datetime.css'
import Datetime from "react-datetime";
// import ImageUploader from "react-images-upload";
import ImageUploading from "react-images-uploading"
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function MyprogressComponent(data) {

  //  react-before-after-slider-component
  let FirstImage = {
    // imageUrl: 'https://smeleshkin.github.io/react-before-after-slider-component//assets/image1.jpg'
  }
  let SecondImage = {
    // imageUrl: 'https://smeleshkin.github.io/react-before-after-slider-component//assets/image2.jpg'
  };

  const setCompareData = () => {
    setFirstImage({
      imageUrl: 'https://smeleshkin.github.io/react-before-after-slider-component//assets/image2.jpg'
    })
    setSecondImage({
      imageUrl: 'https://smeleshkin.github.io/react-before-after-slider-component//assets/image1.jpg'
    })
    console.log(firstImage, secondImage);
    // FirstImage = {
      
    // }
    // SecondImage = {
    //   imageUrl: 'https://smeleshkin.github.io/react-before-after-slider-component//assets/image1.jpg'
    // };
  }

  const [firstImage, setFirstImage] = useState('');
  const [secondImage, setSecondImage] = useState('');
  const [ShowUpdateInput, setUpdateInput] = useState('hide');
  const [ShowUpdateBtn, setUpdateBtnState] = useState('hide');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Setting the filter value
  const [filterOption, setFilterOption] = useState()
  const [graphLabel, setGraphLabel] = useState()
  const [graphValues, setGraphValues] = useState()


  const handleChange = (selectedOption) => {
    setFilterOption(selectedOption[0].label.toLowerCase())
    const selectedOption1 = selectedOption[0].label.toLowerCase()
    const client_name = "Deepthi22 (9511938081)"
    const config = {
      headers:{
        Authorization: TOKEN
      }
    }
    const data = {
      client_name: client_name,
      total_days : 30, 
      measure_type : selectedOption1
    }

    axios.post(`${BASE_URL}/measurements/filter`, data, config)
    .then((response) => {
        console.log(response)
        switch(selectedOption1) {
          case 'thighs':
            setGraphLabel(response.data.data.original.thighs.labels)
            setGraphValues(response.data.data.original.thighs.values)
            return
          case 'arms':
            setGraphLabel(response.data.data.original.arms.labels)
            setGraphValues(response.data.data.original.arms.values)
            return
          case 'hips':
            setGraphLabel(response.data.data.original.hips.labels)
            setGraphValues(response.data.data.original.hips.values)
            return
          case 'neck':
            setGraphLabel(response.data.data.original.neck.labels)
            setGraphValues(response.data.data.original.neck.values)
            return
          case 'vf':
            setGraphLabel(response.data.data.original.vf.labels)
            setGraphValues(response.data.data.original.vf.values)
            return
          case 'wrist':
            setGraphLabel(response.data.data.original.wrist.labels)
            setGraphValues(response.data.data.original.wrist.values)
            return
          case 'chest':
            setGraphLabel(response.data.data.original.chest.labels)
            setGraphValues(response.data.data.original.chest.values)
            return
          case 'biceps':
            setGraphLabel(response.data.data.original.biceps.labels)
            setGraphValues(response.data.data.original.biceps.values)
            return
          case 'body_age':
            setGraphLabel(response.data.data.original.body_age.labels)
            setGraphValues(response.data.data.original.body_age.values)
            return
          case 'waist':
            setGraphLabel(response.data.data.original.waist.labels)
            setGraphValues(response.data.data.original.waist.values)
            return
          case 'body_fat':
            setGraphLabel(response.data.data.original.body_fat.labels)
            setGraphValues(response.data.data.original.body_fat.values)
            return
          case 'muscle_mass':
            setGraphLabel(response.data.data.original.muscle_mass.labels)
            setGraphValues(response.data.data.original.muscle_mass.values)
            return
          default:
            setGraphLabel(response.data.data.original.weight.labels)
            setGraphValues(response.data.data.original.weight.values)
            return
        }
       
    });
  }

  // week dropdown
  const [weekFilterDropdown, setweekFilterDropdown] = useState();
  const weekHandleChange = (WeekselectedOption) => {
    setweekFilterDropdown(WeekselectedOption[0].label.toLowerCase())
  }

  // Setting the date on change
  const [dateChange, setDateChange] = useState()
  const handleDateChange = (momentObj) => {
    console.log('handleDateChange')
    setDateChange(momentObj.format("MMMM DD YYYY"))
  }

  // Setting the value on change
  const [valueChange, setValueChange] = useState()
  const handleValueChange = (event) => {
    setValueChange(event.target.value)

    

  }


  const [currentBackImg, setCurrentBackImg] = useState()
  const [currentFrontImg, setCurrentFrontImg] = useState()
  const [currentSideImg, setCurrentSideImg] = useState()

  const [initialBackImg, setInitialBackImg] = useState()
  const [initialFrontImg, setInitialFrontImg] = useState()
  const [initialSideImg, setInitialSideImg] = useState()


  useEffect(() => {
    if (data.data !== null && data.data !== undefined) {
      setCurrentBackImg(data.data.original.progress_photos_current.back)
      setCurrentFrontImg(data.data.original.progress_photos_current.front)
      setCurrentSideImg(data.data.original.progress_photos_current.side)


      setInitialBackImg(data.data.original.progress_photos_initials.back)
      setInitialFrontImg(data.data.original.progress_photos_initials.front)
      setInitialSideImg(data.data.original.progress_photos_initials.side)

    }
  }, []);

  // Add API Call
  const [weightDetails, setWeightDetails] = useState()
  const handleAddUpdate = () => {
    const client_name = "Deepthi22 (9511938081)"
    const config = {
      headers: {
        Authorization: TOKEN
      }
    }
    const data = {
      client_name: client_name,
      type: filterOption,
      progress_date: dateChange,
      new_value: valueChange,
      code_type: "store"
    }

    axios.post(`${BASE_URL}/weekly_health_store`, data, config)
      .then((response) => {
          const weightLists = response.data.data.original.weight
          const weightList = weightLists.map((item,i) => 
                              <tr data-id={item.id}>
                                <td>
                                  <Datetime timeFormat={false} 
                                    closeOnSelect= 'true'
                                    dateFormat="DD-MM-YYYY"
                                    onChange = {(momentObj, e ) => {handleDateChange(momentObj, e)} }
                                    inputProps={{
                                      value: item.date,
                                      className:'date form-control',
                                      required: 'true', 
                                    }}
                                  />
                                </td>
                                <td>
                                  <input className="value form-control" type="number" value={item.weight} readonly="" />
                                </td>
                                <td>
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
                                  rounded-pill btn-success update_button align-items-center ${ShowUpdateBtn} `} id="update_button" data-value="">
                                    <span className="btn-icon-left text-success">
                                      <Upload />
                                    </span>
                                    <span id="add-update" className="text-capitalize">Update</span>
                                  </button>
                                    <button type="button" className="btn btn-xs rounded-pill btn-danger delete_row" id='delete-btn' data-id={item.id} onClick={handleDeleteValue}> 
                                    <span className="btn-icon-left text-danger">
                                      <Trash />
                                    </span>Delete 
                                  </button>

              <button type="button" className={`btn btn-xs 
                                  rounded-pill btn-success update_button align-items-center ${ShowUpdateBtn} `} id="update_button" data-value="">
                <span className="btn-icon-left text-success">
                  <Upload />
                </span>
                <span id="add-update" className="text-capitalize">Update</span>
              </button>
              <button type="button" className="btn btn-xs rounded-pill btn-danger delete_row" id='delete-btn' data-id={item.id} onClick={handleDeleteValue}>
                <span className="btn-icon-left text-danger">
                  <Trash />
                </span>Delete
              </button>

            </td>
          </tr>
        )
        setWeightDetails(weightList)

      });
  }

  // Delete API Call

  const handleDeleteValue = (props, event) => {
    const config = {
      headers: {
        Authorization: TOKEN
      }
    }
    const dataForDelete = {
      id: event.target.getAttribute('data-id'),
      type: 'delete',
    }
    axios.post(`${BASE_URL}/weekly_health_delete`, dataForDelete, config)
      .then((deletedResponse) => {
        console.log("History Delete :::: " + deletedResponse);
        props.removeItem(event.target.getAttribute('data-id'))

      });
  }

  const [uploadImgFront, setUploadImgFront] = useState()
  const [uploadImgSide, setUploadImgSide] = useState()
  const [uploadImgBack, setUploadImgBack] = useState()

  const frontImgChange = (event) => {
    console.log(event.target);
    setUploadImgFront(event.target.value)
  }
  const sideImgChange = (event) => {
    console.log(event.target);
    setUploadImgSide(event.target.value)
  }
  const backImgChange = (event) => {
    console.log(event.target);
    setUploadImgBack(event.target.value)
  }

  //Upload Images API Call

  const handleUpload = (event) => {
    event.preventDefault()
    // const dataForImageUpload = {
    //   client_name: "Deepthi22 (9511938081)",
    //   fileToUpload: uploadImgFront,
    //   fileToUpload2: uploadImgSide,
    //   fileToUpload3: uploadImgBack
    // }
    const formData = new FormData();
    formData.append("client_name", "Deepthi22 (9511938081)");
    formData.append("fileToUpload", uploadImgFront);
    formData.append("fileToUpload2", uploadImgSide);
    formData.append("fileToUpload3", uploadImgBack);

    const config = {
      headers: {
        Authorization: TOKEN,
        enctype: "multipart/form-data",
        "Content-Type": "multipart/form-data",
        body: formData,
      }
    }

    try {
      axios.post(`${BASE_URL}/uploadfile`, formData, config)
        .then((imgUploadResponse) => {
          console.log("Upload :::: " + imgUploadResponse);
        });
    } catch (error) {
      console.log(error)
    }
  }


  const [images1, setImages1] = useState()
  const onDrop = (pictureFiles, pictureDataURLs) => {
    console.log("sdfsdfsdfsdf" + pictureFiles)
  }

  const maxNumber = 69;
  const [frontImage, setFrontImage] = React.useState([]);
  const onFrontImgChange = (imageList, addUpdateIndex) => {
    setFrontImage(imageList);
  };

  const [backImage, setBackImage] = React.useState([]);
  const onBackImgChange = (imageList, addUpdateIndex) => {
    setBackImage(imageList);
  };

  const [sideImage, setSideImage] = React.useState([]);
  const onSideImgChange = (imageList, addUpdateIndex) => {
    setSideImage(imageList);
  };

  return (
    <React.Fragment>
      <div className='container myprogress-container p-0'>
        <div className='myprogress-filter-wrapper p-5 pb-0'>
          <div className="row mb-5 mt-3 search-filter-wrapper ">
            <div className="col-3 fs-18 filter-wrapper">Filter By:
              <span className="arrow-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="arrow-icon">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg>
              </span>
            </div>

            <div className='progress-filter-wrapper col-3 d-flex justify-content-between'>
              <Select options={MyProgressFilterMenus} value={MyProgressFilterMenus.value} onChange={handleChange}
               defaultValue={{ label: 'weight', value: 11 }}/>
            </div>
          </div>
        </div>

        <div className='my-progress-wrapper p-5 pt-0'>
          <div className='my-progress-history-section'>
            <div className='weekdropdown'>
              <Select options={weekDropdown} onChange={weekHandleChange}></Select>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <h4>Graph Data</h4>
              {/* <button type="button" className="btn btn-red btn-md mb-3" data-toggle="modal" data-target="#uploadModal" onClick={handleShow} >Upload Image</button> */}
            </div>

            <div className='graph-wrapper my-progress-section'>
              <LineChart graphLabel={graphLabel} graphValues={graphValues}/>
            </div>
          </div>

          <div className='my-progress-history-section'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4>History</h4>
            </div>
            <div className='history my-progress-section p-5'>
              <div className="d-inline-flex">
                <button type="button" className="btn btn-xs rounded-pill btn-info" id="add_value_button" onClick={() => {
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
                {/* <input type="text" id="progress_date" className="date form-control m-2" placeholder="Progress Date" autocomplete="off" required data-dtp="" /> */}

                <Datetime timeFormat={false}
                  closeOnSelect='true'
                  dateFormat="DD-MM-YYYY"
                  onChange={(momentObj, e) => { handleDateChange(momentObj, e) }}
                  inputProps={
                    {
                      placeholder: 'Progress Date',
                      className: 'date form-control m-2',
                      required: 'true',
                    }} />

                <input type="number" id="new_value" className="form-control" placeholder="" autocomplete="off" required onChange={handleValueChange} />

                <button type="button" className="btn btn-xs 
                      rounded-pill btn-success update_button d-inline-flex align-items-center" id="update_button" data-value="body_fat_percentage" onClick={handleAddUpdate}>
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

                    {weightDetails}

                  </tbody>
                </table>
              </div>
            </div>



          </div>

          <div className='my-progress-initial-section'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4>Upload Your Images</h4>
              {/* <button type="button" className="btn btn-red btn-md mb-3" data-toggle="modal" data-target="#uploadModal" onClick={handleShow} >Upload Image</button> */}
            </div>
            <div className='initial-shape my-progress-section'>
              <div className="table-responsive">
                <table className="table header-border">
                  <thead>
                    <tr>
                      <th className='text-center'>FRONT</th>
                      <th className='text-center'>SIDE</th>
                      {/* <th className='text-center'>BACK</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-center'>
                        <ImageUploading
                          multiple={false}
                          value={frontImage}
                          onChange={onFrontImgChange}
                          maxNumber={maxNumber}
                          dataURLKey="data_url"
                          acceptType={["jpg", "jpeg", "png"]}
                        >
                          {({
                            imageList,
                            onImageUpload,
                            isDragging,
                            dragProps
                          }) => (
                            <div className="upload__image-wrapper">
                              {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                  <img src={image.data_url} alt="" width="100" />
                                </div>
                              ))}
                              <button className='uploadImgBtn'
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                Upload Front Image
                              </button>
                            </div>
                          )}
                        </ImageUploading>
                      </td>
                      <td className='text-center'>
                        <ImageUploading
                          multiple={false}
                          value={backImage}
                          onChange={onBackImgChange}
                          maxNumber={maxNumber}
                          dataURLKey="data_url"
                          acceptType={["jpg", "jpeg", "png"]}
                        >
                          {({
                            imageList,
                            onImageUpload,
                            isDragging,
                            dragProps
                          }) => (
                            <div className="upload__image-wrapper">
                              {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                  <img src={image.data_url} alt="" width="100" />
                                </div>
                              ))}
                              <button className='uploadImgBtn'
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                Upload Side Image
                              </button>
                            </div>
                          )}
                        </ImageUploading>

                      </td>
                      {/* <td className='text-center'>
                        <ImageUploading
                          multiple={false}
                          value={sideImage}
                          onChange={onSideImgChange}
                          maxNumber={maxNumber}
                          dataURLKey="data_url"
                          acceptType={["jpg", "jpeg", "png"]}
                        >
                          {({
                            imageList,
                            onImageUpload,
                            isDragging,
                            dragProps
                          }) => (
                            <div className="upload__image-wrapper">
                              {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                  <img src={image.data_url} alt="" width="100" />
                                </div>
                              ))}
                              <button className='uploadImgBtn'
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                Upload Front Image
                              </button>
                            </div>
                          )}
                        </ImageUploading>
                      </td> */}
                    </tr>
                  </tbody>
                </table>
                <div className='d-flex justify-content-center'>
                      <button className='btn-compare' onClick={setCompareData}>Compare</button>
                  </div>
              </div>
            </div>
          </div>


          <div className='my-progress-current-section'>
            <div className='d-flex justify-content-between align-items-center'>
          
              {/* <button type="button" className="btn btn-red btn-md mb-3" data-toggle="modal" data-target="#uploadModal" onClick={handleShow} >Upload Image</button> */}
            </div>
            <div className='current-shape my-progress-section'>
            <div className='comparebodyshape-wrapper'>
              <div>
              <h4>Compare Your body Shape</h4>
              </div>
              <div className='d-flex justify-content-between comparecontainer'>
              <h4>before</h4>
              <h4>After</h4>
              </div>
                <ReactBeforeSliderComponent
                firstImage={firstImage}
                secondImage={secondImage} />
                </div>

              {/* <div className="table-responsive">
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
                                  <Link to="#" className="pop">
                                    <img id="current_front_image" 
                                    src={currentBackImg} className="img-responsive" alt="" />
                                  </Link>
                                </td>
                                <td className='text-center'>
                                  <Link to="#" className="pop">
                                    <img id="current_side_image" src="https://wellness.revibe.in/images/side.png" className="img-responsive" alt="" />
                                  </Link>
                                </td>
                                <td className='text-center'>
                                  <Link to="#" className="pop">
                                    <img id="current_back_image" src="https://wellness.revibe.in/images/back.png" className="img-responsive" alt="" />
                                  </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
                
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h4 className="modal-title" id="uploadModalLabel">Upload Your Progress Photos</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form className="fileUploadForm" novalidate="novalidate" method="post" onSubmit={handleUpload} >
            <input type="hidden" name="_token" value="" />
            <input type="hidden" name="client_name" value="" id="upload_image_client" />
            <div className="form-group row">
              <div className="form-group mb-3">
                <input type="file" className="form-control-file" name="fileToUpload" id="exampleInputFile" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" onChange={frontImgChange} />
                <small id="fileHelp" className="form-text text-muted">Front View. Size of image should not be
                  more than 2MB.</small>
              </div>
              <div className="form-group mb-3">
                <input type="file" className="form-control-file" name="fileToUpload2" id="exampleInputFile2" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" onChange={sideImgChange} />
                <small id="fileHelp2" className="form-text text-muted">Side View. Size of image should not be
                  more than 2MB.</small>
              </div>
              <div className="form-group mb-3">
                <input type="file" className="form-control-file" name="fileToUpload3" id="exampleInputFile3" aria-describedby="fileHelp" accept=".jpg, .jpeg, .png" onChange={backImgChange} />
                <small id="fileHelp3" className="form-text text-muted">Back View. Size of image should not be
                  more than 2MB.</small>
              </div>
            </div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>

            </Modal.Footer> */}
      </Modal>

    </React.Fragment>
  )
}
