import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({id, source, thumbnail, link, caption, description, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (<article key={id} className="6u 12u$(xsmall) work-item">
        <a
        className="image fit thumb"
        href={source}
        onClick={onClick}
        >
        <img src={thumbnail} />
        </a>
        <a
            onClick={() => window.open(`${link}`)}
            className='projectLink'
            // style={{
            //     borderBottom:'none',
            //     cursor:'pointer',
            // }}
        >{caption}</a>
        {/* <h5>Live Site</h5> */}
        <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem
