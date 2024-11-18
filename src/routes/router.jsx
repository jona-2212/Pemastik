import { jsxDEV } from "react/jsx-dev-runtime";
import { createBrowserRouter } from 'react-router-dom';
import HalamanUtama from '../pages/HalamanUtama';
import HalamanTopic from '../pages/HalamanTopic';
import HalamanSongs from "../pages/HalamanSongs";
import HalamanFind from "../pages/HalamanFind";
import HalamanProfil from "../pages/HalamanProfil";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HalamanUtama />, 
  },
  {
    path: "/topics",
    element: <HalamanTopic />,
  },
  {
    path: "/songs",
    element: <HalamanSongs />,
  },
  {
    path: "/find",
    element: <HalamanFind />,
  },
  {
    path: "/profil",
    element: <HalamanProfil />,
  }
]);

export default router;
