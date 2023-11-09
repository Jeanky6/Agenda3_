import React, { useState } from "react";
import {Button, Form, Modal, Alert} from 'react-bootstrap'
import createAgenda from './../../../services/agendas/create'

function Create({show, onClose}){
    const [ShowAlert, setShowAlert] = useState(false)
    const [agenda, setAgenda] = useState({
        date: '',
        hour_start: '',
        hour_end:'',
        user:'',
        place:'',
        status: 'true',
    })

    const handleClose = () => {
        onClose(agenda)
    }

    const handleSubmit = async () =>{
        try {
            const response = await createAgenda(agenda)
            console.log(response)
            //handleClose() Cierra ventana modal
            //location.reload() recarga la pagina 
            setShowAlert(true)
            setAgenda({
                date:'',
                hour_start:'',
                hour_end:'',
                user:'',
                place:'',
                status: 'true',
            })
            setTimeout(() =>{
                setShowAlert(false)
                location.reload()
            }, 2500);
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value } = event.target

        setAgenda((storedAgenda)=> {
            return{
                ...storedAgenda,
                [name]: value
            }
        })
    }

    const handleChangeCheckBox = (event) => {
        const {name, checked } = event.target
        
        setAgenda({...agenda, [name]: checked})
    }
        return(
            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add new Agenda
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" placeholder='Date' name="date" onChange = {handleChange} value = {agenda.date}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hour Start</Form.Label>
                            <Form.Control type="text" placeholder='Hour Start' name="hour_start" onChange = {handleChange} value = {agenda.hour_start}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hour End</Form.Label>
                            <Form.Control type="text" placeholder='Hour End' name="hour_end" onChange = {handleChange} value = {agenda.hour_end}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>User</Form.Label>
                            <Form.Control type="text" placeholder='User' name="user" onChange = {handleChange} value = {agenda.user}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Place</Form.Label>
                            <Form.Control type="text" placeholder='Place' name="place" onChange = {handleChange} value = {agenda.place}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type='checkbox' name='status' label = "Activo" onChange= {handleChangeCheckBox} checked = {agenda.status}/>
                        </Form.Group>
                    </Form>
                    {ShowAlert && <Alert variant='success'>
                        Agenda created
                    </Alert>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    

}

export default Create 