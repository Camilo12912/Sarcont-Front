// import moment from "moment"
// import { EliminarConvenioBoton } from "./EliminarConvenioBoton"
// import { EditarConvenio } from "../../pages/convenios/EditarConvenio"

import {EditarBanco} from "../../pages/Bancos/EditarBanco.js"
import { EliminarBancosBoton } from "./EliminarBancos.js"


const BancosTable=({bancos, contador})=>{
    
    return(
        <tr>
        <td>{contador}</td>
        <td>{bancos.codigoBanco}</td>
        <td>{bancos.nombre}</td>
        <td>{bancos.numeroCuenta}</td>
        {/* <td>{articulo.tarifa}</td>
        {/* <td>{cliente.nombreTributario}</td> */}
        {/* <td>{articulo.codigo}</td> */} 
        {/* <td>{cliente.tipoTercero}</td> */}
        {/* <td>{moment(convenio.fechaRegistro).format('D[/]MM[/]YYYY')}</td> */}
        <td className="botones-td">
          <EliminarBancosBoton id={bancos.idBanco}
        />
        <EditarBanco id={bancos.idBanco} /></td> 
        </tr>       
    )
}
export {BancosTable}