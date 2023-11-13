
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RickAndMonty from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/index.jsx';
import Episode from './components/pages/Episode.jsx';
import Location from './components/pages/Location.jsx';
import Filter from './components/filter/Filter.jsx';
import CardsDetails from './components/cards/CardsDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <RickAndMonty />
      </div>
    )
  },
  {
    path: "/:id",
    element: (
      <div>
        <NavBar />
        <CardsDetails />
      </div>
    )
  },
  {
    path: "/episodes",
    element: (
      <div>
        <NavBar />
        <Episode />
      </div>
    )
  },
  {
    path: "/episodes/:id",
    element: (
      <div>
        <NavBar />
        <CardsDetails />
      </div>
    )
  },
  {
    path: "/location",
    element: (
      <div >
        <NavBar />
        <Location />
      </div>
    )
  },
  {
    path: "/location/:id",
    element: (
      <div >
        <NavBar />
        <CardsDetails />
      </div>
    )
  },

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <>
      {/*  NavBar */}
      <NavBar />

      {/* The rest of the content */}
      {router}
    </>
  </RouterProvider>
);




