import React, { useState } from 'react';
import { Modal, Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';

const DetallesAlumnoModal = ({ alumno, show, handleClose }) => {
    const [tipo, setTipo] = useState(alumno.tipo || '');
    const [cedula, setCedula] = useState(alumno.cedula || '');
    const [nombre, setNombre] = useState(alumno.nombre || '');
    const [apellido, setApellido] = useState(alumno.apellido || '');
    const [email, setEmail] = useState(alumno.email || '');
    const [colegio, setColegio] = useState(alumno.colegio || '');
    const [direccion, setDireccion] = useState(alumno.direccion || '');
    const [carrera, setCarrera] = useState(alumno.carrera || '');
    const [telefono, setTelefono] = useState(alumno.telefono || '');
    const [nacionalidad, setNacionalidad] = useState(alumno.nacionalidad || '');
    const [modalidad, setModalidad] = useState(alumno.modalidad || '');
    const [observaciones, setObservaciones] = useState(alumno.observaciones || '');

    return (
        <Modal size="lg" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Detalles del Alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="tipo" label="Tipo">
                    <Form.Control type="text" value={tipo} readOnly />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="cedula" label="Cédula">
                    <Form.Control type="text" value={cedula} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="nombre" label="Nombre">
                    <Form.Control type="text" value={nombre} readOnly />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="apellido" label="Apellido">
                    <Form.Control type="text" value={apellido} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="email" label="Email">
                    <Form.Control type="email" value={email} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="colegio" label="Colegio">
                    <Form.Control type="text" value={colegio} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="direccion" label="Dirección">
                    <Form.Control type="text" value={direccion} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="carrera" label="Carrera">
                    <Form.Control type="text" value={carrera} readOnly />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="telefono" label="Teléfono">
                    <Form.Control type="text" value={telefono} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="nacionalidad" label="Nacionalidad">
                    <Form.Control type="text" value={nacionalidad} readOnly />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="modalidad" label="Modalidad">
                    <Form.Control type="text" value={modalidad} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <FloatingLabel controlId="observaciones" label="Observaciones">
                    <Form.Control as="textarea" style={{ height: '100px' }} value={observaciones} readOnly />
                </FloatingLabel>
                </Col>
            </Row>
            <div className="text-center">
            <Button variant="warning" onClick={handleClose} className="mt-1 me-5" >
                Editar
            </Button>
            <Button variant="danger" onClick={handleClose} className="mt-1 ">
                Eliminar
            </Button>

            </div>
            </Form>
        </Modal.Body>
        </Modal>
    );
    };

export default DetallesAlumnoModal;