import axios from 'axios';
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BUSCARPUCPORCODIGO_GET_ENDPOINT, SUCURSALESCREADAS_GET_ENDPOINT, USUARIOSCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Alert, Form, Row, Col, Button } from 'react-bootstrap';


function CrearArticuloForm({errores, callback, tselectedSucursal="",tselectedUsuario="", aNombre="", tUsuario="", tTarifa="" }) {

        const [sucursales, setSucursales] = useState([])
        const [nombre, setNombre] = useState(aNombre);
        const [puc, setPuc] = useState('');    
        const [codigo, setCodigo] = useState('')
        const [tarifa, setTarifa] = useState(tTarifa);
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
        
        const handleBuscarPuc = () => {
            axios.get(`${BUSCARPUCPORCODIGO_GET_ENDPOINT}/${codigo}`)
                .then((response) => { 
                    console.log(response.data[0])      
                    setPuc(response.data[0])          
                })
                .catch((e) => {          
                    console.error(e)
                });
            };
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
            tarifa,
            codigo,
        })
        }

        return (


        <Form onSubmit={handleSubmit} id="articulo-form">
        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Sucursal</Form.Label>
            <Form.Select aria-label="Elija una sucursal"
            value={selectedSucursal}
            onChange={(e) => setSelectedSucursal(e.target.value)} // Maneja el cambio de selección
            >
            <option value=''>Seleccione una sucursal</option>
            {sucursales.map((sucursal)=> (
                <option key={sucursal.idSucursal} value={sucursal.idSucursal}>                
                {sucursal.nombre}
                </option>
            ))}
            </Form.Select>
        </Form.Group>
        </Row>

        <div>
        <h5>Datos del Articulo</h5>
        </div>




        <Row className="mb-3">    

        <Form.Group as={Col} className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
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
            <Form.Label>Tarifa</Form.Label>
            <Form.Control 
            type="text" 
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
            />
            {errores.tarifa && (
            <Alert variant="danger">{errores.tarifa}</Alert>
            )}
        </Form.Group>      
        </Row>

          
        <Row className="mb-3">
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Codigo PUC</Form.Label>
            <Form.Control 
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            />
            {errores.codigo && (
            <Alert variant="danger">{errores.codigo}</Alert>
            )}
        </Form.Group>


        <Form.Group as={Col} className="mb-3 mt-4">
        <Button variant="success" onClick={handleBuscarPuc}>
            <BsSearch/>
        </Button>
        </Form.Group>   
        </Row>


        <Row className="mb-3">    

        <Form.Group as={Col} className="mb-3" controlId="usuario">
            <Form.Label>denominacion</Form.Label>
            <Form.Control 
            type="text" 
            value={puc.denominacion}
            
            readOnly/>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="usuario">
            <Form.Label>clasificacion</Form.Label>
            <Form.Control 
            type="text" 
            value={puc.clasificacion}
            readOnly/>
        </Form.Group>    
        </Row>

        </Form>

        )

}

export { CrearArticuloForm }