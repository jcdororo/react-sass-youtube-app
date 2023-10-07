import React, { useContext } from 'react'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'
import useWindowSize from '../../../helpers/useWindowSize'
import { SearchContext } from '../../../context/SearchContext'
import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const { width } = useWindowSize();
  const { searchQuery, setSearchQuery, setShowSpecialSearchBar} = useContext(SearchContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      input: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(searchQuery.input !== '') {
      const response = await axios.get(
        `/search?part=snippet&maxResults=10&q=${searchQuery.input}`
      );
      
      setSearchQuery({
        ...searchQuery,
        videos: response.data.items
      });
      navigate(`/results/${searchQuery.input}`)
    }
  }

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch' : ''}`} >
      {width > 640 ? (<form onSubmit={handleSubmit}>
        <input value={searchQuery.input} onChange={handleChange} type='text' name='search' placeholder='Search'/>
        <button>
          <ImSearch size={20} />
        </button>
      </form>) : 
      <button
        className='icon-container searchIcon'
        onClick={() => setShowSpecialSearchBar(true)}
      >
        <ImSearch size={20} />
      </button>
      }
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} />
      </button>

    </div>
  )
}

export default SearchBar