import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({id, source,title, thumbnail,technologies, link, docLink, caption, description, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (<article key={id} className="projectContainer 6u 12u$(xsmall) work-item">
        <a
            className="image fit thumb"
            href={source}
            onClick={onClick}
        >
            <img src={thumbnail} alt='project'/>
        </a>

        <a
            href={`${link}`} target='_blank'
            className='projectLink'
            rel="noreferrer"
        >{title}</a>

        <p style={{color: '#49bf9d'}}>{technologies}</p>
        <p className='descriptionText'>{description}</p>

        <div className='docDiv'>
            <p>~ view</p>
            <a
                href={docLink} target='_blank'
                id='docLink'
                className="icon fa-github"
                rel="noreferrer"
            ><span className="label">Github</span>
            </a>
            <p>docs ~</p>
        </div>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  docLink: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default GalleryItem
