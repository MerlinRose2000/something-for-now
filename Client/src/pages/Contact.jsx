import { useState } from 'react'


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
    <div>
      <form onSubmit={contact}>
        <label>Name</label>
        <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label>Message</label>
        <input type='text' placeholder='enter message...' value={data.message} onChange={(e) => setData({...data, message: e.target.value})} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
