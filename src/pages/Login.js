import { SignInForm } from "../components/LoginForm"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import SarcontLogo4 from "../assets/img/SarcontLogo4.png"

function SignIn ({onSignIn}) {

    return(
        <Card className="loginCard border-dark text-white">
        <Row>
            <Col xs={4} md={6} xl={6}>
                <Image style={{minHeight:'450px'}} src={SarcontLogo4} rounded className="imagen-login" />
            </Col>
            <Col xs={6} md={5} xl={5}>
            <Card.Body>
                <h1 style={{textAlign: "center", marginBottom:"2rem"}} >LOGIN</h1><br/>
                <SignInForm onSignIn={onSignIn} />
            </Card.Body>
            </Col>
        </Row>
        </Card>
    )
}

export {SignIn}