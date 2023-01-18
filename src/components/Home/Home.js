import React, { useState, useEffect } from 'react';
import { InputGroup, Form, Button, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './Home.css';

function Home() {

    const [name, setname] = useState("");
    const [Find, setFind] = useState("");
    const [Img, setImg] = useState("");
    const [Type, setType] = useState("");

    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        async function getData() {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
            console.log(res);
            setImg(res.data.sprites.front_default);
            setType(res.data.types[0].type.name);
        }

        getData();
    }, [Find]);

    const Typename = (event) => {
        setname(event.target.value);
    };

    const Search = () => {
        if (name !== "") setFind(name);
        setname("");
        setShowResults(true);
    };

    return (
        <div className='home'>
            <div className='poke-input'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter pokemon"
                        aria-label="Enter pokemon"
                        aria-describedby="basic-addon2"
                        type='text'
                        onChange={Typename}
                        value={name}
                    />
                    <Button variant="outline-secondary" id="button-addon2" className='search-btn' onClick={Search}>
                        Go!
                    </Button>
                </InputGroup>
            </div>

            {showResults ?
                <div className='poke-card'>
                    <div className='poke-image'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${Img}`} />
                        </Card>
                    </div>
                    <div className='poke-info'>    
                        <Card style={{ width: '18rem' }}>
                            <Card.Header className='name'>{Find.toUpperCase()}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='type'>Type: {Type}</ListGroup.Item>
                                <ListGroup.Item>Description:</ListGroup.Item>
                                <ListGroup.Item>Evolved from:</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>    
                </div>
                : <div></div>}
        </div>
    );
}

export default Home;