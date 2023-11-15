import axios from "axios";
import { Container, Card, Row, Col, Table, InputGroup, Form } from "react-bootstrap"
import React, { useEffect, useState } from "react";
import { SUCURSALESCREADAS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { ListaSucursal } from "../../components/sucursales/ListaSucursales";
import { CrearSucursal } from "./CrearSucursal";

const SucursalesCreadas=()=>{

    const [sucursales, setSucursales] = useState([])
    const [buscando, setBuscando] = useState(true)
    const [search, setSearch] = useState('');
    const [cantidadRegistros, setCantidadRegistros] = useState(5);

    useEffect(()=>{
        axios.get(SUCURSALESCREADAS_GET_ENDPOINT)
        .then(respuesta=>{
            setSucursales(respuesta.data)
            setBuscando(false)
        }).catch(e=>{
            console.error(e)
            setBuscando(false)
        })
    },[sucursales, cantidadRegistros, search])

    const handleCantidadRegistrosChange = (event) => {
        const value = event.target.value;
        setCantidadRegistros(value); 
    };

    return (
        <Container className="mt-3 mb-3 ">
            <Row className="justify-content ">
                <Col sm={12} md={8} lg={6}>
                    <h2 className="margen-title"><strong>SUCURSALES</strong></h2>
                    <Card className="card-especialidad mt-3 mb-3">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <Card.Title className="mt-2">
                            <h4>Lista de sucursales</h4>
                            </Card.Title>
                            <div className="ms-auto">
                                <CrearSucursal />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">                            
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span>Mostrando </span>
                                <Form.Select
                                    value={cantidadRegistros}
                                    onChange={handleCantidadRegistrosChange}
                                    >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value="all">All</option>
                                </Form.Select>
                                <span> registros</span>
                            </div>
                            <InputGroup className='my-3' style={{ display: 'flex', alignItems: 'center' }}>
                            Buscar: 
                                <Form.Control                            
                                onChange={(e) => setSearch(e.target.value)}                                
                                style={{                                                                                                          
                                    borderRadius: '8px',       
                                }}
                                />
                            </InputGroup>
                            </div>                                        
                            {buscando ? "Cargando..." : (sucursales.length===0 && "No hay sucursales registradas")}
                            <Table striped bordered hover className="mt-3 mb-3 table-success" >
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Sucursal</th>
                                    <th>Acción</th>
                                </tr>
                                </thead>
                                <tbody>
                                {sucursales
                                .filter((item, index) => {
                                    if (cantidadRegistros === "all") {
                                      return true; // Mostrar todos los registros
                                    } else {
                                      return search.toLowerCase() === ''
                                        ? index < cantidadRegistros
                                        : item.nombre.toLowerCase().includes(search);
                                    }
                                })
                                .map((sucursal, index) => (
                                    <ListaSucursal key={sucursal.idSucursal} sucursal={sucursal} contador={index + 1} />
                                ))}
                                </tbody>
                            </Table>
                            </Card.Body>
                            <Card.Footer>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>Mostrando {cantidadRegistros} de {sucursales.length} registros</h5>
                                <div>
                                    <button /* onClick={prevHandler} */>
                                    Anterior
                                    </button>
                                    <button /* onClick={nextHandler} */>
                                    Siguiente
                                    </button>
                                </div>
                            </div>
                            </Card.Footer>               
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export {SucursalesCreadas}