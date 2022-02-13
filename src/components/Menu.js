import '../componentStyles/MenuStyle.css'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Menu(menuActive) {

  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl = useRef()

  useEffect(() => {
    tl.current = gsap.timeline()
    .fromTo('.menu-overlay', {
      x: -250,
    },
    {
      x:0,
      duration: 0.5,
      ease: 'power4.in-out'
    })
    .from(q('.link'), 
    {
      x: -250,
      opacity: 0.2,
      duration: 0.75,
      ease: 'power4.in-out',
      stagger: 0.15,
    })
  }, [q])

 return (
   <div className='menu-overlay'>

      <ul className="nav-links" ref={el}>
        <li className='link'><a href='/'>Home</a></li>
        <li className='link'><a href='/about'>About</a></li>
        <li className='link'><a href='/services'>Services</a></li>
        <li className='link'><a href='/contact'>Contact</a></li>
      </ul>

      <ul className='social-links'>
        <li><a href='https://www.instagram.com/aus10_mathis/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
        {/* <li><i className="fa-brands fa-twitter"></i></li>
        <li><i className="fa-brands fa-facebook"></i></li> */}
      </ul>
      
   </div>
 ) 
}