import { Button, Card, Col, Container, Row } from "react-bootstrap"
import {useNavigate} from "react-router-dom"

export function Home() {
    const navigate = useNavigate();
    const uuid = crypto.randomUUID().split("-");

    const navigateToRoom = () => {
        navigate(`/r/?=${uuid[0]}`);
    }

    return (
        <Container>
            <Col className="d-flex justify-content-center">
            <Card style={{maxWidth: "800px"}}> 
                <Card.Body className="d-flex flex-column" style={{textAlign: "center"}}>
                    <Card.Img style={{height: "200px", width: "200px", alignItems: "center", margin: "auto"}}src="./public/806131.png">
                    </Card.Img>
                    <span className="fs-1 mb-2">Tic Tac Toe</span>
                    <span className="fs-3 text-muted mb-2">Challenge your friends to a game of Tic Tac Toe!</span>
                    <span className="ms-3 text-muted mb-4">To play a game, first create a room and then invite a friend using the generated URL</span>
                    <Button onClick={navigateToRoom} style={{backgroundColor: "dodgerblue"}}> Create a Room</Button>
                </Card.Body>
            </Card>
            </Col>
        </Container>
    )
}