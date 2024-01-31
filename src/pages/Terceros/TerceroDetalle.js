import axios from 'axios';
import { useEffect, useState } from "react";
import { CLIENTEDETALLE_GET_ENDPOINT, ACTUALIZARCLIENTE_PUT_ENDPOINT, ELIMINARCLIENTE_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";
import { Alert, Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

// ... (otras importaciones y partes del código)

function TerceroDetalle({ id }) {
    const [cliente, setCliente] = useState(null);
    const [editando, setEditando] = useState(false);
    const [editData, setEditData] = useState({});
    const [error, setError] = useState(null);
    const navegar = useNavigate();

    useEffect(() => {
        axios.get(`${CLIENTEDETALLE_GET_ENDPOINT}/${id}`)
            .then((response) => {
                console.log(response.data);
                setCliente(response.data[0]);
                setEditData(response.data[0]); // Asegúrate de inicializar editData correctamente
            })
            .catch((e) => {
                navegar(-1);
            });
    }, [id, navegar]);

    const handleEditar = () => {
        // Habilitar la edición solo para nombre, tipo y documento
        setEditando(true);
    };

    const handleCancelarEdicion = () => {
        setEditando(false);
        // Revertir los cambios en editData si se cancela la edición
        setEditData(cliente);
    };

    const handleGuardarEdicion = () => {
        // Realizar lógica para enviar datos editados al servidor
        axios.put(`${ACTUALIZARCLIENTE_PUT_ENDPOINT}/${id}`, editData)
            .then((response) => {
                console.log(response.data);
                setCliente(response.data);
                setEditando(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Verificar si el campo actual es nombre, tipo o documento antes de actualizar el estado
        if (['nombres', 'tipo', 'documento'].includes(name)) {
            setEditData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // Lista de propiedades que no se deben mostrar en el detalle
    const propiedadesOcultas = ['idCliente', 'idSucursal'];

    return (
        <div>
            {cliente ? (
                <Form>
                    {Object.keys(cliente).map((key) => (
                        // Verificar si la propiedad actual no está en la lista de propiedades ocultas
                        !propiedadesOcultas.includes(key) && (
                            <Row className="mb-3" key={key}>
                                <Form.Group as={Col} className="mb-3" controlId={key}>
                                    <Form.Label>{key}</Form.Label>
                                    {editando ? (
                                        <Form.Control
                                            type="text"
                                            name={key}
                                            value={editData[key] || ''}
                                            onChange={handleInputChange}
                                            // Habilitar o deshabilitar según el nombre de la propiedad
                                            disabled={!(['nombres', 'tipo', 'documento'].includes(key))}
                                        />
                                    ) : (
                                        <Form.Control
                                            type="text"
                                            value={cliente[key]}
                                            disabled={!editando}
                                            readOnly
                                        />
                                    )}
                                </Form.Group>
                            </Row>
                        )
                    ))}

                    {editando ? (
                        <div>
                            <Button onClick={handleGuardarEdicion} variant="success">
                                Guardar
                            </Button>
                            <Button onClick={handleCancelarEdicion} variant="secondary">
                                Cancelar
                            </Button>
                        </div>
                    ) : (
                        <Button onClick={handleEditar} variant="primary">
                            Editar
                        </Button>
                    )}
                    {error && <Alert variant="danger">{error}</Alert>}
                </Form>
            ) : (
                <p>Cargando datos del tercero...</p>
            )}
        </div>
    );
}

export { TerceroDetalle };
