import { Col, Form, FormControl, Row } from "react-bootstrap"


const SetBill = ({bill, setBill}) => {
  return (
    <Form.Group as={Row} id="Bill" className="mb-3">
        <Form.Label column sm={2} class="fw-bold">
          Bill:
        </Form.Label>
        <div className="pe-0 w-auto align-self-center">$</div>
        <Col sm={2} lg={1} >
          <FormControl type="number" value={bill} onChange={e => setBill(e.target.value)} ></FormControl>
        </Col>
      </Form.Group>
  )
}
export default SetBill;