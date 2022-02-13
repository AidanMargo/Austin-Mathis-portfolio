import {useEffect, useRef} from 'react'
import ContactForm from './ContactForm'
import '../componentStyles/LandingStyle.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Photos
import AnitaCart from '../photos/AnitaCart.jpg'
import Watchers from '../photos/Watchers.jpg'
import Skyline from '../photos/Skyline.jpg'
import Candid from '../photos/Candid.jpg'
import GraffitiWall from '../photos/GraffitiWall.jpg'
import PurpleSky from '../photos/PurpleSky.jpg'
import Pool from '../photos/Pool.jpg'
import Waterfall from '../photos/Waterfall.jpg'
import DJ from '../photos/DJ.jpg'

gsap.registerPlugin(ScrollTrigger)

const images  = []


export default function Landing() {

  // Set GSAP variables for tween
  const el = useRef()
  const q = gsap.utils.selector(el) // this allows us to select all child elements of whichever element has ref={el}
  const tl = useRef()
  // Checks to see if screen is mobile or desktop
  const mobileScreen = window.matchMedia('(max-width: 376px)').matches === true
  const desktopScreen = window.matchMedia('(min-width: 376px)').matches === true

  
  
  // Keep img classes DRY
  const imgClasses = mobileScreen ? 'slide-one' : 'fade-in'

  useEffect(() => {
    addToImages()
    if(mobileScreen) {
      mobileAnimation()
    } else if(desktopScreen) {
      desktopAnimation()
    }

  }, [q])

  const addToImages = () => {
    const imagesToPush = document.querySelectorAll('img')

    imagesToPush.forEach(image => images.push(image))
  }

  const mobileAnimation = () => {
    tl.current = gsap.timeline()
    .to(q('.slide-one'), {
      x: 0,
      opacity: 0.9,
      duration: 1,
      ease: 'power4.in-out',
    })
    .to(q('.slide-two'), {
      x: 0,
      opacity: 0.9,
      duration: 1,
      ease: 'power4.in-out',
      delay: -0.75
    })
  }

  const desktopAnimation = () => {

    images.forEach(image => {
       gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          start:'top center',
          // scrub: true,
          markers: true,
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        duration: 0.75,
        ease: 'none'
      })
    })
  }
  
  return (
    <>
    <div className = 'image-grid' ref={el}>
      <img className ={imgClasses} src={AnitaCart} alt="Woman in Cart"/>
      <img className ={imgClasses} src={Skyline} alt="Skyline"/>
      <img className ={`long ${imgClasses}`} src={Watchers} alt="Watchers"/>
      <img className ={`long ${imgClasses}`} src={PurpleSky} alt="Purple Sky"/>
      <img className ={imgClasses} src={Candid} alt="Candid"/>
      <img className ={imgClasses} src={GraffitiWall} alt="Graffiti Wall"/>
      <img className ={`long ${imgClasses}`} src={DJ} alt="DJ"/>
      <img className ={imgClasses} src={Waterfall} alt="Waterfall"/>
      <img className ={imgClasses} src={Pool} alt="Pool"/>
    </div>
    <ContactForm />
    </>
  )
}