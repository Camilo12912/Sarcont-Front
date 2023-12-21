// import moment from "moment"
// import { EliminarConvenioBoton } from "./EliminarConvenioBoton"
// import { EditarConvenio } from "../../pages/convenios/EditarConvenio"

import { EliminarArticuloBoton } from "./EliminarArticulos"

const ArticuloTable=({articulo})=>{
    return(
        <tr>
                  <td>{articulo.id}</td>
        <td>{articulo.sucursalNombre}</td>

        <td>{articulo.nombre}</td>
        <td>{articulo.tarifa}</td>
        <td>{articulo.pucClasificacion}</td>
        <td>{articulo.pucDenominacion}</td>
        {/* <td>{cliente.tipoTercero}</td> */}
        {/* <td>{moment(convenio.fechaRegistro).format('D[/]MM[/]YYYY')}</td> */}
        <td><EliminarArticuloBoton id={articulo.idArticulo}
                                       nombre={articulo.nombre}
        /></td>
          {/* <EditarConvenio id={convenio.idConvenio}
        /></td>         */} 
      </tr>
    )
}

export { ArticuloTable }