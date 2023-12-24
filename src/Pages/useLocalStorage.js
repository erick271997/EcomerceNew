import { useState } from "react";

export function useLocalStorage (key, initialValue){
 const [storedValue, setStoredValue]= useState(()=>{
    try{
       const item = JSON.parse(window.localStorage.getItem(key));
    return item ? item : initialValue;
    } catch(error){
        return initialValue;

    }
 });

const setvalue= value=>{
   try{
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
   }catch(error){
    console.error(error);
   }
} 

 return [storedValue, setvalue]
}