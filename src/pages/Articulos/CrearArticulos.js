import { useState } from "react";
import {CREARARTICULO_POST_ENDPOINT, CREARSUCURSAL_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { Button, Container, Modal } from "react-bootstrap";
import { BsPlusSquareFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { SucursalForm } from "../../components/sucursales/CrearSucursalForm";
import { CrearArticuloForm } from "../../components/articulos/CrearArticulo";


function CrearArticulo() {

    const [errores, setErrores]= useState({});    
    const [showModal, setShowModal] = useState(false);

    const mostrarAlerta=()=>{
        Swal.fire(
        'Éxito',
        'El articulo se creó correctamente',
        'success')
    }

    const crear= async ({idSucursal,idUsuario, nombre, tarifa, codigo})=>{
    
        const errores={};
        setErrores(errores);

        axios.post(CREARARTICULO_POST_ENDPOINT, {idSucursal,idUsuario, nombre, tarifa, codigo}
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
                <BsPlusSquareFill/> Crear Articulo
            </Button>
            <Modal backdrop="static" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Registrar Articulo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <CrearArticuloForm errores={errores} callback={crear} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" type="submit" form="articulo-form">
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

export {CrearArticulo}