import {Container, Nav, Navbar as NavbarBS} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBS className="border-bottom mb-3" style={{background: "#ffffff"}}>
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink} style={{display: "flex", alignItems: "center"}}>
                        <img style={{height: "25px", width: "25px", marginRight: "5px"}}src="./806131.png"></img>
                        <span style={{fontSize: "20px", color: "black"}}>Tic Tac Toe</span>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBS>
    )

}