import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { ELIMINARARTICULO_DELETE_ENDPOINT, ELIMINARSUCURSAL_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";


function EliminarArticuloBoton({id, nombre}) {

    const navegar= useNavigate()

    const eliminar= async()=>{

        axios.delete(`${ELIMINARARTICULO_DELETE_ENDPOINT}/${id}`)
        .then(respuesta => {
            navegar('/Articulos')
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
            title: `¿Está seguro de eliminar el articulo ${nombre}?`,
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
                'el articulo ha sido eliminada',
                'success'
              )
            } else if (              
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelada',
                'el articulo sigue registrado',
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

export { EliminarArticuloBoton }