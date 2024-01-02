import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import User from './component/user/user.jsx'
import Admin from "./component/admin/Admin"
import { RouterProvider } from 'react-router-dom'
import Services from './component/services/Services.jsx'
import Meet from './component/meet/Meet.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    errorElement: <div>error</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error</div>,
    children:[
      {
        path:'services',
        element:<Services/>,
        errorElement:<div>error</div>,
      },
      // {
      //   path: '',
      //   element: <Services/>,
      //   errorElement: <div>error contant not found</div>
      // },
      {
        path:':meeting',
        element:<Meet/>,
        errorElement:<div>error</div>,
      }
    ]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
