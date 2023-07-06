import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/navigation'

import classes from './Root.module.scss';

const RootLayout = () => {

    return (
        <>
        <Navigation />
        <main className={classes.content}>
            <Outlet />
        </main>
        </>
    )
}

export default RootLayout;