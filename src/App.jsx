import * as Const from "./Constants.jsx";
import ListGroup from 'react-bootstrap/ListGroup';
import {useState,useEffect} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { UserInfo } from "./components/UserInfo.jsx";

export function App() {
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

        setListWords(data.slice(0,20).map(word => 
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
        //console.log(data[0].word);
        //console.log(data[0].meanings[1].definitions[0].definition);
    }
    getData();
  });
  //console.log(listWords);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListGroup>{listWords}</ListGroup>} />
        <Route path="/:weng" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
