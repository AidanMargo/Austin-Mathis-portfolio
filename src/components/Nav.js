import '../componentStyles/NavStyle.css'
import {useState} from 'react'

export default function Nav() {

  const [menuActive, setMenuActive] = useState(false)
 
  return (
    <nav>
      <div className={`menu-icon ${menuActive && 'change'}`} onClick={() => setMenuActive(!menuActive)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div>
        <h1 className="header-name">Austin Mathis</h1>
        <p className="subtitle">Dallas, Tx</p>
      </div>
    </nav>
  )
}