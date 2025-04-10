import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { NotFound } from './routes/notFound.jsx';
import { Player } from './routes/player.jsx';
import { Resources } from './routes/resources.jsx';
import { Root } from './routes/root.jsx';
import { buttons } from './utils/videos.js';

const router = createBrowserRouter([
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
      path: "/resources/tips",
      element: <Player buttons={buttons.tips}/>,
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
