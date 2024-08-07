import { Nav, Navbar, Container, Button, Modal } from "react-bootstrap";
import logo from "../../assets/logoRecetas1.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "../pages/usuario/Login";
import { useState } from "react";

const Menu = ({
  usuarioLogueado,
  setUsuarioLogueado,
  handleCloseLoginModal,
  handleShowLoginModal,
  showLoginModal,
}) => {
  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("usuarioRollingRecetas");
    setUsuarioLogueado("");
    navegacion("/");
  };

  return (
    <>
      <Navbar expand="lg" className="shadow nav menu position-fixed z-3 w-100">
        <Container>
          <Navbar.Brand href="#" className="me-auto" as={Link} to="/">
            <img src={logo} alt="logo" className="img-fluid" width={130} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {usuarioLogueado !== "" ? (
                <>
                  {usuarioLogueado.rol === "admin" && (
                    <Navbar.Collapse id="navbar-dark-example">
                      <Nav>
                        <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="Administrador"
                          menuVariant="dark"
                        >
                          <NavLink
                            end
                            className="nav-link text-white "
                            to="/administrador/recetas"
                          >
                            Recetas
                          </NavLink>
                          <NavLink
                            end
                            className="nav-link text-white"
                            to="/administrador/usuarios"
                          >
                            Usuarios
                          </NavLink>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  )}
                  <Button
                    className="nav-link text-start cta"
                    variant="link"
                    onClick={logout}
                  >
                    <span className="hover-underline-animation lead border border-2 border-dark rounded p-2">
                      Cerrar sesión
                    </span>
                  </Button>
                </>
              ) : (
                <>
                  <NavLink end className="nav-link cta" to="/registro">
                    <span className="hover-underline-animation lead ">Registro</span>
                  </NavLink>
                  <NavLink
                    end
                    className="nav-link cta"
                    onClick={handleShowLoginModal}
                  >
                    <span className="hover-underline-animation lead border border-2 border-dark rounded p-2">
                      Iniciar sesión
                    </span>
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login
        show={showLoginModal}
        onHide={handleCloseLoginModal}
        setUsuarioLogueado={setUsuarioLogueado}
      />
    </>
  );
};

export default Menu;
