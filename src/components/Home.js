import axios from 'axios'
import useBeerSearch  from './useBeerSearch'
import Card from './Card'
import { useStateValue } from "./../StateProvider";

import React, {useState,useRef, useCallback} from 'react'


const Home=()=> {
  const [{ beers }, dispatch] = useStateValue();

    const [pageNumber, setPageNumber]=useState(1);
    const [query, setQuery] = useState('');
    // const [searchRes,addRes]=useState([]);
    const [noResult,setNoResult]=useState(false)
    
   
    const {
        
        hasMore,
        loading,
        error
      } = useBeerSearch( pageNumber)
    
      // [beers,setBeers]=useState([])
      const observer = useRef();


  const lastBeerElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
   
    setQuery(e.target.value)
    // console.log(query)
    setPageNumber(1)
  }
  const handleClick=()=> {
   
    axios({
      method: 'GET',
      url: 'https://api.punkapi.com/v2/beers?',
      params: { beer_name:query, page: pageNumber }
     
    }).then(res => {
      if(res.data.length===0){
setNoResult(true)
      }
      else{
        dispatch({
          type: "SET_QUERY",
          
         
        });
        dispatch({
          type: "ADD_SEARCH_RES",
          item:res.data
         
        });
      }
        console.log(res.data)
     
    }).catch(()=>{
      // console.log("no result")
    })
  }
  
 
return (
    <div className="home container-fluid">
        
       
        <div className="search row mx-auto">
      <input className="input col-8 col-md-5 " placeholder="Search for beers" type="text" value={query} onChange={handleSearch}></input>
      <button className="btn btn-primary col-4 col-md-2" onClick={handleClick}>Search</button>
      </div>
      <div className="row">
      
       
      {
        !noResult?
      beers.map((Beer, index) => {
        if (beers.length === index + 1) {
          return (
          <div ref={lastBeerElementRef} key={Beer}   className="col-4" >

             <Card beer={Beer}/>
          </div>
          )
        } else {
          return (
             <div className=" col-lg-4 col-sm-6 col-xs-4">
               <Card beer={Beer}/>
           
          

          </div> 
          )
        }
      }):<div>no result</div>
    }
      
      </div>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    
    </div>
)
            }

export default Home

