import React , { useState } from 'react';
import ReactDOM from "react-dom";

export default function HabbitsComponent() {
    // State with list of all checked item
    const [checked, setChecked] = useState([]);
    const checkList = [ "Drink water in the morning", 
                        "Eat more vegetables and fruits daily", 
                        "Increase Non-Exercise Activity", 
                        "Picking foods that are fewer in calories, fat, sugar and salt"];

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
        updatedList = [...checked, event.target.value];
        } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    }

    // Return classes based on whether item is checked
    var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";


  return (
    <React.Fragment>
        <div className='container habits-container'>
            <div className="checkList">
                <h4>Your Todays Habits !!!</h4>
                <div className="list-container d-flex fs-22">
                {checkList.map((item, index) => (
                    <div key={index}>
                    <input id={item}  value={item} type="checkbox" onChange={handleCheck} />
                    <label for={item}> 
                        <span></span>
                        <div className={isChecked(item)}>{item}</div>
                    </label>
                    </div>
                ))}
                </div>
            </div>

        </div>
    </React.Fragment>
  )
}
