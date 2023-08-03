import React from 'react'
import S from './SearchInput.module.css'
import {MdSearch} from 'react-icons/md'

const SearchInput = () => {
  return (
    <div className={S.search}>
      <div className={S.searchIconDiv}>
        <MdSearch className={S.searchIcon}/>
      </div>
      <div className={S.searchInputDiv}>
        <input className={S.input} placeholder="Search"/>
      </div>
    </div>
  )
}

export default SearchInput