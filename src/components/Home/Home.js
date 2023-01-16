import { InputGroup, Form, Button, Card, ListGroup } from 'react-bootstrap';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='poke-input'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter pokemon"
                        aria-label="Enter pokemon"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" className='search-btn'>
                        Go!
                    </Button>
                </InputGroup>
            </div>

        {/* This will need to be mapped once the api is added */}
            <div className='poke-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Pokemon Name</Card.Title>
                        <Card.Text>
                            Poke Info: Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    );
}

export default Home;