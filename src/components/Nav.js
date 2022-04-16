import '../componentStyles/NavStyle.css'
import gsap from 'gsap'
import {useRef, useEffect} from 'react'

export default function Nav({menuActive, setMenuActive}) {

  const mobileScreen = window.matchMedia('(max-width: 376px)').matches === true
  const desktopScreen = window.matchMedia('(min-width: 376px)').matches === true

  const el = useRef()
  const q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.fromTo('.nav-header', {
      y: '-100%'
    }, {
      y: 0,
      duration: 0.5,
      ease: 'power4.in-out'
    })
  }, [])
  
  return (
    <nav>
      <div className={`menu-icon ${menuActive && 'change'}`} 
        onClick={() => setMenuActive(!menuActive)}>
        <div className={`bar1 ${menuActive && 'dark'}`}></div>
        <div className={`bar2 ${menuActive && 'dark'}`}></div>
        <div className={`bar3 ${menuActive && 'dark'}`}></div>
      </div>
      <div ref={el}className={`nav-header ${menuActive && mobileScreen && 'dark'}`}>
        <h1 className="header-name">Austin Mathis</h1>
        <p className="subtitle">Dallas, Tx</p>
      </div>
    </nav>
  )
}