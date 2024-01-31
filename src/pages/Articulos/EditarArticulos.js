import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTUALIZARARTICULO_PUT_ENDPOINT, ARTICULODETALLE_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Container, Button, Modal } from "react-bootstrap";
import { TiEdit } from "react-icons/ti";
import Swal from "sweetalert2";
import { CrearArticuloForm } from "../../components/articulos/CrearArticulo";


function EditarArticulo({id}) {    

    const [articulo, setArticulo] = useState(null)
    const [errores, setErrores] = useState({});
    const [showModal, setShowModal] = useState(false)
    const navegar = useNavigate();

    useEffect(()=>{

        axios.get(`${ARTICULODETALLE_GET_ENDPOINT}/${id}`
        ).then(respuesta=>{            
            setArticulo(respuesta.data)
        }).catch(error=>{
            /* navegar("/Articulos") */
        })
    },[id, navegar]);

    const editar= async ({idSucursal, nombre, tarifa, codigo}) =>{

        const error={}
        setErrores(error)

        axios.put(`${ACTUALIZARARTICULO_PUT_ENDPOINT}/${id}`, {idSucursal, nombre, tarifa, codigo}
        ).then(respuesta=>{
            handleCloseModal();
            navegar("/Articulos")
            crearAlerta();
        })
        .catch(err=>{
            setErrores({new: error.response.data.message});
        })
    }

    const crearAlerta=()=>{
        Swal.fire(
            'Éxito',
            'La información del articulo ha sido actualizada',
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
            <Modal className="modal-articulo" backdrop="static" size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Editar Articulo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {articulo && (                    
                    <CrearArticuloForm 
                    errores={errores}
                    callback={editar}
                    aNombre={articulo.nombre}
                    tselectedSucursal={articulo.idSucursal}
                    tTarifa={articulo.tarifa}
                    aCodigo={articulo.codigo}                    
                    ></CrearArticuloForm>
                )}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" type="submit" form="articulo-form">
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

export { EditarArticulo }