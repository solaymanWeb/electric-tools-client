import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    const [tools, setTools]=useState([])
    useEffect(()=>{
        fetch(`data.json/${id}`)
        .then(res => res.json())
        .then(data => setTools(tools))
        
    },[])
    console.log(tools)

    return (
        <section>
            
            <h1>Hello parchase {id}</h1>
        </section>
    );
};

export default Purchase;