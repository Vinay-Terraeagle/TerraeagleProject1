import React,{useState, useEffect} from 'react'
import Header from "../Components/Header";
import Footer from "../Components/footer";
import { useLocation, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { BASE_URL, TOKEN } from '../Backend/config';
import axios from 'axios';

export default function DailyHealthUpdate() {
    const location =  useLocation();
    const [status, setStatus] = useState()
    const [energyLevelChk,setEnergyLevelChk] = useState()
    const [smokeChk,setSmokeLevelChk] = useState()
    const [alcoholChk,setAlcoholChkChk] = useState()
    const PhysicalActivityFilterOptions = [
        {
            label: 'No Activity',
            value:'no_activity'
        },{
            label: 'Brisk Walk',
            value:'brisk_walk'
        },{
            label: 'Jogging',
            value:'jogging'
        },{
            label: 'Weight Training',
            value:'weight_training'
        },{
            label: 'Other Physical Activity',
            value:'other_physical_activity',
        }
    ]
    useEffect(() => {
        const mood = [ "happy","irritated","angry","depressed","anxious","normal", "excited",]
        const sleepVal = ["falling_asleep","4_hrs","6_hrs","8_hrs","exact_8_hrs","more_8_hrs"]
        const PhysicalActivityFilterOptions1 = [
            {
                label: 'No Activity',
                value:'no_activity'
            },{
                label: 'Brisk Walk',
                value:'brisk_walk'
            },{
                label: 'Jogging',
                value:'jogging'
            },{
                label: 'Weight Training',
                value:'weight_training'
            },{
                label: 'Other Physical Activity',
                value:'other_physical_activity',
            }
        ]

        if(location.state !== undefined && location.state !== null) {
            const statusDHU=location.state.updatedStatus;
            setStatus(statusDHU)
            const dailyHealthUpdatedData = location.state?.responseData
            const updatedData = JSON.parse(dailyHealthUpdatedData).data.data[0]
            console.log(updatedData)
            setHungerLevelStatus(updatedData.hunger_level)
            setStressLevelStatus(updatedData.stress_level)
            setWaterMeasure(updatedData.hydration_status)
            setgradientPercentage(updatedData.hydration_status * 2)
            setSelectedUrineColor(updatedData.urine_color)
            setSleepValChange(updatedData.sleep_quality)
            setMoodLabel(updatedData.mood)
            setMoodStatus(mood.indexOf(updatedData.mood))
            console.log(moodStatus)
            setSleepValChange(sleepVal.indexOf(updatedData.sleep_quality))

            const filteredAct = Object.values(PhysicalActivityFilterOptions1).filter(keys => (keys.value === updatedData.physical_activity))

            setPhysicalActivityStatus(filteredAct.label)

            updatedData.energy_level === "energetic" ? setEnergyLevelChk(true) : setEnergyLevelChk(false)
            updatedData.smoking === "yes"?setSmokeLevelChk(true):setSmokeLevelChk(false)
            updatedData.alcohol === "yes"?setAlcoholChkChk(true):setAlcoholChkChk(false)
            

            setStoolTypeStatus(updatedData.stool_type)
            setFootStepCount(updatedData.foot_steps_count)
            setConcernText(updatedData.any_other_concerns)
        }
        
    },[location]);

    const [selectedUrineColor, setSelectedUrineColor] = useState('')
    let [waterMeasure, setWaterMeasure] = useState(0)
    let [gradientPercentage, setgradientPercentage] = useState('')
    
    let handleDecrementClick = () => {
        if(waterMeasure > 0) {
            setWaterMeasure(waterMeasure -1)
            let waterMeasure2 = waterMeasure - 1 //Since value is not decreased in the usestate at this point manually increasing to add the css gradient.
            let gradientPercentageDecrease = waterMeasure2 * 2;
            setgradientPercentage(gradientPercentageDecrease)
        }
    }
    let handleIncrementClick = () => {
        if(waterMeasure < 5) {
            setWaterMeasure(waterMeasure + 1)
            let waterMeasure1 = waterMeasure + 1 //Since value is not increased in the usestate at this point manually increasing to add the css gradient.
            let gradientPercentageIncrease = waterMeasure1 * 2;
            setgradientPercentage(gradientPercentageIncrease)
        }
    }

    
    const [moodLabel, setMoodLabel] = useState('Happy')
    const [moodStatus, setMoodStatus] = useState()
    const handleMoodChange = (event) => {
        const mood = [
            "Happy",
            "Irritated",
            "Angry",
            "Depressed",
            "Anxious",
            "Normal",
            "Excited",
        ]
        // $('#emoji').html(emoticons[event.target.value]);
        // $('.mood-tooltip').text(mood[event.target.value]);

        setMoodLabel(mood[event.target.value])
        setMoodStatus(event.target.value)

    }
    const [physicalActivityStatus, setPhysicalActivityStatus] = useState()
    const handlePhysicalActivityFilterChange = (event) => {
        // console.log(event.target.value)
        // setPhysicalActivityStatus(event.target.value)

        setPhysicalActivityStatus(event.label)

    }
    const [hungerLevelStatus, setHungerLevelStatus] = useState()
    const hungerLevelChange = (event) => {
        setHungerLevelStatus(event.target.value)
    }
    const [stressLevelStatus, setStressLevelStatus] = useState()
    const stressLevelChange = (event) => {
        setStressLevelStatus(event.target.value)
    }
    const [sleepStatus, setSleepStatus] = useState()
    const [sleepValChange, setSleepValChange] = useState()
    const HandleSleepValChange = (event) => {
        setSleepValChange(event.target.value)
        const arrLength = event.target.value - 1;
        setSleepStatus(event.currentTarget.parentElement.parentElement.getElementsByClassName('sleep_quality')[arrLength].getAttribute("data-value"))
    }
    const [energyLevelStatus, setEnergyLevelStatus] = useState('')
    const energyLevelChange = (event) => {
        (event.target.checked) ? setEnergyLevelStatus('energetic'):setEnergyLevelStatus('lethargy')
    }
    const [alcoholStatus, setAlcoholStatus] = useState('no')
    const alcoholValueChange = (event) => {
        (event.target.checked)?setAlcoholStatus('yes'):setAlcoholStatus('no')
    }
    const [smokingStatus, setSmokingStatus] = useState('no')
    const smokingValueChange = (event) => {
        (event.target.checked)?setSmokingStatus('yes'):setSmokingStatus('no')
    }
    const [stoolTypeStatus, setStoolTypeStatus] = useState()
    const handleStoolTypeChange = (event) => {
        setStoolTypeStatus(event.target.value)
    }
    const [footStepCount, setFootStepCount] = useState()
    const handleFootStepChange = (event) => {
        setFootStepCount(event.target.value)
    }
    const [concernText, setConcernText] = useState()
    const handleConcernsTextChange = (event) => {
        console.log(event.target.value)
        setConcernText(event.target.value)
    }
    let navigate = useNavigate(); 
    const handleDailyHealthBtnClick = (e) => {
        e.preventDefault()
        const userInfo = JSON.parse(localStorage.getItem("userDetails"))
        let dailyHealthUpdateURL = ''
        const params = {
            client_name: `${userInfo.user_name} (${userInfo.mobile_number})`,
            hunger_level: hungerLevelStatus, 
            stress_level: stressLevelStatus, 
            hydration_status: waterMeasure, 
            urine_color: selectedUrineColor, 
            physical_activity: physicalActivityStatus, 
            sleep_quality: sleepStatus, 
            mood: moodLabel.toLowerCase(), 
            energy_level: energyLevelStatus, 
            alcohol: alcoholStatus,
            smoking: smokingStatus, 
            stool_type: stoolTypeStatus, 
            foot_steps_count: footStepCount,
            any_other_concerns: concernText,
        }
        const headerConfig = {
            headers: {
                Authorization: TOKEN
            }
        }
        if(status === "true") {
            const id = ''
            dailyHealthUpdateURL = `${BASE_URL}/update_daily_health/${id} `
        } else {
            dailyHealthUpdateURL = `${BASE_URL}/add_daily_health `
        }
        axios.post(dailyHealthUpdateURL, params, headerConfig).then((dailyHealthUpdatedResponse) => {
            console.log(dailyHealthUpdatedResponse)
            navigate('/Dashboard');
        })
    }
    
  return (
    <React.Fragment>
         <Header />
        <div className="container">
            <h4 className="pt-5">Daily Health Update</h4>
            <div className="daily-health-update-container row">
                <div className="card-body">
                <div className="basic-form">
                    <form
                    // method="POST"
                    // action=""
                    id="daily_healthForm"
                    className="container"
                    noValidate="novalidate"
                    onSubmit={handleDailyHealthBtnClick}
                    >
                    <div className="row">
                        <input type="hidden" name="_token" defaultValue="" />
                        {/* <div className="col-lg-6 mb-4">
                        <div className="form-group row">
                            <div className="col-lg-4">
                            <label className="col-form-label">Name</label>
                            </div>
                            <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control user_id"
                                name="client_name"
                                defaultValue=""
                                id="user_id"
                                readOnly=""
                            />
                            </div>
                        </div>
                        </div> */}
                        <div className="col-lg-6 mb-4">
                        <div className="form-group row">
                            <div className="col-lg-4">
                            <label className="col-form-label">
                                Hunger Level<span className="text-danger"> *</span>
                            </label>
                            </div>
                            <div className="col-sm-8 emoj" id="name1">
                            <div className="row toggle_radio">
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="hunger_level"
                                    id="cb1"
                                    value="overFilled"
                                    onChange={hungerLevelChange}
                                    checked={hungerLevelStatus === 'overFilled'}
                                />
                                <label htmlFor="cb1">OverFilled </label>
                                <div className="toggle_option_slider">OverFilled</div>
                                </div>
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="hunger_level"
                                    id="cb2"
                                    value="hungry"
                                    onChange={hungerLevelChange}
                                    checked={hungerLevelStatus === 'hungry'}
                                />
                                <label htmlFor="cb2">Hungry</label>
                                <div className="toggle_option_slider">Hungry</div>
                                </div>
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="hunger_level"
                                    id="cb3"
                                    value="perfect"
                                    onChange={hungerLevelChange}
                                    checked={hungerLevelStatus === 'perfect'}
                                />
                                <label htmlFor="cb3">Perfect</label>
                                <div className="toggle_option_slider">Perfect</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="form-group row">
                            <div className="col-lg-4">
                            <label className="col-form-label">
                                Stress Level<span className="text-danger">*</span>
                            </label>
                            </div>
                            <div className="col-lg-8 emoj">
                            <div className="row toggle_radio">
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="stress_level"
                                    id="cb4"
                                    className="toggle_option"
                                    value="high"
                                    checked={stressLevelStatus === "high"}
                                    onChange={stressLevelChange}
                                />
                                <label htmlFor="cb4">High</label>
                                <div className="toggle_option_slider">High</div>
                                </div>
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="stress_level"
                                    id="cb5"
                                    className="toggle_option"
                                    value="medium"
                                    checked={stressLevelStatus === "medium"}
                                    onChange={stressLevelChange}
                                />
                                <label htmlFor="cb5">Medium</label>
                                <div className="toggle_option_slider">Medium</div>
                                </div>
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="stress_level"
                                    id="cb6"
                                    className="toggle_option"
                                    value="low"
                                    checked={stressLevelStatus === "low"}
                                    onChange={stressLevelChange}
                                />
                                <label htmlFor="cb6">Low</label>
                                <div className="toggle_option_slider">Low</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="form-group row">
                            <div className="col-lg-6">
                            <label className="col-form-label">
                                Hydration Status<span className="text-danger">*</span>
                            </label>
                            </div>
                            <div className="col-lg-6">
                            <div className="value-button" id="decrease" value="" onClick={handleDecrementClick}>
                                -
                            </div>
                            <input
                                type="number"
                                id="hydration-number"
                                name="hydration_status"
                                value={waterMeasure}
                                readOnly
                                style={{
                                    background: `-webkit-linear-gradient(bottom, #2897e0  ${gradientPercentage}0%, #F1F1F1 0%)`
                                }}
                            />
                            <div className="value-button" id="increase" value="" onClick={handleIncrementClick}>
                                +
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="form-group row">
                            <div className="col-sm-4 col-lg-4">
                            <label className="col-form-label">
                                Urine Color<span className="text-danger">*</span>
                            </label>
                            </div>
                            <div className="col-sm-8 col-lg-8">
                            <ul className="urine-color-wrapper d-flex flex-wrap p-0">
                                <li
                                className={selectedUrineColor==='transparent'?'urine-color transparent selected' : 'urine-color transparent'} 
                                data-value="transparent" onClick={() => {
                                    setSelectedUrineColor('transparent')
                                }}
                                />
                                <li className={selectedUrineColor==='frothy'?'urine-color frothy selected' : 'urine-color frothy'} data-value="frothy" onClick={() => {
                                    setSelectedUrineColor('frothy')
                                }} />
                                <li className={selectedUrineColor==='smelly'?'urine-color smelly selected' : 'urine-color smelly'} data-value="smelly" onClick={() => {
                                    setSelectedUrineColor('smelly')
                                }} />
                                <li className={selectedUrineColor==='yellow'?'urine-color yellow selected' : 'urine-color yellow'} data-value="yellow" onClick={() => {
                                    setSelectedUrineColor('yellow')
                                }} />
                                <input
                                type="hidden"
                                name="urine_color"
                                id="urine_color"
                                defaultValue="transparent"
                                />
                            </ul>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-lg-6 mb-4">
                        <div className="form-group row">
                            <div className="col-lg-4">
                            <label className="col-form-label">
                                Sleep Quality<span className="text-danger"> *</span>
                            </label>
                            </div>
                            <div className="col-sm-12 col-lg-8 mb-0">
                            <div className="sleep-hrs-wrapper">
                                <div className="range">
                                <input
                                    type="range"
                                    min={0}
                                    max={5}
                                    steps={1}
                                    // defaultValue={1}
                                    className="sleepRange"
                                    onChange={HandleSleepValChange}
                                    value={sleepValChange}
                                />
                                </div>
                                <ul className="range-labels d-flex">
                                <li
                                    className="sleep_quality falling_asleep"
                                    data-name="sleep_quality"
                                    data-value="falling_asleep"
                                >
                                    Diffculty Falling asleep
                                </li>
                                <li
                                    data-name="sleep_quality"
                                    data-value="4_hrs"
                                    className="sleep_quality 4_hrs"
                                >
                                    &lt; 4Hrs{" "}
                                </li>
                                <li
                                    data-name="sleep_quality"
                                    data-value="6_hrs"
                                    className="sleep_quality 6_hrs"
                                >
                                    &lt; 6Hrs{" "}
                                </li>
                                <li
                                    data-name="sleep_quality"
                                    data-value="8_hrs"
                                    className="sleep_quality 8_hrs active selected"
                                >
                                    &lt; 8Hrs{" "}
                                </li>
                                <li
                                    data-name="sleep_quality"
                                    data-value="exact_8_hrs"
                                    className="sleep_quality exact_8_hrs"
                                >
                                    {" "}
                                    8Hrs{" "}
                                </li>
                                <li
                                    data-name="sleep_quality"
                                    data-value="more_8_hrs"
                                    className="sleep_quality more_8_hrs"
                                >
                                    {" "}
                                    &gt; 8Hrs{" "}
                                </li>
                                <input
                                    type="hidden"
                                    name="sleep_quality"
                                    id="sleep_quality"
                                    defaultValue="8_hrs"
                                />
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                       
                        <div className="col-lg-6 mb-4">
                            <div className="form-group row">
                                <div className="col-lg-4">
                                <label className="col-form-label">
                                    Mood<span className="text-danger"> *</span>
                                </label>
                                </div>
                                <div className="col-lg-8">
                                <div className="">
                                    <input
                                    type="range"
                                    min={0}
                                    max={6}
                                    value={moodStatus}
                                    id="moodSlider"
                                    data-value={moodLabel}
                                    onChange={handleMoodChange}
                                    />
                                    <input
                                    type="hidden"
                                    name="mood"
                                    id="mood"
                                    defaultValue={moodLabel}
                                    />
                                    <div className="mood-wrapper">
                                        <span className="mood-tooltip">{moodLabel}</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mt-2">
                        <div className="form-group row">
                            <div className="col-lg-4">
                            <label className="col-form-label">
                                Physical Activity<span className="text-danger">*</span>
                            </label>
                            </div>
                            <div className="col-lg-8">

                            {/* <Select 
                            options={PhysicalActivityFilterOptions} 
                            onChange={handlePhysicalActivityFilterChange} 
                            // value={physicalActivityStatus} 
                            defaultValue={physicalActivityStatus}
                            ></Select> */}


                                <select 
                                defaultValue={physicalActivityStatus} 
                                onChange={handlePhysicalActivityFilterChange}>
                                    {PhysicalActivityFilterOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4 mt-2">
                            <div className="form-group row energy-level-wrapper">
                            <div className="col-lg-6">
                                <label className="col-form-label d-flex">
                                Energy Level<p className="text-danger">*</p>
                                </label>
                            </div>
                            <div className="form-group col-lg-6">
                                <div className="checkbox-btn">
                                <input
                                    type="checkbox"
                                    className="checkbox energy-level"
                                    name="energy_level"
                                    data-value="energetic"
                                    onChange={energyLevelChange}
                                    value={energyLevelStatus}
                                    defaultChecked={energyLevelChk}
                                />
                                <div
                                    className="toggler"
                                    data-label-checked="Energetic"
                                    data-label-unchecked="Lethargy"
                                >
                                    <span data-value="lethargy">Lethargy</span>
                                    <span data-value="energetic">Energetic</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-6 col-sm-12 mb-4">
                            <div className="row">
                            <div className="form-group col-lg-6 col-sm-6">
                                <div className="row">
                                <div className="col-lg-6 col-sm-4">
                                    <label className="col-form-label">
                                    Alcohol<span className="text-danger"> *</span>
                                    </label>
                                </div>
                                <div className="col-lg-6 col-sm-8">
                                    <div className="checkbox-btn">
                                    <input
                                        type="checkbox"
                                        className="checkbox alcohol-check"
                                        name="alcohol"
                                        data-value="no"
                                        onChange={alcoholValueChange}
                                        value={alcoholStatus}
                                        defaultChecked={alcoholChk}
                                    />
                                    <div
                                        className="toggler"
                                        data-label-checked="Yes"
                                        data-label-unchecked="No"
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-group col-lg-6 col-sm-6">
                                <div className="row">
                                <div className="col-lg-6 col-sm-4">
                                    <label className="col-form-label">
                                    Smoking<span className="text-danger"> *</span>
                                    </label>
                                </div>
                                <div className="col-lg-6 col-sm-8">
                                    <div className="checkbox-btn">
                                    <input
                                        type="checkbox"
                                        className="checkbox smoking-check"
                                        name="smoking"
                                        data-value="no"
                                        onChange={smokingValueChange}
                                        value={smokingStatus}
                                        defaultChecked={smokeChk}
                                    />
                                    <div
                                        className="toggler"
                                        data-label-checked="Yes"
                                        data-label-unchecked="No"
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-12 mb-4">
                            <div className="form-group row ">
                            <div className="col-lg-4 col-8">
                                <label className="col-form-label">
                                Stool Type<span className="text-danger"> *</span>
                                </label>
                            </div>
                            <div className="col-lg-8 col-sm-8 col-12 ">
                                <div className="row sleep-hrs-wrapper">
                                <div className="col-lg-6 mb-2">
                                    <input
                                    type="radio"
                                    name="stool_type"
                                    id="cb15"
                                    defaultValue="difficult_passing_tool"
                                    onChange={handleStoolTypeChange}
                                    value="difficult_passing_tool"
                                    checked={stoolTypeStatus === "difficult_passing_tool"}
                                    />
                                    <label className="stood sleep-hrs" htmlFor="cb15">
                                    Diffculty passing stool{" "}
                                    </label>
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <input
                                    type="radio"
                                    name="stool_type"
                                    id="cb16"
                                    defaultValue="hard_stool"
                                    onChange={handleStoolTypeChange}
                                    value="hard_stool"
                                    checked={stoolTypeStatus === "hard_stool"}
                                    />
                                    <label className="stood sleep-hrs" htmlFor="cb16">
                                    Hard Stool
                                    </label>
                                </div>
                                <div className="col-lg-6 mb-2">
                                    <input
                                    type="radio"
                                    name="stool_type"
                                    id="cb17"
                                    defaultValue="loose_stool"
                                    onChange={handleStoolTypeChange}
                                    value="loose_stool"
                                    checked={stoolTypeStatus === "loose_stool"}
                                    />
                                    <label className="stood sleep-hrs" htmlFor="cb17">
                                    Loose Stool
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <input
                                    type="radio"
                                    name="stool_type"
                                    id="cb18"
                                    defaultValue="constipated"
                                    onChange={handleStoolTypeChange}
                                    value="constipated"
                                    checked={stoolTypeStatus === "constipated"}
                                    />
                                    <label htmlFor="cb18" className="sleep-hrs">
                                    Constipated
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <input
                                    type="radio"
                                    name="stool_type"
                                    id="cb19"
                                    defaultValue="normal"
                                    onChange={handleStoolTypeChange}
                                    value="normal"
                                    checked={stoolTypeStatus === "normal"}
                                    />
                                    <label htmlFor="cb19" className="sleep-hrs">
                                    Normal
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-4">
                            <div className="form-group row">
                            <label className="col-form-label col-3">
                                Foot Steps Count (Optional)
                            </label>
                            <div className="form-group col-3">
                                <input
                                type="number"
                                className="form-control"
                                name="foot_steps_count"
                                placeholder="Foot Steps Count"
                                value={footStepCount}
                                onChange={handleFootStepChange}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-4">
                            <div className="form-group row">
                            <label className="col-form-label col-3">
                                Other Concerns (Optional)
                            </label>
                            <div className="form-group col-9">
                                <textarea
                                className="form-control"
                                name="any_other_concerns"
                                value={concernText}
                                placeholder="Other Concerns"
                                onChange={handleConcernsTextChange}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="form-group row mt-5 text-center">
                            <div className="col-12">
                            <button type="submit" className="daily-health-update-btn btn btn-primary">
                                Update
                            </button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <Footer />

    </React.Fragment>
  )
}
