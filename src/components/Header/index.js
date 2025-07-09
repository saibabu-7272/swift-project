import './index.css'
import { Link } from 'react-router-dom'
const Header = (props) =>{
    const {name,shortName} = props
   return(
    <header className='header'>
        <Link className='link' to="/">
        <h1 className='website-name'>Swift</h1>
        </Link>
        <Link className='link' to="/profile">
            <p className='profile-nav'><span className='short-name'>{shortName}</span>{name}</p>
        </Link>
        
        
    </header>
   ) 
}

export default Header