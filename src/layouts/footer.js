import { Container, Row, Col } from 'react-bootstrap';
import { Divisor } from "../components/divisor"
// import sarcont from "../assets/img/fundacion.png"

function Footer () {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-logo">
              {/* <img src={sarcont} alt="fesc Logo" /> */}
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-contact">
              <h3>Contacto</h3>
              <p>Dirección: 123 Calle Principal</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: info@example.com</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-service">
              <h3>Servicio</h3>
              <p>Servicio al Cliente</p>
              <p>Política de Privacidad</p>
              <p>Términos y Condiciones</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="footer-social">
            <p>Encuéntranos en</p>
              <ul className="social-icons">
                <li><img src="/images/facebook-icon.png" alt="Facebook" /></li>
                <li><img src="/images/twitter-icon.png" alt="Twitter" /></li>
                <li><img src="/images/instagram-icon.png" alt="Instagram" /></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Divisor className="footer-div">
        <p>Terminos y Condiciones</p>
        <p>Politica y Privacidad</p>
      </Divisor>
    </footer>
  );
};

export {Footer}
