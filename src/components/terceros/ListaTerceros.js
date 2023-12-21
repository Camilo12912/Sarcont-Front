import { Badge, Button, Container, Modal } from "react-bootstrap"
// import { SuscripcionDetalle } from "../../pages/suscripciones/SuscripcionDetalle";
// import { EliminarSuscripcionBoton } from "./EliminarSuscripcionBoton";
// import { EditarSuscripcion } from "../../pages/suscripciones/EditarSuscripcion";
import React, { useState } from 'react';
import { TerceroDetalle } from "../../pages/Terceros/TerceroDetalle";
import { EliminarTerceroBoton } from "./EliminarTerceros";

const TerceroTable=({cliente, contador})=>{

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

const handleShowModal = () => {
    setShowModal(true);
  };

    return(

      <>
        <tr key={cliente.id} onClick={handleShowModal}>
        <td>{cliente.sucursalNombre}</td>
        {/* <td>{cliente.nombreUsuario}</td> */}
        <td>{cliente.nombres}</td>
        <td>{cliente.apellidos}</td>
        {/* <td>{cliente.nombreTributario}</td> */}
        {/* <td>{cliente.tipo}</td> */}
        {/* <td>{cliente.tipoDocumento}</td> */}
        <td>{cliente.documento}</td>
        <td>{cliente.email}</td>
        {/* <td>{cliente.ciudad}</td>
        <td>{cliente.direccion}</td> */}
        <td>{cliente.telefono}</td>
        {/* <td>{cliente.tipoTercero}</td> */}
        {/* <td>{moment(convenio.fechaRegistro).format('D[/]MM[/]YYYY')}</td> */}
        {/* <td className="botones-td">
          <EliminarConvenioBoton id={convenio.idConvenio}
          />
          <EditarConvenio id={convenio.idConvenio}
        /></td>         */}
      </tr>
    
            <Container>        
            <Modal backdrop="static" size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Detalle de el Tercero</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <TerceroDetalle id={cliente.idCliente}/>
                </Modal.Body>
                <Modal.Footer className="botones-td">
                {/* <EditarSuscripcion id={suscripcion.idSuscripcion}/> */}
                <EliminarTerceroBoton id={cliente.idCliente}/>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    </>
    )
}

export { TerceroTable }