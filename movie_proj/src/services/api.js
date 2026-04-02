const API_KEY="df08ca0dbaa214bf970ae0e054c49492";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularmovies= async()=>{
const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
const data= await response.json();
console.log(data);
return data.results;
};

export const searchURLmovies= async(query)=>{
const response= await fetch(`${BASE_URL}/movie/search?api_key=${API_KEY}&query=${query}`);
const data= await response.json();
console.log(data);
return data.results;
};