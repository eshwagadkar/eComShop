import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './navigation.styles.scss';
const Navigation = () => {
    return (
        <header>
            <nav className='navigation'>
                 {/* Logo Container */}
                 <Link to="/" className='logo-container'>
                    <Logo className='logo'/>
                 </Link>

                {/* Navbar links */}
                <ul className='nav-links-container'>
                    <li className='nav-link'><Link to="/about">About</Link></li>
                    <li className='nav-link'><Link to="/authenticate">Authenticate</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;