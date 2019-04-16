import React from 'react'
import debounce from 'lodash.debounce'
import './Search.css'

const delay = 500

const Search = ({ fetchData, setSearchText }) => {
  const debounceOnSearch = debounce(setSearchText, delay)
  const handlerOnSearch = ({ target: { value } }) => debounceOnSearch(value)

  return (
    <div className="flickr__search-wrapper">
      <input
        className="flickr__input"
        onChange={handlerOnSearch}
        placeholder="Photos..."
      />
      <button onClick={fetchData} className="flickr__button">
        Search
      </button>
    </div>
  )
}

export default Search
