import { useParams } from "react-router-dom";
import * as Const from "../Constants.jsx";
import Card from 'react-bootstrap/Card';

import { useState, useEffect } from "react";

export const UserInfo = () =>
{
    const [descWord,setDescWord] = useState();
    const {weng} = useParams();
    
    useEffect(() => {
        async function getData()
        {
            const res = await fetch(Const.API_DICT_URL+ weng,  {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
            });
            const dataWord = await res.json();
            //console.log(dataWord[0].);
            setListWords(dataWord.map(word => 
                /*
                res = await fetch(Const.API_DICT_URL+word.weng);
                const dataWord = await res.json();*/
                //const show = word.weng + " " + dataWord[0].meanings[1].definitions[0].definition;
                <div key={word.id}>
                <Link to={`/${word.weng}`}>
                  <ListGroup.Item >{word.weng}</ListGroup.Item>
                </Link>
                </div>
              ));
            //const show = weng + " " + dataWord[0].meanings[1].definitions[0].definition;
        }
        getData();
    });
    return (
        <Card>
        <Card.Body>
            <Card.Title>{descWord.word}</Card.Title>
            <Card.Subtitle>type</Card.Subtitle>
            <Card.Text>text desc</Card.Text>
        </Card.Body>
        </Card>
    );
}
