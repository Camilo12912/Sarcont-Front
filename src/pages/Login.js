import { SignInForm } from "../components/LoginForm"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import SarcontLogo4 from "../assets/img/SarcontLogo4.png"
import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { autenticacion } from "../connections/usuarioAcciones";
import Swal from "sweetalert2";

function SignIn () {

    const [errores, setErrores]= useState({});
    const navegar=useNavigate();
    const enviarAccion= useDispatch();

    const login = ({username, password})=>{

        const error={};
        setErrores(error);

        enviarAccion(autenticacion({username, password}))
        .then(respuesta =>{
            navegar("/Sucursales")
        })
        .catch(err=>{        
            Swal.fire({
                title: "Error",
                text: "No se ha podido iniciar sesion",
                icon: "error"
              });            
        })
    }

    return(
        <Card className="loginCard border-dark text-white">
        <Row>
            <Col xs={4} md={6} xl={6}>
                <Image style={{minHeight:'450px'}} src={SarcontLogo4} rounded className="imagen-login" />
            </Col>
            <Col xs={6} md={5} xl={5}>
            <Card.Body>
                <h1 style={{textAlign: "center", marginBottom:"2rem"}} >LOGIN</h1><br/>
                <SignInForm errores={errores} callback={login} />
            </Card.Body>
            </Col>
        </Row>
        </Card>
    )
}

export {SignIn}