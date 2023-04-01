import React from 'react'

const Search = ({handleSearchNote}) => {
  return (
   <div className='search'>
    <i class="fa-solid fa-magnifying-glass search-icons "></i>
    <input type='text' placeholder='Type To Search' onChange={(e)  => handleSearchNote(e.target.value)}></input>
   </div>
  )
}

export default Search