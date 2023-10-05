import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Counter from './Counter';
import Todolist from './Todolist';
import Countries from './Countries';
import CountryDetails from './CountryDetails';
import Countries2 from './Countries2';
import Countries3 from './Countries3';
import CountryDetails3 from './CountryDetails3';

const router = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/counter",
                element:<Counter></Counter>
            },
            {
                path:'/todolist',
                element:<Todolist></Todolist>
            },
            {
                path:'/countries',
                element:<Countries></Countries>,
                
            },
            {
                path:'/countryDetails/:cname',
                element:<CountryDetails></CountryDetails>
            },
            {
                path:'/countries2',
                element:<Countries2></Countries2>,
                children:[
                    {
                        path:"/countries2/countryDetails/:cname",
                        element:<CountryDetails></CountryDetails>
                    }
                ]
            },
            {
                path:'/countries3',
                element:<Countries3></Countries3>
            },
            {
                path:'/countryDetails3',
                element:<CountryDetails3></CountryDetails3>
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}></RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
