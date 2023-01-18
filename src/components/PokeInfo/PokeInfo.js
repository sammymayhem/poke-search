import './PokeInfo.css';
import React, { useState, useEffect } from 'react';
import { InputGroup, Form, Button, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function PokeInfo() {

    const [name, setName] = useState("");
    const [Find, setFind] = useState("");
    const [Img, setImg] = useState("");
    const [Type, setType] = useState("");

    useEffect(() => {
        async function getData() {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${Find}`);
            console.log(res);
            setImg(res.data.sprites.front_default);
            setType(res.data.types[0].type.name);
        }

        getData();
    }, [Find]);

    const Typename = (event) => {
        setName(event.target.value);
    };

    const Search = () => {
        if (name !== "") setFind(name);
        setName("");
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

            {/* This will need to be mapped once the api is added */}
            <div className='poke-card'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${Img}`} />
                    <Card.Body>
                        <Card.Title className='name'>{Find.toUpperCase()}</Card.Title>
                        <Card.Text className='type'>
                            {Type}
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

export default PokeInfo;
