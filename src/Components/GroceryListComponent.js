import React, {useState, useEffect} from 'react';
import { Row, Col} from "react-bootstrap";
import NoDataFound from './NoDataFound/NoDataFound';


export default function GroceryListComponent(groceryList) {

  const [noGroceryList, setNoGroceryList] = useState(false)
  useEffect(() => {
    if(groceryList.groceryList !== undefined && 
      Array.isArray(groceryList.groceryList) && groceryList.groceryList.length === 0) {
        setNoGroceryList(true)
    }
  },[])

  return (
    <React.Fragment>
      <div className="container grocery-list-container">
        <h4 className='pb-5 grocery-list-label'>Your Grocery List for {groceryList.groceryList?.week}</h4>
        <Row className='justify-content-center'>
          <Col className='col-6'>
            {
               Object.entries(groceryList.groceryList?.items).map((item,i) => {
                  return (
                    <table className='fs-18' key={i}>
                      <thead>
                        <tr>
                          <th scope="col">{item[0]}</th>
                          <th scope="col" className='text-align-right'>{item[1].length} Items</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          item[1].map((obj,i) => 
                            <tr key={i}>
                              <td>{obj.ingredient}</td>
                              <td className='text-align-right'>{obj.quantity}{obj.unit}</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  )
               })
            }
          </Col>
        </Row>
      </div>

      {noGroceryList && <NoDataFound type="grocery"/>}
    </React.Fragment>

  )
}
