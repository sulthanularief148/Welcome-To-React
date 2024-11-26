import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import Body from "./src/components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Cart from './src/components/Cart';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurantMenu />
                }
            ],
            errorElement: <Error />

        },

    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />

);

