import './styles.css';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../companyLogo';

function Home() {
  return (
    <>
        <Row>
            <Col md={6}>
            <h1>Hello world</h1>
            </Col>
            <Col md={6}>
            <img src="/res/companyLogo.png" alt="image" />
            </Col>
        </Row>
       
    </>
  );
}
export default Home;
