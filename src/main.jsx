import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root.jsx';
import { Resources } from './routes/resources.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css'


const router = createHashRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/resources",
    element: <Resources />
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
