const API_KEY="df08ca0dbaa214bf970ae0e054c49492";
const BASE_URL="https://api.themoviedb.org/3";

export const getURLmovies= async()=>{
const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
const data= await response.json();
console.log(data);
}