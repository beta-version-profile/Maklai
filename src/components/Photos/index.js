import React from 'react'
import './Photos.css'

const Photos = ({ data, getImageUrl }) => {
  return (
    <div className="flickr-photos">
      {data &&
        data.map(image => (
          <img
            className="flickr-image"
            key={image.id}
            alt="flickr"
            src={getImageUrl(image)}
          />
        ))}
    </div>
  )
}

export default Photos
