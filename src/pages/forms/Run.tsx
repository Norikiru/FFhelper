import { Container, Button, Row, Col } from "react-bootstrap"

async function run() {
    window.api.run()
}

export default function Run() {
    return (
        <Container className="Run border rounded shadow-sm p-3">
            <Row className="Run-Title">
                <Col className="d-flex justify-content-between align-items-center mb-2">
                    <h2> Start FFmpeg </h2>
                    <Button onClick={run} > Start </Button>
                </Col>
            </Row>
            <Row className="Run-Body">
                <Col>
                    <p className="fs-5 mb-2"> FFmpeg Logs </p>
                    <Container className="Console bg-light-subtle rounded shadow-sm d-inline-flex">
                        Welcome to FFhelper!
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}