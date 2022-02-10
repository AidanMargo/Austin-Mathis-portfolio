import '../componentStyles/MenuStyle.css'

export default function Menu() {
 return (
   <div className='menu-overlay'>

      <ul className="nav-links">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>

      <ul className='social-links'>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-twitter"></i></li>
        <li><i class="fa-brands fa-facebook"></i></li>
      </ul>
      
   </div>
 ) 
}