import {
  Navigate,
    createBrowserRouter,
    
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Category from "../Pages/HomePage/Category/Category";
import NewsLayOut from "../Layout/NewsLayOut";
import News from "../Pages/News/News/News";
import LoginLayOut from "../Layout/LoginLayOut";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/LoginPage/Register/Register";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayOut></LoginLayOut>,
        children: [
          {
            path: '/',
            element: <Navigate to='/category/0'></Navigate>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <Register></Register>
          }
        ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children: [ 
        {
          path: ':id',
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        },
       
      ]
    },

    {
      path: '/news',
      element: <NewsLayOut></NewsLayOut>,
      children: [
        {
          path: ':id',
          element:<News></News>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router;
