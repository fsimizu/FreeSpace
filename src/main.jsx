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
import { Blog } from './routes/blog.jsx';
import { Post } from './routes/post.jsx';


const router = createBrowserRouter([
    { path: "/", element: <Root />},
    { path: "/resources", element: <Resources />},
    { path: "/resources/spanish", element: <Player buttons={buttons.spanish} video='spanish'/>},
    { path: "/resources/filipino", element: <Player buttons={buttons.filipino} video='filipino'/>},
    { path: "/resources/french", element: <Player buttons={buttons.french} video='french'/>},
    { path: "/resources/portuguese", element: <Player buttons={buttons.portuguese} video='portuguese'/>},
    { path: "/resources/vocabulary", element: <Player buttons={buttons.vocabulary} video='vocabulary'/>},
    { path: "/resources/tips", element: <Player buttons={buttons.tips} video='tips'/>},
    { path: "/resources/blog", element: <Blog />},
    { path: "/resources/blog/:slug", element: <Post />},
    // { path: "*", element: <NotFound />}
  ])

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
