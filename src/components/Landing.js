import {useEffect, useRef, useState} from 'react'
import ContactForm from './ContactForm'
import '../componentStyles/LandingStyle.css'
import gsap from 'gsap'
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

export default function Landing() {

  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl = useRef()

  useEffect(() => {
    tl.current = gsap.timeline()
    .to(q('.fade-one'), {
      x: 0,
      opacity: 0.9,
      duration: 1,
      ease: 'power4.in-out',
    })
    .to(q('.fade-two'), {
      x: 0,
      opacity: 0.9,
      duration: 1,
      ease: 'power4.in-out',
      delay: -0.75
    })
  }, [q])

  return (
    <>
    <div className = 'image-grid' ref={el}>
      <img className ="fade-one" src={AnitaCart} alt="Woman in Cart"/>
      <img className ="fade-two" src={Skyline} alt="Skyline"/>
      <img className ="fade-one long" src={Watchers} alt="Watchers"/>
      <img className ="fade-two long" src={PurpleSky} alt="Purple Sky"/>
      <img className ="fade-one" src={Candid} alt="Candid"/>
      <img className ="fade-two" src={GraffitiWall} alt="Graffiti Wall"/>
      <img className ="fade-two long" src={DJ} alt="DJ"/>
      <img className ="fade-one" src={Waterfall} alt="Waterfall"/>
      <img className ="fade-one" src={Pool} alt="Pool"/>
    </div>
    <h2 className='form-header'>Contact and Inquiries</h2>
    <ContactForm />
    </>
  )
}