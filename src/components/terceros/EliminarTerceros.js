import axios from "axios"
import { ELIMINARCLIENTE_DELETE_ENDPOINT} from "../../connections/helpers/endpoints"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";


function EliminarTerceroBoton({id}) {
   
    const navegar= useNavigate()

    const eliminar= async()=>{

        axios.delete(`${ELIMINARCLIENTE_DELETE_ENDPOINT}/${id}`)
        .then(respuesta =>{
            navegar('/Clientes')
        })
        .catch(err =>{
            console.error(err);
        })

    }
        const crearAlerta=() =>{

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: `¿Está seguro de eliminar el tercero?`,
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
                    'el tercero ha sido eliminado',
                    'success'
                  )
                } else if (              
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelada',
                    'el tercero sigue registrado :)',
                    'error'
                  )
                }
              })
        }

    return (

            <Button
                className="mi-delete-button" size="sm"
                onClick={crearAlerta}
            >
                <BsTrash3Fill/> Eliminar
            </Button>
        )
    }

export { EliminarTerceroBoton }