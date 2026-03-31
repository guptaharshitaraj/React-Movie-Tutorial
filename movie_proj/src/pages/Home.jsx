import React, { useState } from 'react'
import MovieCard from '../components/MovieCard' 
import '../css/Home.css'
const Home = () => {

const [searchQuery,setsearchQuery]=useState("");
    const movies=[{
      id:1,title:"Shawshank Redemption",release_date:1994
    },{
      id:2,title:"Godfather",release_date:1972
    },{
      id:3,title:"Dark Knight",release_date:2008
    }];
    const handleSearch=(e)=>{
      e.preventDefault()
    // alert(searchQuery);
     setsearchQuery("");
    }
  return (
    <div className='Home'>
     <form onSubmit={handleSearch} className='search-form'>
     <input type="text" placeholder="Search movies..." value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
     <button type="submit">Search</button>
     </form>
      <div className='movies-grid'>
        {movies.map((movie)=>{
        return movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/> );


        })}
      </div>
    </div>
  )
}

export default Home
