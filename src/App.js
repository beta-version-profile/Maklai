import React, { useState } from 'react'
import Loading from 'react-loading'

import Photos from './components/Photos'
import Search from './components/Search'
import MorePhotos from './components/MorePhotos'

import './App.css'

const FLICKR_API = `${process.env.REACT_APP_API}/?api_key=${
  process.env.REACT_APP_KEY
}&format=rest&format=json&nojsoncallback=1`

const getImageUrl = image =>
  `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${
    image.secret
  }.jpg`

const App = () => {
  const [searchText, setSearchText] = useState(null)
  const [photos, setPhotos] = useState(null)
  const [currentPage, setPage] = useState(null)
  const [lastPage, setLastPage] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async (skip = 1) => {
    if (!searchText) return
    setLoading(true)
    try {
      const data = await fetch(
        `${FLICKR_API}&method=flickr.photos.search&text=${searchText}&per_page=10&page=${skip}`
      )
      const {
        photos: { photo, page, pages }
      } = await data.json()

      setPage(page)
      setLastPage(pages)
      if (page > 1) {
        setPhotos([...photos, ...photo])
      } else {
        setPhotos(photo)
      }
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }
  const isShowButton = currentPage && currentPage < lastPage
  if (loading)
    return (
      <Loading
        type="spinningBubbles"
        color="#000"
        height={'20%'}
        width={'20%'}
        className="loading"
      />
    )
  return (
    <div className="App">
      <header className="App-header">
        <Search setSearchText={setSearchText} fetchData={fetchData} />
      </header>
      <Photos getImageUrl={getImageUrl} data={photos} />
      {isShowButton && (
        <MorePhotos onClick={() => fetchData(currentPage + 1)} />
      )}
    </div>
  )
}

export default App
