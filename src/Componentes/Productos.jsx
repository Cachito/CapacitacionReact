import React, { useEffect, useState } from 'react';
import "../style.css";

export default function Productos(){

    // ejemplo de array / vector
    //let colores = ["rojo", "verde", "azul", "amarillo", "rosa", "naranja", "morado"];

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        fetch('https://api.mercadolibre.com/items/MLA841413632')
        .then(response => {
            return response.json();
        })
        .then(res => {
            setData(res);
            setLoading(false);
        })
    }, []);

    /*
    useEffect(() => {
        console.log(data);
    }, [data]);
    */

    if(loading){
        return <h1>Cargando</h1>
    }

    return (
        <div className='producto'>
            <hr />
            <h1>Productos de React</h1>
            <hr />

            <h2>{data.title}</h2>
            <img
                src={data.secure_thumbnail}
                alt='puto el que lee'
                style={{ width: "300px" }}
            />
            <p>Precio de amigo: ${data.price}</p>
            <h3>{data.warranty}</h3>
            <a target="...blank" href={data.permalink}>Comprá gil</a>
            <hr />
        </div>
    );
}