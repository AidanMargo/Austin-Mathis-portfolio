import { useState } from "react"
import '../componentStyles/ContactFormStyle.css'
export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })

  const handleFormData = (e) => {
    setFormData({...formData,  [e.target.name] : e.target.value})
  }
  return (
    <div>
      <h2 className='form-header'>Contact and Inquiries</h2>
      <form className='contact-form' autoComplete='off'>
        <input name="name" value={formData.name} placeholder='Name' onChange={(e) => handleFormData(e)}/>
        <input name="subject" value={formData.subject} placeholder='Subject' onChange={(e) => handleFormData(e)}/>
        <textarea name="message" value={formData.message} placeholder='Message' onChange={(e) => handleFormData(e)}/>
        <button>Send</button>
      </form>
    </div>
  )
}