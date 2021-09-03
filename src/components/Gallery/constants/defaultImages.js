import full01 from '../../../assets/images/fulls/01.jpg'
import full02 from '../../../assets/images/fulls/02.jpg'
import full03 from '../../../assets/images/fulls/03.jpg'

import thumb02 from '../../../assets/images/thumbs/02.jpg'
import thumb01 from '../../../assets/images/thumbs/01.jpg'
import thumb03 from '../../../assets/images/thumbs/03.jpg'

export const DEFAULT_IMAGES = [
    {
      id: '1',
      source: full01,
      thumbnail: thumb01,
      link: 'https:colorcrusher.herokuapp.com',
      title: 'Color Crusher',
      caption: `<a href='https:colorcrusher.herokuapp.com' target='blank' class='button siteLink'>Visit Color Crusher</a>`,
      technologies: 'React  +  React Contex API  +  Firebase  +  Passport.js.',
      description: '- CSS instructional game that helps developers recognize color values and choose color schemes.',
    },
    {
      id: '2',
      source: full02,
      thumbnail: thumb02,
      title: 'Custom Github Read-me',
      link: 'https://github.com/RobinScavo/color--crusher',
      caption: `<a href='https://github.com/RobinScavo/color--crusher' target='blank' class='button siteLink'>Visit Readme</a>`,
      technologies: 'SVG  +  Inline CSS.',
      description: "- Utilized SVG to bypass Github's removal of inline styling to create a unique Read-me.",
    },
    {
      id: '3',
      source: full03,
      thumbnail: thumb03,
      link: 'https://openbook-app.herokuapp.com/',
      title: 'Open Book',
      caption: `<a href='https://openbook-app.herokuapp.com/' target='blank' class='button siteLink'>Visit OpenBook</a>`,
      technologies: 'React  + Redux  +  Flask  +  SqlAlchemy  +  Heroku.',
      description: '- Group project for which I built the UI. It allows teachers to form online classrooms, create interactive lessons and view student progress.'
    },
    // {
    //   id: '4',
    //   source: full04,
    //   thumbnail: thumb04,
    //   link: '',
    //   caption: 'Photo 4',
    //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    // },
    // {
    //   id: '5',
    //   source: full05,
    //   thumbnail: thumb05,
    //   link: '',
    //   caption: 'Photo 5',
    //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    // },
    // {
    //   id: '6',
    //   source: full06,
    //   thumbnail: thumb06,
    //   link: '',
    //   caption: 'Photo 6',
    //   description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    // }
]
