import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function NavbarMenu() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand as={Link} to="/">🛒 MyStore</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/">Products</Nav.Link>

            {/* Cart Icon */}
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={22} />

              {/* Badge */}
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "2px 5px"
                }}
              >
                {cart.length}
              </span>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
