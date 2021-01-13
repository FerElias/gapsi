import React, {useEffect, useState} from 'react'
import Candidato from './imagenes/943048.png'
import './Bienvenida.css'


export default function Bienvenida() {


  const [post, setPost] = useState([]);
  
  useEffect(() => {
    getVisitor();
  }, []);

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://node-red-nxdup.mybluemix.net/visitor"; 

  const getVisitor = async () => {
    const response = await fetch( url );

    const datos = await response.json();
    setPost(datos);
    console.log(datos);
  };

  return (
    <div className="bienvenida">
      <img src={Candidato}></img>
      <h5> {post.data}</h5>
      <button>Continuar</button>
    </div>
  )
}

