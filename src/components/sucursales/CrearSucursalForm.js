import { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';

function SucursalForm({errores, callback, eNombre=""}) {

    const [nombre, setNombre] = useState(eNombre);

    const handleSubmit=(e)=>{
        e.preventDefault();
        callback({nombre})
    }

    return (

        <Form onSubmit={handleSubmit} id="sucursales-form">
        <Form.Group controlId="nombre">
            <Form.Label>Nombre de la Sucursal</Form.Label>
            <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && (
            <Alert variant="danger">{errores.nombre}</Alert>
            )}
        </Form.Group>
        </Form>
    );
}

export {SucursalForm};
