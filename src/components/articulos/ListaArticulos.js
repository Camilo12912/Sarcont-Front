// import moment from "moment"

import { EditarArticulo } from "../../pages/Articulos/EditarArticulos"
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
        <td className="botones-td">
          <EliminarArticuloBoton id={articulo.idArticulo}
                                  nombre={articulo.nombre}
        />
          <EditarArticulo id={articulo.idArticulo} /></td>
      </tr>
    )
}

export { ArticuloTable }