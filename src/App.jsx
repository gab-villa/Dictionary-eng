import * as Const from "./Constants.jsx";
import ListGroup from 'react-bootstrap/ListGroup';
import {useState,useEffect} from 'react';

function App() {
  const [listWords,setListWords] = useState();
  useEffect(() =>{
    async function getData(dataList)
    {
        const res = await fetch(Const.PATH_TO_WORDLIST, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        const data = await res.json();
        
        let i;
        setListWords(data.map(word => 
          /*
          res = await fetch(Const.API_DICT_URL+word.weng);
          const dataWord = await res.json();*/
          //const show = word.weng + " " + dataWord[0].meanings[1].definitions[0].definition;
          
          <ListGroup.Item>{word.weng}</ListGroup.Item>
        ));
        //console.log(data[0].word);
        //console.log(data[0].meanings[1].definitions[0].definition);
    }
    getData();
  });
  //console.log(listWords);
  return (
    <ListGroup>
      {listWords}
    </ListGroup>
  );
}

export default App
