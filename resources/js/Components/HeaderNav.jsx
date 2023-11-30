import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function HeaderNav()
{
    return(
      <>
          <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                  <Navbar.Brand href="/"><Image src={"./img/Subway-logo.png"} height={80} width={120}>
                  </Image></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">

                          <Nav.Link href={route('dashboard')} active={route().current('dashboard')}>Dashboard</Nav.Link>
                          <Nav.Link href="#planning">Planning</Nav.Link>
                          <Nav.Link href="#link">Link</Nav.Link>
                          <NavDropdown title="Account" id="basic-nav-dropdown">
                              {/* If not authenticated, login */}
                              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                              {/* If authenticated,login */}
                              <NavDropdown.Item href="#action/3.2">
                                  Logout
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">
                                  Separated link
                              </NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </>
    );
}
