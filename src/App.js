import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App(){

  const[frase, obtenerFrase] = useState({}); 

  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //console.log(resultado.data[0]);

    // Agregar el resultado de la API al state; (similar a this.setState)
    obtenerFrase(resultado.data[0]);
  }

  // consulta a una Rest Api
useEffect(
  () => {
    consultarAPI();
  }
,[])

  console.log(frase);

  return <p>Hola</p>
} 

export default App;