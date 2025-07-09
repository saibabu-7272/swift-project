import './index.css'
import { Link } from 'react-router-dom'
const Header = (props) =>{
    const {name,shortName} = props
   return(
    <header className='header'>
        <Link className='link' to="/">
        <h1>Swift</h1>
        </Link>
        <Link className='link' to="/profile">
            <p><span className='short-name'>{shortName}</span>{name}</p>
        </Link>
        
        
    </header>
   ) 
}

export default Header