import ReactDOM from 'react-dom/client';
import Error from './components/Error.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.jsx'
import CountryDetail from './components/CountryDetails.jsx';
import Home from './components/Home.jsx';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<Error/>,
      children:[
        {
           path: "/" ,
           element: <Home/>,
        },
        {
           path: "/:country" ,
           element: <CountryDetail/>,
        },    
      ]
    },
  ]);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render( <RouterProvider router={router} />);