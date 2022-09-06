import axios from 'axios'
import React, {useState} from 'react'

export default function () {
    const handleOnChange = () => {

    }

    const handleButtonClick = () => {
        axios.get('https://api.publicapis.org/entries')
        .then((response) => {
            console.log(response.data);
            console.log(response.data.count);

            setuserDetails({data:response.data.count})
        });
    }
   
    
    const [userDetails, setuserDetails] = useState({
        data:"1111",
    })

    


  return (
    <>
        <div></div>
        <input type='text' placeholder='' className='State' 
        onChange={handleOnChange}  value={userDetails.data}/>
        <button onClick={handleButtonClick}>Get Details</button>

        
      
    </>
  )
}
