import axios from "axios";
import { useEffect, useState } from "react"
import { BANCOSCREADOS_GET_ENDPOINT} from "../../connections/helpers/endpoints";
import { Card, Container, Row, Col, Form, Table, InputGroup } from "react-bootstrap";
import { BancosTable } from "../../components/bancos/ListaBancos";
import { CrearBancos } from "./CrearBancos";


const BancosCreados=()=>{

    const [bancos, setBancos] = useState([])
    const [buscando, setBuscando] = useState(true)
    const [search, setSearch] = useState('');
    const [cantidadRegistros, setCantidadRegistros] = useState(5);

    useEffect(()=>{
        axios.get(BANCOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setBancos(respuesta.data)
            setBuscando(false)
        }).catch(e=>{
            console.error(e)
            setBuscando(false)
        })
    },[bancos, cantidadRegistros, search])

    const handleCantidadRegistrosChange = (event) => {
        const value = event.target.value;
        setCantidadRegistros(value); // Asegúrate de que `cantidadRegistros` sea un número
    };

    return(
        <Container className="mt-3 mb-3" >
            <Row>
                <Col sm={12} md={8} lg={6}>
                <h2 className="margen-title"><strong>BANCOS REGISTRADOS</strong></h2>
                <Card className="card-especialidad mt-3 mb-3">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title className="mt-2">
                            <h4>Lista de bancos</h4>
                        </Card.Title>
                        <div className="ms-auto">
                            <CrearBancos />
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
                            {buscando ? "Cargando..." : (bancos.length===0 && "No hay PUC registrados")}
                            <Table striped bordered hover className="mt-3 mb-3 table-success" >
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Codigo del banco</th>
                                    <th>Nombre</th>
                                    <th>Numero de cuenta</th>
                                    <th>Accion</th>
                                </tr>
                                </thead>
                                <tbody>
                                {bancos
                                .filter((item, index) => {
                                    if (cantidadRegistros === "all") {
                                      return true; // Mostrar todos los registros
                                    } else {
                                    return search.toLowerCase() === ''
                                        ? index < cantidadRegistros
                                        : item.nombre.toLowerCase().includes(search);
                                    }
                                })
                                .map((banco, index) => (
                                    <BancosTable key={banco.codigo} bancos={banco} contador={index + 1} />
                                ))}
                                </tbody>
                            </Table>
                            </Card.Body>
                            <Card.Footer>
                        <div className="d-flex justify-content-between align-items-center">
                        <h5>Mostrando {cantidadRegistros} de {bancos.length} registros</h5>
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

export { BancosCreados }