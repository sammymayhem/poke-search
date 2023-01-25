import './Moves.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { InputGroup, Form, Button, Card, ListGroup } from 'react-bootstrap';

function Moves() {
    const [name, setname] = useState("");
    const [Find, setFind] = useState("");
    const [Power, setPower] = useState("");
    const [Type, setType] = useState("");
    const [Pp, setPp] = useState("");
    const [AttkType, setAttkType] = useState("");

    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        async function getData() {
            let res = await axios.get(`https://pokeapi.co/api/v2/move/${Find}`);
            console.log(res);
            setType(res.data.damage_class.name);
            setPower(res.data.power);
            setPp(res.data.pp);
            setAttkType(res.data.type.name);
        }

        getData();
    }, [Find]);

    const Typename = (event) => {
        setname(event.target.value);
    };

    const Search = () => {
        if (name !== "") setFind(name);
        setname("");
        setPower("");
        setPp("");
        setAttkType("");
        setType("");
        setShowResults(true);
    };

    return (
        <div className='move'>
            <div className='move-input'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter a move name"
                        aria-label="Enter move"
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
                <div className='move-card'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header className='move-name'>{Find.toUpperCase()}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className='move-type'>Move type: {Type} / {AttkType}</ListGroup.Item>
                            <ListGroup.Item className='move-power'>Power: {Power}</ListGroup.Item>
                            <ListGroup.Item className='move-pp'>PP: {Pp}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                : 
                <div className='pre-container'>
                    <div className='pre-search'>
                        <h2>Enter the name of a pokmon move to view it's stats!</h2>
                    </div>
                </div>}
        </div>
    );
}

export default Moves;
