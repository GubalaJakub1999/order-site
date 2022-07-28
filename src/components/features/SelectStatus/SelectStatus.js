import { Col, Form, Row } from "react-bootstrap"

 const SelectStatus = ({statuses, status, handleStatus}) => {
  return (
    <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2} className="fw-bold">
          Status:
        </Form.Label>
        <Col sm={4}>
          <Form.Select defaultValue={status} onChange={handleStatus}>
            {statuses.map(status => (
              <option key={status} value={status} >
                {status}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>
  )
  };
 export default SelectStatus;