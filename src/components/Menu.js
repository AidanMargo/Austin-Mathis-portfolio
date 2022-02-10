import '../componentStyles/MenuStyle.css'


export default function Menu() {
 return (
   <div className='menu-overlay'>

      <ul className="nav-links">
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/services'>Services</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>

      <ul className='social-links'>
        <li><i className="fa-brands fa-instagram"></i></li>
        <li><i className="fa-brands fa-twitter"></i></li>
        <li><i className="fa-brands fa-facebook"></i></li>
      </ul>
      
   </div>
 ) 
}