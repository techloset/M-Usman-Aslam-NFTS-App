import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import OurCollection from './pages/collection/Collection';
import Detailpage from './pages/detailpage/detail';
import { Provider } from 'react-redux';
import store from './reduxe/Store';

// You can do this: New Version React Router 6.4
const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/collection/:collection_slug',
    element:<OurCollection/>,
  },
  {
    path:'/detail',
    element:<Detailpage/>,
  },
  
 
  
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);root.render(
  
    <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </Provider>
);

reportWebVitals();
