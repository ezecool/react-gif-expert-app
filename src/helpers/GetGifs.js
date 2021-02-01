import {api_key, limite} from '../config'; 

// Esta funcion recibe la categoria y una promesa que resuelve a las imagenes obtenidas 
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limite}&api_key=${api_key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data ? data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized.url,
    };
  }) : [];
  return gifs;
};