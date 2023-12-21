import axios from 'axios';
import { useEffect, useState } from "react";
import { CLIENTEDETALLE_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Alert, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

function TerceroDetalle({id}) {
    const [cliente, setCliente] = useState(null)
    const [editando, setEditando] = useState(false)
    const navegar = useNavigate()

    useEffect(()=>{
        axios.get(`${CLIENTEDETALLE_GET_ENDPOINT}/${id}`)
        .then((response)=>{        
            console.log(response.data)    
            setCliente(response.data[0])
        }).catch(e=>{            
            navegar(-1)
        })
    },[id, navegar])
        

        return (

            cliente ? (
        <Form >
        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Sucursal</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.sucursalNombre}
            disabled
            readOnly/>
        </Form.Group>



        <Form.Group as={Col} className="mb-3" controlId="usuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.nombreUsuario}
            disabled
            readOnly/>
        </Form.Group>
        </Row>

        <div>
        <h5>Datos del Tercero</h5>
        </div>

        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="noDocumento">
        <Form.Label>Tipo de persona</Form.Label>
        <Form.Control 
            type="text"          
            value={cliente.tipo}
            disabled
            readOnly
            />       
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="noDocumento">
        <Form.Label>Tipo de Documento</Form.Label>
        <Form.Control 
            type="text"          
            value={cliente.tipoDocumento}
            disabled
            readOnly
            />       
        </Form.Group>
        </Row>



        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="noDocumento">
        <Form.Label>No. Documento</Form.Label>
        <Form.Control 
            type="text"          
            value={cliente.documento}
            disabled
            readOnly
            />       
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.nombres}
            disabled
            readOnly
            />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.apellidos}
            disabled
            readOnly
            />
        </Form.Group>    
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Nombre Tributario</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.nombreTributario}
            disabled
            readOnly
            />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Tipo de tercero</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.tipoTercero}
            disabled
            readOnly
            />
        </Form.Group>
        </Row>

        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>email</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.email}
            disabled
            readOnly
            />
        </Form.Group>


        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>telefono</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.telefono}
            disabled
            readOnly
            />
        </Form.Group>  
        </Row>

        
        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>direccion</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.direccion}
            disabled
            readOnly
            />
        </Form.Group>


        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control 
            type="text" 
            value={cliente.ciudad}
            disabled
            readOnly
            />
        </Form.Group>   
        </Row>
        </Form>
        ) : (
            <p>Cargando datos del tercero...</p>
          )
        )

}

export { TerceroDetalle }