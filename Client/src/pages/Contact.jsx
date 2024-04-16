import { useState } from 'react'
import './contact.scss';

export default function Contact() {
  
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const contact = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className='contactus'>
      <h2>Contact</h2>
      <form onSubmit={contact}>
        <element class='contact'>
        <label>Name</label>
        <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        </element>
        <element class='contact'>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        </element>
        <element class='contact'>
        <label>Message</label>
        <textarea type='text' placeholder='enter message...' value={data.message} onChange={(e) => setData({...data, message: e.target.value})} />
        </element>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
