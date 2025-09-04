import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram  } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {

  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#343a40', color: 'white', padding: '10px 0' }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} </p>
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
}