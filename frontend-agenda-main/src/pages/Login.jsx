import React from 'react' 
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'

function Login(){
    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type='email' name='email' placeholder='your@email.com'></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type='password' name='password' placeholder='your password'></Form.Control>
                                </Form.Group>
                                <Button>Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Login