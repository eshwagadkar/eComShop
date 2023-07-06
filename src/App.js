import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/home/Home';
import AboutPage from './pages/about/About';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
     path: '/',
     element: <RootLayout />,
     children: [
       { path: '/', element: <HomePage /> },
       { path: '/about', element: <AboutPage /> },
     ],   
    },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
