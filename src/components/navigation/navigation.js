import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../utility/firebase/firebase.utility';

import './navigation.styles.scss';
const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        const res = await signOutUser();
        setCurrentUser(null);
    }

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
                    { currentUser ? 
                         <li className='nav-link' onClick={signOutHandler}>Sign Out</li> :
                         <li className='nav-link'><Link to="/authenticate">Authenticate</Link></li> 
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;