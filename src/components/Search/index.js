import React, { useState, } from 'react';
import useAsyncHook from '../../hooks/giphyContext'
import './index.scss';

const Search = () => {
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [result, loading] = useAsyncHook(query);
  let index = 1;

  return (
    <div className="App">
      <h1>Giphy</h1>
      <form className="appForm"
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input type="text" onChange={e => setSearch(e.target.value)} />
        <input className="submit" type="submit" value="search" />
      </form>

      <div className="giphyItems">
        {loading === "true" &&
          result.map(item => {
            return <img src={item} key={index++} />
          })
        }
      </div>

    </div>
  );
}

export default Search
