import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home/home.jsx'
import Error from './pages/Error/error.jsx'
import About from './pages/About/about.jsx'
import Courses from './pages/Courses/courses.jsx'
import Resources from './pages/Resources/resources.jsx'
import Contact from './pages/Contact/contact.jsx'
import Targets from './pages/Targets/targets.jsx'
import Carbine from './pages/Carbine/carbine.jsx'
import Carry from './pages/Carry/carry.jsx'
import Explosive from './pages/Explosive/explosive.jsx'
import Shotgun from './pages/Shotgun/shotgun.jsx'
import Pistol from './pages/Pistol/pistol.jsx'
import Ltc from './pages/Ltc/Ltc.jsx'
import Thanks from './pages/Thanks/thanks.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/resources',
        element: <Resources />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: 'resources/targets',
        element: <Targets />
      },
      {
        path: 'courses/carbine',
        element: <Carbine />
      },
      {
        path: 'courses/pistol',
        element: <Pistol />
      },
      {
        path: 'courses/shotgun',
        element: <Shotgun />
      },
      {
        path: 'courses/carry',
        element: <Carry />
      },
      {
        path: 'courses/explosive',
        element: <Explosive />
      },
      {
        path: '/thankyou',
        element: <Thanks />
      },
      {
        path: 'courses/ltc',
        element: <Ltc />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
