import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Blog } from './routes/blog.jsx';
import { NotFound } from './routes/notFound.jsx';
import { Player } from './routes/player.jsx';
import { Post } from './routes/post.jsx';
import { Practice } from './routes/practice.jsx';
import { Resources } from './routes/resources.jsx';
import { Root } from './routes/root.jsx';
import { buttons } from './utils/videos.js';
import { Register } from './routes/register.jsx';
import { Login } from './routes/login.jsx';
import { ResetPass } from './routes/resetPass.jsx';
import { UserProvider } from "./context/UserContext";
import { Amplify } from "aws-amplify";
import { awsConfig } from "./aws-exports";

Amplify.configure(awsConfig);


const router = createBrowserRouter([
    { path: "/", element: <Root />},
    { path: "/resources", element: <Resources />},
    { path: "/resources/spanish", element: <Player buttons={buttons.spanish} video='spanish'/>},
    { path: "/resources/filipino", element: <Player buttons={buttons.filipino} video='filipino'/>},
    { path: "/resources/french", element: <Player buttons={buttons.french} video='french'/>},
    { path: "/resources/portuguese", element: <Player buttons={buttons.portuguese} video='portuguese'/>},
    { path: "/resources/urdu", element: <Player buttons={buttons.urdu} video='urdu'/>},
    { path: "/resources/vocabulary", element: <Player buttons={buttons.vocabulary} video='vocabulary'/>},
    { path: "/resources/tips", element: <Player buttons={buttons.tips} video='tips'/>},
    { path: "/resources/blog", element: <Blog />},
    { path: "/resources/blog/:slug", element: <Post />},
    { path: "/practice", element: <Practice />},
    { path: "/login", element: <Login />},
    { path: "/register", element: <Register />},
    { path: "/password-reset", element: <ResetPass />},
    { path: "*", element: <NotFound />}
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)

