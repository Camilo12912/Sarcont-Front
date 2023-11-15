const API_URL="http://localhost:4000"

export const SIGNIN_POST_ENDPOINT = API_URL+"/usuario/login";
export const CREARUSUARIO_POST_ENDPOINT = API_URL+"/usuario";

export const CREARSUCURSAL_POST_ENDPOINT = API_URL+"/sucursales";
export const SUCURSALESCREADAS_GET_ENDPOINT = API_URL+"/sucursales";
export const SUCURSALESDETALLE_GET_ENDPOINT = API_URL+"/sucursales";
export const ACTUALIZARSUCURSAL_PUT_ENDPOINT = API_URL+"/sucursales";
export const ELIMINARSUCURSAL_DELETE_ENDPOINT = API_URL+"/sucursales";

export const CREARINSTITUCION_POST_ENDPOINT = API_URL+"/institucion";
export const INSTITUCIONESCREADAS_GET_ENDPOINT = API_URL+"/institucion";
export const INSTITUCIONDETALLE_GET_ENDPOINT = API_URL+"/institucion";
export const ACTUALIZARINSTITUCION_PUT_ENDPOINT = API_URL+"/institucion";
export const ELIMINARINSTITUCION_DELETE_ENDPOINT = API_URL+"/institucion";
export const BUSCARINSTITUCIONPORESPECIALIDAD_GET_ENDPOINT = API_URL+"/institucion/especialidad"

export const CREARCONVENIO_POST_ENDPOINT = API_URL+"/convenio";
export const CONVENIOSCREADOS_GET_ENDPOINT = API_URL+"/convenio";
export const CONVENIODETALLE_GET_ENDPOINT = API_URL+"/convenio";
export const ACTUALIZARCONVENIO_PUT_ENDPOINT = API_URL+"/convenio";
export const ELIMINARCONVENIO_DELETE_ENDPOINT = API_URL+"/convenio";
export const BUSCARCONVENIOPORINSTITUCION = API_URL+"/convenio/institucion";

export const CREARSUSCRIPCION_POST_ENDPOINT = API_URL+"/suscripcion";
export const SUSCRIPCIONESCREADAS_GET_ENDPOINT = API_URL+"/suscripcion";
export const SUSCRIPCIONDETALLE_GET_ENDPOINT = API_URL+"/suscripcion";
export const ACTUALIZARSUSCRIPCION_PUT_ENDPOINT = API_URL+"/suscripcion";
export const ELIMINARSUSCRIPCION_DELETE_ENDPOINT = API_URL+"/suscripcion";
export const BUSCARSUSCRIPCIONPORCONTRATO_GET_ENDPOINT =  API_URL+"/suscripcion/contrato";

export const CREARSUSCRIPTOR_POST_ENDPOINT = API_URL+"/suscriptor";
export const SUSCRIPTORESCREADAS_GET_ENDPOINT = API_URL+"/suscriptor";
export const SUSCRIPTORDETALLE_GET_ENDPOINT = API_URL+"/suscriptor";
export const ACTUALIZARSUSCRIPTOR_PUT_ENDPOINT = API_URL+"/suscriptor";
export const ELIMINARSUSCRIPTOR_DELETE_ENDPOINT = API_URL+"/suscriptor";

export const CREARCITA_POST_ENDPOINT = API_URL+"/cita";
export const CITASCREADAS_GET_ENDPOINT = API_URL+"/cita";
export const CITADETALLE_GET_ENDPOINT = API_URL+"/cita";
export const ACTUALIZARCITA_PUT_ENDPOINT = API_URL+"/cita";
export const ELIMINARCITA_DELETE_ENDPOINT = API_URL+"/cita";

export const CREARROL_POST_ENDPOINT = API_URL+"/rol";
export const ROLESCREADOS_GET_ENDPOINT = API_URL+"/rol";
export const ROLDETALLE_GET_ENDPOINT = API_URL+"/rol";
export const ACTUALIZARROL_PUT_ENDPOINT = API_URL+"/rol";
export const ELIMINARROL_DELETE_ENDPOINT = API_URL+"/rol";

export const USUARIOSCREADOS_GET_ENDPOINT = API_URL+"/usuario/rol";