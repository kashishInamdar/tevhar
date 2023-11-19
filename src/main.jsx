import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  }
])

 root.render( <RouterProvider router={router} /> )

