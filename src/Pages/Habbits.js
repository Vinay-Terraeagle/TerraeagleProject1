import React , { useState } from 'react';
import ReactDOM from "react-dom";
import Header from '../Components/Header';
import Footer from '../Components/footer';

export default function Habbits() {


    // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["Apple", "Banana", "Tea", "Coffee"];

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

    // Generate string of checked items
    const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
        })
    : "";

    // Return classes based on whether item is checked
    var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";


  return (
    <React.Fragment>
        <Header />
        <div className='container habits-container'>
            <div className="checkList">
                <h2>Your Habbits CheckList:</h2>
                <div className="list-container d-flex fs-22">
                {checkList.map((item, index) => (
                    <div key={index}>
                    <input id={item}  value={item} type="checkbox" onChange={handleCheck} />
                    <label for={item}> 
                        <span></span>
                        <div className={isChecked(item)}>{item}</div>
                        <ins><i>{item}</i></ins>
                    </label>
                    </div>
                ))}
                </div>
            </div>

            <div>
                {`Items checked are: ${checkedItems}`}
            </div>
        </div>
        <Footer />
    </React.Fragment>
  )
}
