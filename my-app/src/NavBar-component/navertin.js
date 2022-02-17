
import {Navbar,Nav,FormControl,Form,Button} from 'react-bootstrap'
const Navertin = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Ecom 3,000</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="players">Cart</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navertin;
