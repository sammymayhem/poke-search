import './Items.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { InputGroup, Form, Button, Card, ListGroup } from 'react-bootstrap';

function Items() {
    const [name, setname] = useState("");
    const [Find, setFind] = useState("");
    const [Descrip, setDescrip] = useState("");
    const [Type, setType] = useState("");
    const [Cost, setCost] = useState("");
    const [ItemType, setItemType] = useState("");
    const [Img, setImg] = useState("");
    const [ItemEffect, setItemEffect] = useState("");

    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        async function getData() {
            let res = await axios.get(`https://pokeapi.co/api/v2/item/${Find}`);
            console.log(res);
            setImg(res.data.sprites.default);
            setType(res.data.category.name);
            setDescrip(res.data.flavor_text_entries[2].text);
            setCost(res.data.cost);
            setItemType(res.data.attributes[1].name);
            setItemEffect(res.data.effect_entries[0].short_effect);
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
        <div className='items'>
            <div className='items-input'>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter an item name"
                        aria-label="Enter item"
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
                <div className='items-card'>
                    <div className='items-image'>
                        <Card className='h-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${Img}`} />
                        </Card>
                    </div>
                    <div className='items-info'>
                        <Card className='h-100' style={{ width: '18rem' }}>
                            <Card.Header className='items-name'>{Find.toUpperCase()}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='items-type'>Item Type: {Type} / {ItemType}</ListGroup.Item>
                                <ListGroup.Item className='items-effect'>Item Effect: {ItemEffect}</ListGroup.Item>
                                <ListGroup.Item className='items-cost'>Cost: {Cost}</ListGroup.Item>
                                <ListGroup.Item className='items-desc'>Description: {Descrip}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
                : <div></div>}
        </div>
    );
}

export default Items;
