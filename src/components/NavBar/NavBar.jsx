import navLogo from '../../assets/mendio.svg'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
        <img src={navLogo} alt="mendio_logo" />
        <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Signup</li>
        </ul>
    </nav>
  )
}

export default NavBar