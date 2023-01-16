import { InputGroup, Form, Button } from 'react-bootstrap';
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
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default Home;