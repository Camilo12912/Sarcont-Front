import { useState } from "react";
import { CrearTerceroForm } from "../../components/terceros/CrearTerceros";
import { CREARCLIENTES_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { Modal, Container, Button } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";


function CrearTercero() {

    const [errores, setErrores]= useState({});    
    const [showModal, setShowModal] = useState(false);

    const mostrarAlerta=()=>{
        Swal.fire(
        'Éxito',
        'el tercero se registro correctamente',
        'success')
    }

    const crear= async ({idSucursal,idUsuario, documento, nombre, apellido, nombreTributario, telefono, tipo, tipoDocumento, email, direccion, ciudad, tipoTercero})=>{

        const errores={};
        setErrores(errores);

        axios.post(CREARCLIENTES_POST_ENDPOINT, {idSucursal, idUsuario, documento, nombre, apellido, nombreTributario, telefono, tipo, email, direccion, tipoDocumento, ciudad, tipoTercero}
        ).then((response)=>{
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
            <Button variant="success" onClick={handleShowModal}>
                <BsPlusSquareFill/> Registrar Tercero
            </Button>
            <Modal className="mi-modal-form" backdrop="static" size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Datos del tercero</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CrearTerceroForm errores={errores} callback={crear} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" type="submit" form="clientes-form">
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

export { CrearTercero }