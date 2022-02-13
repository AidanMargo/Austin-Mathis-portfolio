import '../componentStyles/NavStyle.css'

export default function Nav({menuActive, setMenuActive}) {
  
  const mobileScreen = window.matchMedia('(max-width: 376px)').matches === true
  const desktopScreen = window.matchMedia('(min-width: 376px)').matches === true

  
  return (
    <nav>
      <div className={`menu-icon ${menuActive && 'change'}`} 
        onClick={() => setMenuActive(!menuActive)}>
        <div className={`bar1 ${menuActive && 'dark'}`}></div>
        <div className={`bar2 ${menuActive && 'dark'}`}></div>
        <div className={`bar3 ${menuActive && 'dark'}`}></div>
      </div>
      <div className={`nav-header ${menuActive && 'dark'}`}>
        <h1 className="header-name">Austin Mathis</h1>
        <p className="subtitle">Dallas, Tx</p>
      </div>
    </nav>
  )
}