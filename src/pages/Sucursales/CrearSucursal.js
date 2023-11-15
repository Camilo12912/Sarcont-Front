import { useState } from "react";
import {CREARSUCURSAL_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { Modal, Container, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { SucursalForm } from "../../components/sucursales/CrearSucursalForm";


function CrearSucursal() {

    const [errores, setErrores]= useState({});    
    const [showModal, setShowModal] = useState(false);

    const mostrarAlerta=()=>{
        Swal.fire(
        'Éxito',
        'La Sucursal se creó correctamente',
        'success')
    }

    const crear= async ({nombre})=>{
    
        const errores={};
        setErrores(errores);

        axios.post(CREARSUCURSAL_POST_ENDPOINT, {nombre}
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
                <BsPlusSquareFill/> Crear Sucursal
            </Button>
            <Modal backdrop="static" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Crear Sucursal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <SucursalForm errores={errores} callback={crear} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" type="submit" form="sucursal-form">
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

export {CrearSucursal}