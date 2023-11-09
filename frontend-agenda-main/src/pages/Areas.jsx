import React, {useState} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import AreaList from './../components/areas/List'
import CreateModal from './../components/areas/Modals/Create'


function Areas(){
    const [showAreaModal, setShowAreaModal] = useState(false)

    const closeModal = (user) => {
        setShowAreaModal(false)
    }
    return(
        <Container>
        <Row>
            <Col xs="12">
               <h1>Areas</h1>
            </Col>
        </Row>
        <Row>
            <Col xz="12" className='d-flex justify-content-end my-2'>
                <Button onClick={() => setShowAreaModal(true)}>
                Create
                </Button>
                <CreateModal show={showAreaModal} onClose={closeModal} />
            </Col>
            <Col xs="12">
                <AreaList />
            </Col>
        </Row>
    </Container>
    )
}

export default Areas