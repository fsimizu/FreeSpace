import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root.jsx';
import { Resources } from './routes/resources.jsx';
import { Video } from './components/Video/index.jsx';
import { Player } from './routes/player.jsx';
import { NotFound } from './routes/notFound.jsx';
import { PlayerContainer } from './components/PlayerContainer/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { buttons } from './utils/videos.js';



const router = createHashRouter([
    {
      path: "/",
      element: <Root />
    },

    {
      path: "/resources",
      element: <Resources />,
    },

    {
      path: "/resources/spanish",
      element: <Player buttons={buttons.spanish}/>,
    },
    {
      path: "/resources/filipino",
      element: <Player buttons={buttons.filipino}/>,
    },
    {
      path: "/resources/french",
      element: <Player buttons={buttons.french}/>,
    },
    {
      path: "/resources/portuguese",
      element: <Player buttons={buttons.portuguese}/>,
    },
    {
      path: "/resources/vocabulary",
      element: <Player buttons={buttons.vocabulary}/>,
    },
    {
      path: "*",
      element: <NotFound />
    }

  ])


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
