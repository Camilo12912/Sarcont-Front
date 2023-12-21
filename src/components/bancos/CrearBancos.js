import { useState } from 'react';
import { Form, Alert, Row } from 'react-bootstrap';

function BancosForm({errores, callback, eNombre="", eCodigo="", eNumeroCuenta=""}) {

    const [nombre, setNombre] = useState(eNombre);
    const [codigoBanco, setCodigo] = useState(eCodigo);
    const [numeroCuenta, setNumeroCuenta] = useState(eNumeroCuenta);

    const handleSubmit=(e)=>{
        e.preventDefault();
        callback({nombre,
            codigoBanco,
        numeroCuenta})
    }

    return (

        
        <Form onSubmit={handleSubmit} id="bancos-form">
        <Row className="mb-3">
        <Form.Group controlId="nombre">
            <Form.Label>Nombre de el Banco</Form.Label>
            <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && (
            <Alert variant="danger">{errores.nombre}</Alert>
            )}
        </Form.Group>

        </Row>

        <Row className="mb-3">
        <Form.Group controlId="codigoBanco">
            <Form.Label>Codigo de el Banco</Form.Label>
            <Form.Control
            type="text"
            value={codigoBanco}
            onChange={(e) => setCodigo(e.target.value)}
            />
            {errores.codigoBanco && (
            <Alert variant="danger">{errores.codigoBanco}</Alert>
            )}
        </Form.Group>  
        </Row>

        <Row className="mb-3">
        <Form.Group controlId="numeroCuenta">
            <Form.Label>Numero de cuenta del banco</Form.Label>
            <Form.Control
            type="text"
            value={numeroCuenta}
            onChange={(e) => setNumeroCuenta(e.target.value)}
            />
            {errores.numeroCuenta && (
            <Alert variant="danger">{errores.numeroCuenta}</Alert>
            )}
        </Form.Group>  
        </Row>
        </Form>
    );
}

export {BancosForm};