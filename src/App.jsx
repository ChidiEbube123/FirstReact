import React from 'react'
import HomePage from './assets/pages/HomePage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './assets/layouts/MainLayout'

const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
<Route index element={<HomePage/>}/>

      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App