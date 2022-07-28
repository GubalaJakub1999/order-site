import { Col, Form, FormControl, Row } from "react-bootstrap";


const SetPeopleAndMaxPeople = ({peopleAmount, handleNumbersPeople, maxPeopleAmount, handleNumbersMaxPeople}) => {
  return (
    <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2} class="fw-bold">
          People:
        </Form.Label>
        <Col sm={2} lg={1}>
          <FormControl value={peopleAmount} onChange={handleNumbersPeople}></FormControl>
        </Col>
        <div className="pe-0 w-auto align-self-center">/</div>
        <Col sm={2} lg={1}>
          <FormControl value={maxPeopleAmount} onChange={handleNumbersMaxPeople}></FormControl>
        </Col>
      </Form.Group>
  )
}
export default SetPeopleAndMaxPeople;