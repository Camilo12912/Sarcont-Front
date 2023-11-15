import { RegistrarAlumno } from '../components/ListaAlumnos.js';

function RegistrarTercero({alumnos, setAlumnos }) {



  // const handleAlumnoSubmit = (alumnosData) => {
  //   setAlumnos([...alumnos, alumnosData]);
  // };

  // const [showModal, setShowModal] = useState(false);

  // const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);

  return (


    <div className="Proyecto-form" style={{marginTop:'70px', marginBottom:'150px'}}>

            <h1 className='TittleComponent' style={{marginBottom:'3rem'}}>Terceros</h1>

            <RegistrarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />
    </div>  
  );
}

export {RegistrarTercero};

