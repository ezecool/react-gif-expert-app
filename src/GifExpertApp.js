
import { React, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['batman']);

/*     const handleAdd = () => {
        //console.log(categories);
        setCategories([...categories, 'Muebles']);
    }; */


    // Esto es lo que renderiza el componente
    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />

        <ol>
          {categories.map( (category) => {
            return <GifGrid 
              key={category}
              category={category}>
            </GifGrid>
          })}
        </ol>
      </>
    );

}