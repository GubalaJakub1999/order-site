import Container from 'react-bootstrap/Container';
import NavLink  from "react-bootstrap/NavLink";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './NavigationBar.modules.scss';

const NavigationBar = () => {
  return (
    <main>
      <Navbar className={styles.navbar} bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} href="/">Waiter.app</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} href="/">Home</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
    </main>
  )
}
export default NavigationBar;