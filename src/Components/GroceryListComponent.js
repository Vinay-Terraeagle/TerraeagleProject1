import React from 'react';
import { Row, Col} from "react-bootstrap";


export default function GroceryListComponent() {
  return (
    <React.Fragment>
      <div className="container grocery-list-container">
        <h4 className='pb-5 grocery-list-label'>Your Grocery List !!!</h4>
        <Row className='justify-content-center'>
          <Col className='col-5'>
            <table>
              <thead>
                <tr>
                  <th scope="col">Vegetables</th>
                  <th scope="col">3 items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Onion</td>
                  <td>30g</td>
                </tr>
                <tr>
                  <td>Carrot</td>
                  <td>10g</td>
                </tr>
                <tr>
                  <td>Capsicum</td>
                  <td>20g</td>
                </tr>
              </tbody>
            </table>

            <table className='mt-4'>
              <thead>
                <tr>
                  <th scope="col">Meat</th>
                  <th scope="col">1 items</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>

            <table className='mt-4'>
              <thead>
                <tr>
                  <th scope="col">Grains</th>
                  <th scope="col">3 items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rice</td>
                  <td>30g</td>
                </tr>
                <tr>
                  <td>Wheat</td>
                  <td>10g</td>
                </tr>
                <tr>
                  <td>Ragi</td>
                  <td>20g</td>
                </tr>
              </tbody>
            </table>

            <table className='mt-4'>
              <thead>
                <tr>
                  <th scope="col">Dairy</th>
                  <th scope="col">1 items</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>

            <table className='mt-4'>
              <thead>
                <tr>
                  <th scope="col">Others</th>
                  <th scope="col">3 items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salt</td>
                  <td>30g</td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>10g</td>
                </tr>
                <tr>
                  <td>Barbeque Sauce</td>
                  <td>20g</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </React.Fragment>

  )
}
