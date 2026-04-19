import { createContext,useContext,useEffect } from "react";

const MovieContext=createContext();

export const usemovieContext=()=>useContext(MovieContext);

export const MovieProvider=({children})=>{
    
    return<MovieContext.Provider >
        {children}
    </MovieContext.Provider>
}