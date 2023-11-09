import React, { useState } from "react";
import {Button, Form, Modal, Alert} from 'react-bootstrap'
import createArea from './../../../services/areas/create'

function Create({show, onClose}){
    const [showAlert, setShowAlert] = useState(false)
    const [area, setArea] = useState({
        code: '',
        name: '',
        observations:'',
        status: 'true',
    })

    const handleClose = () => {
        onClose(area)
    }

    const handleSubmit = async () =>{
        try {
            const response = await createArea(area)
            console.log(response)
            setShowAlert(true)
            setArea({
                code:'',
                name:'',
                observations:'',
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

        setArea((storedArea)=> {
            return{
                ...storedArea,
                [name]: value
            }
        })
    }

    const handleChangeCheckBox = (event) => {
        const {name, checked } = event.target
        
        setArea({...area, [name]: checked})
    }
        return(
            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add new Area
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder='Area code' name="code" onChange = {handleChange} value = {area.code}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Area name' name="name" onChange = {handleChange} value = {area.name}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>observations</Form.Label>
                            <Form.Control type="text" placeholder='Observations area' name="observations" onChange = {handleChange} value = {area.observations}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type='checkbox' name='status' label = "Activo" onChange= {handleChangeCheckBox} checked = {area.status}/>
                        </Form.Group>
                    </Form>
                    {showAlert && <Alert variant='success'>
                        Area created
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