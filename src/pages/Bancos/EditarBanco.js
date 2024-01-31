import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTUALIZARBANCO_PUT_ENDPOINT, BANCODETALLE_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Container, Button, Modal } from "react-bootstrap";
import { TiEdit } from "react-icons/ti";
import Swal from "sweetalert2";
import { BancosForm } from "../../components/bancos/CrearBancos";


function EditarBanco({id}) {    

    const [banco, setBanco] = useState(null)
    const [errores, setErrores] = useState({});
    const [showModal, setShowModal] = useState(false)
    const navegar = useNavigate();

    useEffect(()=>{

        axios.get(`${BANCODETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta=>{            
            setBanco(respuesta.data)
        }).catch(error=>{
            navegar("/Bancos")
        })
    },[id, navegar]);

    const editar= async ({ nombre, codigoBanco, numeroCuenta }) =>{

        const error={}
        setErrores(error)

        axios.put(`${ACTUALIZARBANCO_PUT_ENDPOINT}/${id}`, {nombre, codigoBanco, numeroCuenta}
        ).then(respuesta=>{
            handleCloseModal();
            navegar("/Bancos")
            crearAlerta();
        })
        .catch(err=>{
            setErrores({new: error.response.data.message});
        })
    }

    const crearAlerta=()=>{
        Swal.fire(
            'Éxito',
            'La información del banco ha sido actualizada',
            'success'
          )
    }

    const handleCloseModal = () => {
        setShowModal(false);
      };
    
    const handleShowModal = () => {
        setShowModal(true);
      };      
    
    return(

        <Container>
            <Button className="edit-button" size="sm" onClick={handleShowModal}>
            <TiEdit/>
            </Button>
            <Modal className="modal-banco" backdrop="static" size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Editar Banco</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {banco && (                    
                    <BancosForm 
                    errores={errores}
                    callback={editar}
                    eNombre={banco.nombre}
                    eCodigo={banco.codigoBanco}
                    eNumeroCuenta={banco.numeroCuenta}                                      
                    ></BancosForm>
                )}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" type="submit" form="banco-form">
                    Guardar Cambios
                </Button>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                </Button>                
                </Modal.Footer>
            </Modal>
        </Container>

    )
}

export { EditarBanco }