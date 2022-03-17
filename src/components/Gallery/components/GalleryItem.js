import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({id, source, title, thumbnail, technologies, link, docLink, description, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (<article key={id} className="projectContainer 6u 12u$(xsmall) work-item">
        {/* <HoverVideoPlayer
            videoSrc='../../../assets/videos/colorCrusher.mp4'
            pausedOverlay={
                <img
                    src={thumbnail}
                    alt='project'
                    style={{
                        width:'100%',
                        height:'100%',
                        objectFit:'cover'
                    }}
                />
            }
            loadingOverlay={
                <div className='loading-overlay'>
                    <div className='loading-spinner'/>
                </div>
            }
        /> */}
        <a
            className="image fit thumb"
            href={source}
            onClick={onClick}
        >
            <img src={thumbnail} alt='project'/>
        </a>

        <div className='docDiv'>
            <a
                href={link} target='_blank'
                id='liveButton'
                rel="noreferrer"
            ><span className="label">View Demo</span>
            </a>
        </div>

        <p>{technologies}</p>
        <p className='projectLink'>{title}</p>
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
//   caption: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default GalleryItem
