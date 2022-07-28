import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <main>
      <Container>
      <Row>
        <Col className="text-center mt-4"><small class="text-muted">Copyright ©	PizzeriaApp 2022</small></Col>
      </Row>
      </Container>
    </main>
  )
}
export default Footer;