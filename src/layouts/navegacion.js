import { Link, NavLink } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/sarcontNav.png";
import { BsHouse } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
// function Navegacion({ loggedIn, onSignOut }) {

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navegacion({ loggedIn, onSignOut }) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" style={{backgroundColor:"rgb(20, 89, 2)"}}>
          <Container fluid>
            <Navbar.Brand as={Link} to="#">
              <img src={logo} alt="Logo" style={{ width: '8rem' }} className="d-inline-block" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="ms-auto" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{backgroundColor:"rgb(20, 89, 2)"}}
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column text-white">
                {loggedIn ? (
                <>
                <Nav.Link as={NavLink} to="/Sucursales"><BsHouse />  Home</Nav.Link>

                
                <NavDropdown  title="Herramientas" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/Sucursales">Sucursales</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarTercero">Terceros</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Articulos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarBanco">Bancos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarGContables">Grupos Contables</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/Puc">Plan Unico De Cuentas</NavDropdown.Item>
                     
                    </NavDropdown>
                  
                    <NavDropdown title="Reportes" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Informe Auxiliar</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Informe Diario</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Ventas" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Ventas Pos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Ventas Electronicas</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarBanco">Ingresos Varios</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarGContables">Informe De Ventas Diarias</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/Puc">Lista De Articulos Vendidos</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Recaudos" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Abonos / Anticipos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Informe Abonos / Anticipos</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Nómina" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                      <NavDropdown.Item as={NavLink} to="/RegistrarAlumno">Empleados</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarArticulo">Contratos</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarBanco">Novedades</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegistrarGContables">Nomina</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/Puc">Liquidacion</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/SeguridadSocial">Seguridad Social</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/TiraPago">Tira de Pago</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/CertificadoLaboral">Certificado Laboral</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className="text-bg-danger" style={{borderRadius:'5px'}} as={NavLink} to={"/"} onClick={onSignOut}>Cerrar sesión</Nav.Link>
                    </>
                  ) : (
                    <>
                    <Nav.Link as={NavLink} to="/">
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

