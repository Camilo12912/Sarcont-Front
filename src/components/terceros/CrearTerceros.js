import axios from 'axios';
import { useEffect, useState } from "react";
import { SUCURSALESCREADAS_GET_ENDPOINT, USUARIOSCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Alert, Form, Row, Col } from 'react-bootstrap';


function CrearTerceroForm({errores, callback, tselectedSucursal="",tselectedUsuario="", tNombres="", tApellidos="", tDireccion="", tNombreTributario="", tTipo="", tTipoDocumento="", tDocumento="", tEmail="", tCiudad="", tTelefono="", tTipoTercero="", tUsuario="" }) {

        const [sucursales, setSucursales] = useState([])
        const [nombre, setNombre] = useState(tNombres);
        const [apellido, setApellido] = useState(tApellidos);
        const [nombreTributario, setNombreTributario] = useState(tNombreTributario);
        const [tipo, setTipo] = useState(tTipo);
        const [tipoDocumento, setTipoDocumento] = useState(tTipoDocumento);
        const [documento, setDocumento] = useState(tDocumento);
        const [email, setEmail] = useState(tEmail);
        const [ciudad, setCiudad] = useState(tCiudad);
        const [direccion, setDireccion] = useState(tDireccion);
        const [telefono, setTelefono] = useState(tTelefono);
        const [tipoTercero, setTipoTercero] = useState(tTipoTercero);
        const [selectedSucursal, setSelectedSucursal] = useState(tselectedSucursal);
        const [usuario, setUsuario] = useState([]);
        const [selectedUsuario, setSelectedUsuario] = useState(tselectedUsuario);

        useEffect(()=>{
            axios.get(SUCURSALESCREADAS_GET_ENDPOINT)
            .then(respuesta =>{
                setSucursales(respuesta.data)
            }).catch(e=>{
                console.error(e)
            })
        },[selectedSucursal])

        useEffect(()=>{
            axios.get(USUARIOSCREADOS_GET_ENDPOINT)
            .then(respuesta =>{
                console.log(respuesta.data)
                setUsuario(respuesta.data)
                
            }).catch(e=>{
                console.error(e);
            })
        },[selectedUsuario])
        

        // useEffect(()=>{
        //     axios.get(`${BUSCARINSTITUCIONPORESPECIALIDAD_GET_ENDPOINT}/${selectedEspecialidad}`
        //     ).then(respuesta =>{
        //         setInstituciones(respuesta.data)
        //     }).catch(e=>{
        //         console.error(e)
        //     })
        // },[selectedEspecialidad, selectedInstitucion])

        // useEffect(()=>{
        // axios.get(`${INSTITUCIONDETALLE_GET_ENDPOINT}/${selectedInstitucion}`
        // ).then(respuesta=>{
        //     setDireccionInstitucion(respuesta.data.direccion)
        // }).catch(e=>{
        //     console.error(e)
        // })
        // })

        const handleSubmit=(e)=>{
            e.preventDefault();
            callback({
            idSucursal: selectedSucursal,
            idUsuario: usuario.idUsuario,
            nombre,
            apellido,
            nombreTributario,
            tipo,
            tipoDocumento,
            documento,
            email,
            ciudad,
            direccion,
            telefono,
            tipoTercero
        })
        }

        return (

        <Form onSubmit={handleSubmit} id="clientes-form">
        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Sucursal</Form.Label>
            <Form.Select aria-label="Elija una sucursal"
            value={selectedSucursal}
            onChange={(e) => setSelectedSucursal(e.target.value)} // Maneja el cambio de selección
            >
            <option value="">Seleccione una sucursal</option>
            {sucursales.map((sucursal)=> (
                <option key={sucursal.idSucursal} value={sucursal.idSucursal}>                
                {sucursal.nombre}
                </option>
            ))}
            </Form.Select>
        </Form.Group>


        </Row>

        <div>
        <h5>Datos del Tercero</h5>
        </div>

        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Tipo de Persona</Form.Label>
                <Form.Select aria-label="Default select example"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                >
                <option>Seleccione</option>
                <option value="1">Juridica</option>
                <option value="2">Natural</option>
                </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
            <Form.Label>Tipo de Documento</Form.Label>
                <Form.Select aria-label="Default select example"
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
                >
                <option>Seleccione el tipo de Documento</option>
                <option value="1">Cedula de ciudadania</option>
                <option value="2">Cedula de extranjeria</option>
                <option value="3">Pasaporte</option>
                <option value="4">NIT</option>
                </Form.Select>
        </Form.Group>
        </Row>



        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="noDocumento">
            <Form.Label>No. Documento</Form.Label>
            <Form.Control 
            type="text" 
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            />
            {errores.documento && (
            <Alert variant="danger">{errores.documento}</Alert>
            )}
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombres && (
            <Alert variant="danger">{errores.nombres}</Alert>
            )}
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="Apellidos">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control 
            type="text" 
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            />
            {errores.apellidos && (
            <Alert variant="danger">{errores.apellidos}</Alert>
            )}
        </Form.Group>      
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="nombreTributario">
            <Form.Label>Nombre Tributario</Form.Label>
            <Form.Control 
            type="text" 
            value={nombreTributario}
            onChange={(e) => setNombreTributario(e.target.value)}
            />
            {errores.nombreTributario && (
            <Alert variant="danger">{errores.nombreTributario}</Alert>
            )}
        </Form.Group>  

        <Form.Group as={Col} className="mb-3">
            <Form.Label>Tipo de Tercero</Form.Label>
                <Form.Select aria-label="Default select example"
                value={tipoTercero}
                onChange={(e) => setTipoTercero(e.target.value)}
                >
                <option>Seleccione el tipo de Documento</option>
                <option value="1">Cliente</option>
                <option value="2">Proveedor</option>
                <option value="3">Empleado</option>
                <option value="4">Cobrador</option>
                <option value="5">Vendedor</option>
                <option value="6">Fiador</option>
                <option value="7">Mostrador</option>
                <option value="8">Mesa</option>
                <option value="9">Inquilino</option>
                <option value="10">Propietario de inmueble</option>
                <option value="11">Otro</option>
                </Form.Select>
        </Form.Group>
        </Row>

        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {errores.email && (
            <Alert variant="danger">{errores.email}</Alert>
            )}
        </Form.Group>


        <Form.Group as={Col} className="mb-3" controlId="telefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control 
            type="text" 
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            />
            {errores.telefono && (
            <Alert variant="danger">{errores.telefono}</Alert>
            )}
        </Form.Group>      
        </Row>

        
        <Row className="mb-3">    
        <Form.Group as={Col} className="mb-3" controlId="direccion">
            <Form.Label>Dirección</Form.Label>
            <Form.Control 
            type="text" 
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            />
            {errores.direccion && (
            <Alert variant="danger">{errores.direccion}</Alert>
            )}
        </Form.Group>


        <Form.Group as={Col} className="mb-3" controlId="ciudad">
            <Form.Label>Ciudad/Municipio</Form.Label>
            <Form.Control 
            type="text" 
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            />
            {errores.ciudad && (
            <Alert variant="danger">{errores.ciudad}</Alert>
            )}
        </Form.Group>      
        </Row>
        </Form>

        )

}

export { CrearTerceroForm }