import React , { useState } from 'react';
// import ReactDOM from "react-dom";

export default function HabbitsComponent(habitsAssigned) {
    console.log(habitsAssigned.habits)
    // State with list of all checked item
    const [checked, setChecked] = useState([]);

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
    // var isChecked = (item) =>
    // checked.includes(item) ? "checked-item" : "not-checked-item";


  return (
    <React.Fragment>
        <div className='container habits-container'>
            <div className="checkList">
                <h4>Your Todays Habits !!!</h4>
                <div className="list-container d-flex fs-22">
                {habitsAssigned.habitsAssigned.habits.map((item, index) => (
                    <div key={index}>
                        <input id={item.id}  value={item.habit} type="checkbox" onChange={handleCheck} />
                        <label for={item.id}> 
                            <span></span>
                            <div className='habits-label'>{item.habit}</div>
                        </label>
                    </div>
                ))}
                </div>
            </div>

        </div>
    </React.Fragment>
  )
}
