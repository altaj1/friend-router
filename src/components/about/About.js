import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const About = () => {
  const {friendId} = useParams();
  const [about, setAbout] = useState({});
  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>setAbout(data));
  },[]);
  //console.log(params)
    return (
    <div>
            <p>{friendId}</p>
            <p>{about.name}</p>
        <p></p>

    </div>
  )
}

export default About