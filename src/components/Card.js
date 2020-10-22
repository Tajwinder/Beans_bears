import React from 'react'
import { useStateValue } from "./../StateProvider";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome,faSitemap, faRoute,faCalendarMinus,faCheckSquare,faEdit,faArrowCircleRight,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    const [{ }, dispatch] = useStateValue();

    const addToFavourite=(beer)=>{
        console.log(beer.name)
        dispatch({
          type: "FAVOURITE",
          item: beer
        });
          }
    return (
        <div className="col-md-12 col mx-auto ">
            <div class="card mb-3 py-4" style={{maxWidth: `540px`}}>
  <div className="row g-0">
    <div className="col-3 d-flex flex-wrap align-items-center">
      <img src={props.beer.image_url}  alt="..." style={{width:`100px`,height:`100px`,objectFit: 'contain'}}/>
    </div>
    <div className="col-8">

      <div className="card-body">
         <div onClick={()=>addToFavourite(props.beer)} style={{float:'right',cursor:'pointer'}}> <i class="fa fa-star"></i></div> 
     
    <h5 className="card-title">{props.beer.name}</h5>

    <p className="card-text">{props.beer.description.substring(0,100)+'...'}</p>
   
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Card
