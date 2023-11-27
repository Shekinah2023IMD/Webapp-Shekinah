import React from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from "./assets/react.svg"
import App from './App';
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './Navbar/Navbar.jsx'
import { Hooks } from './Hooks/Hooks.jsx'
import { Card } from './Card/Card.jsx'
import { Hello } from './Hello.jsx'

const router = createBrowserRouter ([
  {
  path: "/",
  element: <Navbar />,
  children: [
    {
      path: "/App",
      element: <App/>
    },
    {
      path: "/Hello",
      element: <Hello/>
    },
    {
    path: "/Hooks",
    element: <Hooks />,
  },
  {
    path: "/cards",
    element: <Card />,
  },
  {
    path: "/selectors",
    element: (
      <Card
      title={"React"}
      link={"https://react.dev"}
      logo={<img src={reactLogo}/>}
      />
    )
  },
],
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
