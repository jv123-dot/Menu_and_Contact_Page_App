import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuPage from './Pages/Menupage.tsx'
import HomePage from './Pages/HomePage.tsx'
import ErrorPage from './Pages/ErrorPage.tsx'
import ContactPage from './Pages/ContactPage.tsx'
import Errors from './Components/Errors.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errors/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/Menu",
        element: <MenuPage/>
      },
      {
        path: "/Contact",
        element: <ContactPage/>
      },
      {
        path: "*",
        element: <ErrorPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
