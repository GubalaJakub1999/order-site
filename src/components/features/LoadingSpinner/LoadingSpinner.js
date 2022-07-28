import { Container, Spinner } from "react-bootstrap";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = ()  => {
  return (
    <Container className={styles.container}>
      <Spinner animation="border" className="mt-4" />
    </Container>
  )
}
export default LoadingSpinner;