import headshot from '../photos/Headshot.jpg'
import '../componentStyles/AboutStyle.css'


export default function About () {
  return (
    <div className='about'>
      <img src={headshot} alt='Headshot' className='headshot'/>
      <p> Duis minim id ipsum in. Excepteur dolor qui et dolor adipisicing in. Laboris cillum nisi ullamco sunt sunt. 
        Aliquip ipsum cillum cillum officia culpa enim aute excepteur nisi velit amet ullamco. 
        Sit consectetur consequat exercitation tempor cupidatat sunt qui incididunt. </p>
      <p> Duis minim id ipsum in. Excepteur dolor qui et dolor adipisicing in. Laboris cillum nisi ullamco sunt sunt. 
        Aliquip ipsum cillum cillum officia culpa enim aute excepteur nisi velit amet ullamco. 
        Sit consectetur consequat exercitation tempor cupidatat sunt qui incididunt. </p>
    </div>
  )
}