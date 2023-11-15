import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, FloatingLabel, InputGroup } from 'react-bootstrap';

const AlumnoFormulario = ({ show, handleClose, onAlumnoSubmit }) => {
  const [tipo, setTipo] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [colegio, setColegio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [carrera, setCarrera] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [tipoTercero, settipoTercero] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [NombreTributario, setNombreTributario] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tipo || !nombre || !apellido || !email || !colegio || !cedula || !direccion) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const alumnoData = {
      tipo,
      cedula,
      nombre,
      apellido,
      email,
      colegio,
      direccion,
      carrera,
      telefono,
      nacionalidad,
      tipoTercero,
      NombreTributario
    };

    onAlumnoSubmit(alumnoData);

    // Limpiar los campos del formulario después de enviar
    setTipo('');
    setCedula('');
    setNombre('');
    setApellido('');
    setEmail('');
    setColegio('');
    setDireccion('');
    setCarrera('');
    setTelefono('');
    setNacionalidad('');
    settipoTercero('');
    setObservaciones('');
    setNombreTributario('');

    // Cerrar el modal después de enviar el formulario
    handleClose();
  };

  return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Tercero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="tipo" label="Tipo">
                  <Form.Select
                    aria-label="Tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cédula de Extranjería</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="cedula" label="Cédula">
                  <Form.Control
                    type="text"
                    placeholder="Número de cédula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="nombre" label="Nombre">
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="apellido" label="Apellido">
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="NombreTributario" label="Nombre Tributario">
                  <Form.Control
                    type="text"
                    placeholder="Nombre Tributario"
                    value={NombreTributario}
                    onChange={(e) => setNombreTributario(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="email" label="Email">
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="ciudad" label="Ciudad">
                  <Form.Control
                    type="text"
                    placeholder="Nombre de la ciudad"
                    value={colegio}
                    onChange={(e) => setColegio(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="direccion" label="Dirección">
                  <Form.Control
                    type="text"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="tipoTercero" label="Tipo de Tercero">
                <Form.Select
                    aria-label="Tipo"
                    value={tipoTercero}
                    onChange={(e) => settipoTercero(e.target.value)}
                  >
                    <option value="Cliente">Cliente</option>
                    <option value="Proveedor">Proveedor</option>
                    <option value="Empleado">Empleado</option>
                    <option value="Cobrador">Cobrador</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel >
                  <InputGroup hasValidation>
                    <InputGroup.Text id="telefono">+57</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Número de teléfono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </InputGroup>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="nacionalidad" label="Nacionalidad">
                  <Form.Control
                    type="text"
                    placeholder="Nacionalidad"
                    value={nacionalidad}
                    onChange={(e) => setNacionalidad(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="observaciones" label="Observaciones">
                  <Form.Control
                    as="textarea"
                    placeholder="Observaciones"
                    style={{ height: '100px' }}
                    value={observaciones}
                    onChange={(e) => setObservaciones(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="text-center">
            <Button variant="primary" onClick={handleSubmit} style={{marginTop:"10px"}}>
                REGISTRAR ALUMNO
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
  );
};

export { AlumnoFormulario };
