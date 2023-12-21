import { useState } from "react";
import {CREARBANCOS_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { Modal, Container, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { BancosForm } from "../../components/bancos/CrearBancos";


function CrearBancos() {

    const [errores, setErrores]= useState({});    
    const [showModal, setShowModal] = useState(false);

    const mostrarAlerta=()=>{
        Swal.fire(
        'el Banco se creó correctamente',
        'success')
    }

    const crear= async ({nombre, codigoBanco, numeroCuenta})=>{
    
        const errores={};
        setErrores(errores);

        axios.post(CREARBANCOS_POST_ENDPOINT, {nombre, codigoBanco, numeroCuenta}
            ).then((response) => {
                handleCloseModal();
                mostrarAlerta();                                                
        })
        .catch((error)=>{
            setErrores({new: error.response.data.message});
        })
    }

    const handleCloseModal = () => {
        setShowModal(false);
      };
    
    const handleShowModal = () => {
        setShowModal(true);
      };

    return (
        <Container>
            <Button variant="success"  onClick={handleShowModal}>
                <BsPlusSquareFill/> Crear Banco
            </Button>
            <Modal backdrop="static" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Crear Banco</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <BancosForm errores={errores} callback={crear} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" type="submit" form="bancos-form">
                    Crear
                </Button>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                </Button>                
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export {CrearBancos}