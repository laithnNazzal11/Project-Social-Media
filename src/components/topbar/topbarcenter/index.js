import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Index() {
  return (
    <div className="searchbar">
      <SearchIcon className="searchIcon" />
      <input className="searchInput" placeholder="Search for frindes,post or video"></input>
    </div>

  )
}
