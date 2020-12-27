import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productos(props){
    return(
        <>
        <Card>
            <Card.Body>
                <Card.Title>{props.productos.name}</Card.Title>
                <Card.Text>{props.productos.price}</Card.Text>
                <Link to={"/productos/"+props.productos.id}>
                    <Button variant="primary">Ver</Button>
                </Link>
            </Card.Body>
        </Card>
        </>
    );
}

export default Productos;