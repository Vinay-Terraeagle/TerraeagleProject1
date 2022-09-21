import React,{useState} from 'react'
import Header from "../Components/Header";
import Footer from "../Components/footer";
import Select from 'react-dropdown-select'
import { BASE_URL, TOKEN } from '../Backend/config';
import axios from 'axios';

export default function DailyHealthUpdate() {
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

    const PhysicalActivityFilterOptions = [
        {
            label: 'No Activity',
            value:1,
        },
        {
            label: 'Brisk Walk',
            value:2,
        },
        {
            label: 'Jogging',
            value:3,
        },
        {
            label: 'Weight Training',
            value:4,
        },
        {
            label: 'Other Physical Activity',
            value:5,
        }
    ]
    const [moodLabel, setMoodLabel] = useState('Happy')
    const handleMoodChange = (event) => {
        var mood = [
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
    }
    const handlePhysicalActivityFilterChange = () => {
        console.log("handlePhysicalActivityFilterChange")
    }
    const handleDailyHealthBtnClick = () => {
        const id = ''
        const params = {
            client_name: "Deepthi22 (9511938081)",
            user_id: '',
            hunger_level: '', 
            stress_level: '', 
            hydration_status: '', 
            urine_color: '', 
            physical_activity: 'brisk_walk', 
            sleep_quality: '4_hrs', 
            mood: 'happy', 
            stool_type: 'normal', 
            foot_steps_count: '',
             mobile_number: '', 
             energy_level: 'energetic', 
             alcohol: 'yes',
             smoking: 'yes', 
             any_other_concerns: ''
        }
        const headerConfig = {
            headers: {
                Authorization: TOKEN
            }
        }
        axios.get(`${BASE_URL}/update_daily_health/${id} `, params, headerConfig).then((DailyHealthUpdatedResponse) => {
            console.log(DailyHealthUpdatedResponse)
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
                    method="POST"
                    action=""
                    id="daily_healthForm"
                    className="container"
                    noValidate="novalidate"
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
                                    defaultValue="over filled"
                                    
                                />
                                <label htmlFor="cb1">OverFilled </label>
                                <div className="toggle_option_slider">OverFilled</div>
                                </div>
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="hunger_level"
                                    id="cb2"
                                    defaultValue="hungry"
                                />
                                <label htmlFor="cb2">Hungry</label>
                                <div className="toggle_option_slider">Hungry</div>
                                </div>
                                <div className="col-lg-4 col-4">
                                <input
                                    type="radio"
                                    name="hunger_level"
                                    id="cb3"
                                    defaultValue="perfect"
                                    defaultChecked=""
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
                                    defaultValue="high"
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
                                    defaultValue="medium"
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
                                    defaultValue="low"
                                    defaultChecked=""
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
                                defaultValue={waterMeasure}
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
                                {" "}
                                Sleep Quality<span className="text-danger"> *</span>
                            </label>
                            </div>
                            <div className="col-sm-12 col-lg-8 mb-0">
                            <div className="sleep-hrs-wrapper">
                                <div className="range">
                                <input
                                    type="range"
                                    min={1}
                                    max={6}
                                    steps={1}
                                    defaultValue={1}
                                    className="sleepRange"
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
                                    defaultValue={0}
                                    id="moodSlider"
                                    data-value="Happy"
                                    onChange={handleMoodChange}
                                    />
                                    <input
                                    type="hidden"
                                    name="mood"
                                    id="mood"
                                    defaultValue="happy"
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

                            <Select options={PhysicalActivityFilterOptions} onChange={handlePhysicalActivityFilterChange}></Select>
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
                                    defaultChecked="checked"
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
                                    defaultChecked=""
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
                                className="form-control"
                                name="foot_steps_count"
                                placeholder="Foot Steps Count"
                                defaultValue=""
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
                                value=""
                                placeholder="Other Concerns"
                                defaultValue={""}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="form-group row mt-5 text-center">
                            <div className="col-12">
                            <button type="submit" className="daily-health-update-btn btn btn-primary" onClick={handleDailyHealthBtnClick}>
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
