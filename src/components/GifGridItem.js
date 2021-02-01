import React from 'react'

export const GifGridItem = ({img}) => {
   //console.log(url, title)
   // console.log(img.id);
   return (
     <div className="card animate__animated animate__fadeIn">
       <img src={img.url} alt={img.title} />
       <h5>{img.title}</h5>
     </div>
   );
}
