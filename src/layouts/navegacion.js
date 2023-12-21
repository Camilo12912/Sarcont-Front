import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/img/sarcontNav.png";
import { BsHouse, BsTools, BsBarChartLine, BsCalendar2Range, BsPersonRolodex} from "react-icons/bs";
import { MdReport } from "react-icons/md";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { cerrarSesion } from '../connections/usuarioAcciones';

function Navegacion({ }) {
  const conectado=useSelector(estado=>estado.conectado);
  const usuario=useSelector(estado=>estado.usuario); 
  const dispatch= useDispatch();
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" style={{backgroundColor:"rgb(20, 89, 2)"}}>
          <Container fluid>
            <Navbar.Brand as={Link} to="#">
              <img src={logo} alt="Logo" style={{ width: '8rem' }} className="d-inline-block" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-auto" style={{  border: '1px solid white'}} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{ backgroundColor: "rgb(20, 89, 2)", width: '250px' }}  // Ajusta el ancho según tus necesidades
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column text-white justify-content-end flex-grow-1 pe-3">
                {conectado ? (
                <>
                <div className="d-flex align-items-center justify-content-center">
                  <Navbar.Brand as={Link} to="#" className="mb-3">
                    <img src={logo} alt="Logo" style={{ width: '8rem' }} className="me-2" />
                  </Navbar.Brand>
                  </div>

                <Nav.Link as={NavLink} to="/Sucursales" className='mb-2' style={{ fontSize: '18px' }}><BsHouse />  Home</Nav.Link>

                <NavDropdown className='mb-2' style={{ fontSize: '18px' }} title={<span><BsTools /> Herramientas</span> } id={`offcanvasNavbarDropdown-expand-${expand}`}>
                <NavDropdown.Item as={NavLink} to="/Sucursales">Sucursales</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Clientes">Terceros</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Articulos">Articulos</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Bancos">Bancos</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/RegistrarGContables">Grupos Contables</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/Puc">Plan Unico De Cuentas</NavDropdown.Item>
              </NavDropdown>
                    <NavDropdown className='mb-2' style={{ fontSize: '18px' }} title={<span><MdReport /> Reportes</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Informe Auxiliar</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Informe Diario</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mb-2' style={{ fontSize: '18px' }} title={<span><BsBarChartLine /> Ventas</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Ventas Pos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Ventas Electronicas</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarBanco">Ingresos Varios</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarGContables">Informe De Ventas Diarias</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/Puc">Lista De Articulos Vendidos</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mb-2' style={{ fontSize: '18px' }} title={<span><BsCalendar2Range /> Recaudos</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Abonos / Anticipos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Informe Abonos / Anticipos</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mb-3' style={{ fontSize: '18px' }} title={<span><BsPersonRolodex  /> Nomina</span>} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Empleados</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Contratos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarBanco">Novedades</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarGContables">Nomina</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/Puc">Liquidacion</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/SeguridadSocial">Seguridad Social</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/TiraPago">Tira de Pago</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/CertificadoLaboral">Certificado Laboral</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className="text-bg-danger" style={{borderRadius:'5px', maxWidth:'8rem', textAlign:'center'}} as={NavLink} to={"/"} onClick={() => dispatch(cerrarSesion())}>Cerrar sesión</Nav.Link>
                    </>
                  ) : (
                    <>
                    <Nav.Link as={NavLink} style={{ fontSize: '18px' }} to="/">
                      Iniciar sesión
                    </Nav.Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export { Navegacion }
//   const expand = 'xxl';

//   return (
//     <Navbar key={expand} expand={expand} className="navegacion">
      
//       <Container className='contNav'>
//       <Navbar.Brand as={Link} to={"#"} >
          // <img
          //   src={logo}
          //   alt="Logo"
          //   className="d-inline-block "

          // />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="contLink">
//           {loggedIn ? (
//               <>
                // <Nav.Link as={NavLink} to={"/CrearRecordatorio"}>Home</Nav.Link>
                // <Nav.Link as={NavLink} to={"/RegistrarAlumno"}>Terceros</Nav.Link>
                // <Nav.Link as={NavLink} to={"/"}>Articulos</Nav.Link>
                // <Nav.Link as={NavLink} to={"/PanelCorreo"}>Correos Masivos</Nav.Link>
                //   <Nav.Link className="text-bg-danger" style={{borderRadius:'5px'}} as={NavLink} to={"/"} onClick={onSignOut}>Cerrar sesión</Nav.Link>
//               </>
//             ) : (
//               <>

//                 <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
//                 {/* <Nav.Link as={NavLink} to={"/nosotros"}>Nosotros</Nav.Link>
//                 <Nav.Link as={NavLink} to={"/mision"}>Misión</Nav.Link>
//                 <Nav.Link as={NavLink} to={"/galeria"}>Galería</Nav.Link>
//                 <Nav.Link as={NavLink} to={"/login"}>Login</Nav.Link> */}
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

