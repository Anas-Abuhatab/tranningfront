import React, { Component } from 'react';
import {Modal,
        Form,
        Button}from 'react-bootstrap'

class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.props.handleUpdate}>
                            <Form.Group className="mb-3" >
                                <Form.Label>edit name</Form.Label>
                                <Form.Control type="text" name="name"  defaultValue={this.props.name}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>edit img</Form.Label>
                                <Form.Control type="text" name="img"  defaultValue={this.props.img}/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                            
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        
                        
                    </Modal.Footer>
                </Modal>




            </div>
        )
    }
}

export default UpdateForm

