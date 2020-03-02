import React, { useState, useEffect } from 'react'

 // defines the query constants
const api_key = process.env.REACT_APP_API_KEY
const limit = 25
const rating = 'G'

const useAsyncHook = query  => {
  // defines the application state
  const [result, setResult] = useState([]);
  const [loading, setLoading] = React.useState("false");

  console.log(query)
  useEffect(() => {
    // Gets the Giphy elements
    async function fetchGiphy() {
      try {
        setLoading("true");
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=${limit}&offset=0&rating=${rating}&lang=en`)
        const json = await response.json();

        setResult(
          json.data.map(item => {
            // console.log('title', item.images.original);
            return item.images.fixed_height_small.url;
          }))

      } catch (err) {
        console.error(err)
      }
    }

    if (query !== "") {
      fetchGiphy();
    }

  }, [query])

  return [result, loading];

}

export default useAsyncHook
