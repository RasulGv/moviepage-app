import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';



function TitleCards({title, category}) {

  const[apiData, setApiData]=useState([]);

  const cardsRef=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFkMWRlNWIzZmJjYjJiNWQ0M2YzMjMxYWIwOTE0NiIsIm5iZiI6MTcyMDI4MTU4Ni4zMzYyMywic3ViIjoiNjY3NDJlZDc5NTk4ZTg5NTFmNGViMjI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1LtWgqaSRnb7BLzGhAnvBAsXeKUiGfoyHoKT9a99ju4'
    }
  };
  
 
  const handleWheel=(event)=>{
    event.preventDefault(); 
    cardsRef.current.scrollLeft +=event.deltay;
  }
  useEffect(()=>{
    
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])
  

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards