import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import Body from "./src/components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './src/components/Contact';
import Cart from './src/components/Cart';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
const Grocery = lazy(() => import("./src/components/Grocery"))
const About = lazy(() => import("./src/components/About"))

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
// Chunking, Dynamic Bundling, Lazy Loading

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
                    element:<Suspense fallback={<p>Loading..</p>}><About /></Suspense> 
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
                },
                {
                    path: "/grocery",
                    element: <Suspense fallback={<p>Loading.....</p>}><Grocery /></Suspense>
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

