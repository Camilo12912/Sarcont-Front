import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { ELIMINARSUCURSAL_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";


function EliminarSucursalBoton({id, nombre}) {

    const navegar= useNavigate()

    const eliminar= async()=>{

        axios.delete(`${ELIMINARSUCURSAL_DELETE_ENDPOINT}/${id}`)
        .then(respuesta => {
            navegar('/Sucursales')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const crearAlerta= () =>{

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: `¿Está seguro de eliminar la sucursal ${nombre}?`,
            text: "No podrás revertir esto.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'No, Cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              eliminar();
              swalWithBootstrapButtons.fire(
                'Eliminado',
                'La sucursal ha sido eliminada',
                'success'
              )
            } else if (              
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelada',
                'La sucursal sigue registrada',
                'error'
              )
            }
          })    
    }

    return (

        <Button
            className="delete-button" size="sm"
            onClick={crearAlerta}
        >
            <BsTrash3Fill/>
        </Button>
    )
}

export { EliminarSucursalBoton }