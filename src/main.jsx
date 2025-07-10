import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Home from './pages/Home/home.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
