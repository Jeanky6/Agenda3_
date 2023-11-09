import React, {useState} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import AgendaList from './../components/agendas/List'
import CreateModal from './../components/agendas/Modals/Create'


function Agendas(){
    const [showAgendaModal, setShowAgendaModal] = useState(false)

    const closeModal = (user) => {
        setShowAgendaModal(false)
    }
    return(
        <Container>
        <Row>
            <Col xs="12">
               <h1>Agendas</h1>
            </Col>
        </Row>
        <Row>
            <Col xz="12" className='d-flex justify-content-end my-2'>
                <Button onClick={() => setShowAgendaModal(true)}>
                Create
                </Button>
                <CreateModal show={showAgendaModal} onClose={closeModal} />
            </Col>
            <Col xs="12">
                <AgendaList />
            </Col>
        </Row>
    </Container>
    )
}

export default Agendas