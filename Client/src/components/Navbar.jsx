import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </nav>
  )
}
