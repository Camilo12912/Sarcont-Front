import { AlumnoFormulario } from "./AlumnoFormulario.js";
import { Container, Row, Col, Form, Button, Card, Table } from 'react-bootstrap';
import DetallesAlumnoModal from './AlumnoDetalle.js';
import { useState } from 'react';


function RegistrarAlumno({alumnos, setAlumnos}) {


        (function(document) {
            'use strict';
        
            var LightTableFilter = (function(Arr) {
        
                var _input;
        
                function _onInputEvent(e) {
                    _input = e.target;
                    var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
                    Arr.forEach.call(tables, function(table) {
                        Arr.forEach.call(table.tBodies, function(tbody) {
                            Arr.forEach.call(tbody.rows, _filter);
                        });
                    });
                }
        
                function _filter(row) {
                    var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
                    row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
                }
        
                return {
                    init: function() {
                        var inputs = document.getElementsByClassName('light-table-filter');
                        Arr.forEach.call(inputs, function(input) {
                            input.oninput = _onInputEvent;
                        });
                    }
                };
            })(Array.prototype);
        
            document.addEventListener('readystatechange', function() {
                if (document.readyState === 'complete') {
                    LightTableFilter.init();
                }
            });
        
        })(document);



        const [showModal1, setShowModal1] = useState(false);
        const [showModal2, setShowModal2] = useState(false);
        const [showModal, setShowModal] = useState(false);



            const handleAlumnoSubmit = (alumnosData) => {
            setAlumnos([...alumnos, alumnosData]);
            };

            const handleShow = () => setShowModal(true);
            const handleClose = () => setShowModal(false);

            const handleOpenModal1 = () => {
            setShowModal1(true);
            };
        
            const handleCloseModal1 = () => {
            setShowModal1(false);
            };

            const handleOpenModal2 = () => {
            setShowModal2(true);
            };
        
            const handleCloseModal2 = () => {
            setShowModal2(false);
            };

            return (
                    <section className="listaAlumno" id="listaAlumno">
                    <Container fluid style={{maxWidth:'80rem'}}>
                    <Row>
                    <Form className="mb-3">
                        <Row className="buscar">
                        <Col xs={12} sm={7} md={9} lg={10}  className="d-flex justify-content-end">
                            <Form.Group className="ml-1">
                            <input
                                type="search"
                                className="light-table-filter mb-3"
                                data-table="order-table"
                                placeholder="Buscar..."
                                style={{
                                minWidth: '200px',
                                height: '2.2rem',
                                margin: '0 auto',
                                borderRadius: '8px',
                                }}
                            />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={2} xl={2}>
                            <Button className="bg-success float-end"  onClick={handleShow}>
                            Registrar Tercero +
                            </Button>
                            <AlumnoFormulario show={showModal} handleClose={handleClose} onAlumnoSubmit={handleAlumnoSubmit}/>
                        </Col>
                        </Row>
                    </Form>
            
                    <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <div className="table-responsive" style={{ minWidth: '80rem' }}>
                            <table className="table table-striped table-bordered table-hover order-table table-success">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>Documento</th>
                                        <th style={{ textAlign: 'center' }}>Nombre</th>
                                        <th style={{ textAlign: 'center' }}>Apellido</th>
                                        <th style={{ textAlign: 'center' }}>Correo</th>
                                        <th style={{ textAlign: 'center' }}>Tipo Tercero</th>
                                        <th style={{ textAlign: 'center' }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alumnos.map((alumno) => (
                                        <tr key={alumno.id}>
                                            <td>{alumno.cedula}</td>
                                            <td>{alumno.nombre}</td>
                                            <td>{alumno.apellido}</td>
                                            <td>{alumno.email}</td>
                                            <td>{alumno.tipoTercero}</td>
                                            <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Button onClick={() => handleOpenModal2(alumno)} className="btn btn-secondary me-4" style={{ border: 'none' }}>
                                                    Detalle
                                                </Button>
                                            </td>
                                            <DetallesAlumnoModal show={showModal2} handleClose={handleCloseModal2} alumno={alumno} />
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                    </Row>
                    </Container>
                </section>
            );
        };
    
        export {  RegistrarAlumno };
    