/* import axios from "axios"
import { SIGNIN_POST_ENDPOINT } from "./helpers/endpoints" */
import { setAutenticacionToken } from "./helpers/token"
import { usuario } from "../status/sliceReducers"
import { jwtDecode } from "jwt-decode"


export const autenticacion = (datos) =>dispatch=>{    

    return new Promise((resolve, reject) =>{

        /* axios.post(SIGNIN_POST_ENDPOINT, datos, {
            headers: {              
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
          }            
        ).then((respuesta) =>{ */        
            
            const authorization= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYW1pbG8xMjkiLCJleHAiOjE3MDA4NTYzNDQ5NzYsImlhdCI6MTY5OTk5MjM0NH0.lRfzhtNav72pOhk5VyQ_6nf_YzXe16AuHF9GtpveZPk"
        
            localStorage.setItem('token', authorization);    
            
            setAutenticacionToken(authorization);

            const decodificado= jwtDecode(authorization)

            dispatch(usuario({conectado:true, usuario:decodificado}))

            resolve(authorization)

        })/* .catch(err=>{
            reject(err)
        }) */
    }/* )
}
 */

export const cerrarSesion = () => dispatch => {
    
    localStorage.removeItem('token');

    setAutenticacionToken(false);

    dispatch(usuario({usuario:{}, conectado:false}));
}
