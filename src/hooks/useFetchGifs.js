import { useState, useEffect } from "react";
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  
  // A este hook le pasamos como segundo argumento un arreglo de dependencias
  useEffect(() => {
    // Este hook llama al helper getGifts
    getGifs(category).then((imgs) => {
      // Cuando se cumple la promesa, seteamos el estado del componente
      console.log(imgs);
      setState({
         data: imgs,
         loading: false,
      });
    });
  }, [category]);

  return state;
};