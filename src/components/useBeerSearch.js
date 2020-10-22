import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useStateValue } from "./../StateProvider";

function useBeerSearch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  // const [beers, setBeers] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [{ query }, dispatch] = useStateValue();

    useEffect(() => {
        console.log(pageNumber)
        if(query)
        return;
        axios({
            method: 'GET',
            url: 'https://api.punkapi.com/v2/beers?',
            params: {  page: pageNumber }
           
          }).then(res => {
              
            // setBeers([...beers, ...res.data])
            dispatch({
              type: "ADD_BEERS",
              item:res.data
             
            });
              setHasMore(res.data.length > 0)
              setLoading(false)
          })
        return () => {
            
        }
    }, [pageNumber])

    return { loading, error,  hasMore }
}

export default useBeerSearch
