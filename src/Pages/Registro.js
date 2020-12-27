import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Registro(){
    return(
        <>
        <legend><span class="balloon">!</span> Registro</legend>
        <main>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Nombre" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Apellido" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Email" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Telefono" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        </main>
        </>
    );
}

export default Registro;