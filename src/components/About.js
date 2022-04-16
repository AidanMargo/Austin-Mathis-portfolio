import headshot from '../photos/Headshot.jpg'
import '../componentStyles/AboutStyle.css'


export default function About () {
  return (
    <div className='about'>
      <img src={headshot} alt='Headshot' className='headshot'/>
      <div className="bio">
        <p> I started photography after high school, buying my first camera at age 19, and had the realization that this
          was what I wanted to do for the rest of my life. Today, I'm a photographer, influencer, and videographer working out of
          the Dallas/Fort Worth Metroplex. </p>
        <p> As of late, I've been widening my horizons and stepping out of my comfort zone to create new, unique visual experiences. Whether that
          be on my little Canon Telemax or my Nixon z5, I couldn't be more excited to explore every way there is to take a picture. </p>
      </div>
    </div>
  )
}