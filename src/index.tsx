import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./app";
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./widgets/layout/ui";

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <App/>
      },
      {
        path: 'tournaments',
        element: <App/>
      },
    ]
  }
])


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
