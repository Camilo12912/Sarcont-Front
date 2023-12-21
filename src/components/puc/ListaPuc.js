// import moment from "moment"
// import { EliminarConvenioBoton } from "./EliminarConvenioBoton"
// import { EditarConvenio } from "../../pages/convenios/EditarConvenio"

const PucTable=({puc})=>{
    console.log(puc)
    return(
        <tr>
        <td>{puc.id}</td>
        <td>{puc.codigo}</td>
        <td>{puc.denominacion}</td>
        <td>{puc.clasificacion}</td>
        {/* <td>{articulo.tarifa}</td>
        {/* <td>{cliente.nombreTributario}</td> */}
        {/* <td>{articulo.codigo}</td> */} 
        {/* <td>{cliente.tipoTercero}</td> */}
        {/* <td>{moment(convenio.fechaRegistro).format('D[/]MM[/]YYYY')}</td> */}
        {/* <td className="botones-td">
          <EliminarConvenioBoton id={convenio.idConvenio}
          />
          <EditarConvenio id={convenio.idConvenio}
        /></td>         */}
      </tr>
    )
}

export { PucTable }