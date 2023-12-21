import axios from "axios";
import { useEffect, useState } from "react"
import { CLIENTESCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { Card, Container, Row, Col, Form, Table, InputGroup } from "react-bootstrap";
import { TerceroTable } from "../../components/terceros/ListaTerceros";
import { CrearTercero } from "./CrearTerceros";


const TercerosCreados=()=>{

    const [clientes, setClientes] = useState([])
    const [buscando, setBuscando] = useState(true)
    const [search, setSearch] = useState('');
    const [cantidadRegistros, setCantidadRegistros] = useState(5);

    useEffect(()=>{
        axios.get(CLIENTESCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setClientes(respuesta.data)
            setBuscando(false)
        }).catch(e=>{
            console.error(e)
            setBuscando(false)
        })
    },[clientes, cantidadRegistros, search])

    const handleCantidadRegistrosChange = (event) => {
        const value = event.target.value;
        setCantidadRegistros(value); // Asegúrate de que `cantidadRegistros` sea un número
    };

    return(
        <Container className="mt-3 mb-3" >
            <Row>
                <Col sm={12} md={8} lg={6}>
                <h2 className="margen-title"><strong>TERCEROS</strong></h2>
                <Card className="card-especialidad mt-3 mb-3">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title className="mt-2">
                            <h4>Lista de Terceros</h4>
                        </Card.Title>
                        <div className="ms-auto">
                            <CrearTercero />
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
                            {buscando ? "Cargando..." : (clientes.length===0 && "No hay clientes registrados")}
                            <Table striped bordered hover className="mt-3 mb-3 table-success" >
                                <thead>
                                <tr>
                                    <th>Sucursal</th>
                                    {/* <th>Usuario</th> */}
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    {/* <th>Nombre T</th> */}
                                    {/* <th>Tipo</th> */}
                                    {/* <th>Tipo Doc</th> */}
                                    <th>documento</th>
                                    <th>email</th>
                                    {/* <th>ciudad</th>
                                    <th>direccion</th> */}
                                    <th>telefono</th>
                                    {/* <th>Tipo T</th> */}
                                </tr>
                                </thead>
                                <tbody>
                                {clientes
                                .filter((item, index) => {
                                    if (cantidadRegistros === "all") {
                                      return true; // Mostrar todos los registros
                                    } else {
                                        return search.toLowerCase() === ''
                                        ? index < cantidadRegistros
                                        : (
                                            (item.email && item.email.toLowerCase().includes(search)) ||
                                            (item.documento && item.documento.toLowerCase().includes(search))
                                        )}
                                })
                                .map((cliente, index) => (
                                    <TerceroTable key={cliente.idCliente} cliente={cliente} contador={index + 1} />
                                ))}
                                </tbody>
                            </Table>
                            </Card.Body>
                            <Card.Footer>
                        <div className="d-flex justify-content-between align-items-center">
                        <h5>Mostrando {cantidadRegistros} de {clientes.length} registros</h5>
                            <div>
                                <button>
                                    Anterior
                                </button>
                                <button>
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

export { TercerosCreados }