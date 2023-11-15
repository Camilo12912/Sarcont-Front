
import { EliminarSucursalBoton } from "./EliminarSucursales.js"

const ListaSucursal=({sucursal, contador})=>{

    return (      
      <tr>
        <td>{contador}</td>
        <td>{sucursal.nombre}</td>
        <td><EliminarSucursalBoton id={sucursal.idSucursal}
                                       nombre={sucursal.nombre}
        /></td>
      </tr>
    );
}

export {ListaSucursal}