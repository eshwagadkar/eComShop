import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/navigation'

import './root.styles.scss';

const RootLayout = () => {

    return (
        <>
        <Navigation />
        <main className='content'>
            <Outlet />
        </main>
        </>
    )
}

export default RootLayout;