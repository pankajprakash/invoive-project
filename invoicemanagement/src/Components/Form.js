import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Datepicker from './Datepicker';
import Result from './Result'

import 'react-dropdown/style.css';
import IvSelect from './Select';
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars"

const options = [
  'UPI', 'Net Banking', 'Debit card'
];

const onSelect = () => {



}
const defaultOption = options[0];


const Form = ({ history }) => {
  const [initial, Final] = useState({
    companyname: '',
    contact: '',
    billnumber: '',
    billfor: '',
    amount: '',
    gstNumber: '',
    tax: '',
    notes: '',
    itemType: '',
    productName: '',
    Quantity:'',
    price: '',
    total: '',
    date:'',
    modeOfPayment:''



  })
  const change = (e) => {
    Final({ ...initial, [e.target.name]: e.target.value })

  }

  const submit = () => {
  
     console.log(initial)



    
 
  }
  const dataSubmit = (e) => {
    e.preventDefault()
  }


const AddNew=()=>{

  console.log("fdsjf")
}
 
  return (
    <>
      <Container>
        <div className="outer">

          <form className="form-data" onSubmit={dataSubmit}>
            <h5 className="top-head"><b >INVOICE MANAGEMENT</b></h5>
            <Row className="first">
              <Col md="4">
                <label for="Company name">company Name</label>
                <input type="text" placeholder="KeyMouseIt" className="first-input-tag" onChange={change} name="companyname" value={initial.companyname} />
              </Col>
              <Col md="4">
                <label for="contact">Contact </label>
                <input type="text" onChange={change} name="contact" value={initial.contact} /></Col>
              <Col md="4">
                <label for="bill number">Bill Number</label>
                <input type="text" onChange={change} name="billnumber" value={initial.billnumber} /> </Col>
            </Row>

            <Row className="first">
              <Col md="3">
                <label for="bill for">Amount</label>
                <input type="text" onChange={change} name="amount" value={initial.amount} />
              </Col>
              
              
              <Col md="3">
                <label for="tax">Tax</label>
                <input type="text" onChange={change} name="tax" value={initial.tax} /> </Col>

                <Col md="3">
                <label for="gst number">GST Number</label>
                <input type="text" onChange={change} name="gstNumber" value={initial.gstNumber} />
              </Col>

                <Col md="3">
                <label for="due date">Due Date</label>
                <Datepicker />
              </Col>  
            </Row>


            <Row className="first">
              <Col md="4">
                <label for="total">Notes</label>
                <input type="text" onChange={change} name="notes" value={initial.notes} />
              </Col>
              <Col md="3">
                <label for="mode of payment">Mode of Payment</label>
                <IvSelect />
                </Col>

            </Row>
{/* 
            <Row className="first">
              <Col md="3">
                <label for="gst number">GST Number</label>
                <input type="text" onChange={change} name="gstNumber" value={initial.gstNumber} />
              </Col>
              <Col md="3">
                <label for="tax">Tax</label>
                <input type="text" onChange={change} name="tax" value={initial.tax} /></Col>
             
              <Col md="3">
                <label for="notes">Notes</label>
                <input type="text" onChange={change} name="notes" value={initial.notes} />
              </Col>
            </Row> */}
            <Row className="first">
              <Col md="3">
                <label for="item type">Items  Type</label>
                <input type="text" onChange={change} name="itemType" value={initial.itemType} />
              </Col>
              <Col md="3">
                <label for="product name">Product Name</label>
                <input type="text" onChange={change} name="productName" value={initial.productName} /></Col>
              <Col md="2">
                <label for="Quantity">Quantity</label>
                <input type="text" onChange={change} name="Quantity" value={initial.Quantity} /></Col>
             
              <Col md="2">
                <label for="price">Price</label>
                <input type="text" onChange={change} name="price" value={initial.price} />
              </Col>
              <Col md="2">
                <label for="total">Total</label>
                <input type="text" onChange={change} name="total" value={initial.total} />
              </Col>

            </Row>
            

            <Row className="first">
              <Col className="button-column"  >
                <button className="addnew-btn" onClick={AddNew}>Add New <i class="far fa-plus-square"></i></button>
              </Col>

            </Row>
            

            <Row className="first">
              <Col className="button-column"  >
                <button className="submit-btn" onClick={submit}>SUBMIT</button>
              </Col>

            </Row>

          </form>
        </div>
      </Container>

    </>
  )
}

export default Form
