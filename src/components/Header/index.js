import { Link } from 'react-router-dom';
import './index.css'

const Header = () => {
    return (
    <div className='item-container'>
        <ul className="items">
            <Link to='/' className="item">About</Link>
            <Link to='/place' className="item">Place</Link>
            <Link to='/projects' className='item'>Projects</Link>
            <Link to='/education' className="item">Education</Link>
            <Link to='/skills' className="item">Skills</Link>
        </ul>
    </div>
    )
}
export default Header;