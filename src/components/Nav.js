import '../componentStyles/NavStyle.css'

export default function Nav({menuActive, setMenuActive}) {
 
  
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