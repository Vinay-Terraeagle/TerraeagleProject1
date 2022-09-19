import React , { useEffect, useState } from 'react';
import NoDataFound from './NoDataFound/NoDataFound';
// import ReactDOM from "react-dom";

export default function HabbitsComponent(habitsAssigned) {
    console.log(habitsAssigned.habitsAssigned.habits_done_today)
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
    const [habitsData, setHabitsData] = useState()
    useEffect(() => {
        if(habitsAssigned.habitsAssigned !== undefined &&   habitsAssigned.habitsAssigned.habits_done_today.length > 0) {
            const habitsDataList = habitsAssigned.habitsAssigned.habits_done_today.map((item, index) => (
                <div key={index}>
                    <input id={item.id}  value={item.habit} type="checkbox" onChange={handleCheck} />
                    <label for={item.id}> 
                        <span></span>
                        <div className='habits-label'>{item.habit}</div>
                    </label>
                </div>
            ))
            setHabitsData(habitsDataList)
        } else {
            const noHabitsDataList = <NoDataFound type="habit" />
            setHabitsData(noHabitsDataList)
        }
    },[])


  return (
    <React.Fragment>
        <div className='container habits-container'>
            <div className="checkList">
                <h4>Your Today's Habits</h4>
                <div className="list-container d-flex fs-22 pt-5 pb-5">
                    {habitsData}
                </div>
            </div>

        </div>
    </React.Fragment>
  )
}
