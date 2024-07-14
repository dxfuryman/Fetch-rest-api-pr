import {useEffect, useState} from 'react';
import './App.css'
import Form from "./components/Form.jsx";

function App() {
const API_URL = 'https://jsonplaceholder.typicode.com/';
const[reqType, setReqType] = useState('users');
const[items,setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async() => {
            try {
                const response = await fetch(`${API_URL}${reqType}`);
                const data = await response.json();
                setItems(data);
                // console.log(data);

            }
            catch (err){
                console.log(err);
            }
        }
        fetchItems();
    }, [reqType]);


  return (
    <>
        <Form reqType={reqType} setReqType={setReqType}/>

    </>
  )
}

export default App
