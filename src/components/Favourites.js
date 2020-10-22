import React from 'react'
import { useStateValue } from "./../StateProvider";

function Favourites() {
    const [{ favourites }, dispatch] = useStateValue();
    const addToFavourite=(beer)=>{
        console.log(beer.name)
        dispatch({
          type: "FAVOURITE",
          item: beer,
        });
          }
    return (
        <div>
            favourites
           {
               favourites.map((Beer,index)=>(
                <div className="beer">
                <img src={Beer.image_url} alt=""  style={{height: 100+'px', width: 100+'px', objectFit: 'contain'}}/>  
                <div className="text">
                <div key={Beer}>{Beer.name}</div>
              <div>{Beer.description.substring(0,100)+'...'}</div>
              </div>   
              <button onClick={()=>addToFavourite(Beer)}>Add to favourite</button>
    
              </div> 
               )
                  
               )
           }
        </div>
    )
}

export default Favourites
