// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { lazy } from "react";
// // const AboutUs = lazy(() => import("./pages/AboutUs"))
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import Homepage from "./pages/Homepage";
// import Partner from "./pages/Partner";
// import Activities from "./pages/Activities";
// import { Registration } from "./pages/Registration";


// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/prime-time-pals/',
//       element: <Homepage />,
//     },
//     {
//       path:'/prime-time-pals/about-us/',
//       element: <AboutUs />
//     },
//     {
//       path:'/prime-time-pals/contact/',
//       element: <Contact />
//     },
//     {
//       path:'/prime-time-pals/partner/',
//       element: <Partner />
//     },
//     {
//       path:'/prime-time-pals/activities/',
//       element: <Activities />
//     },
//     {
//       path:'/prime-time-pals/registration/',
//       element: <Registration />
//     }
//   ])

//   return <RouterProvider router = {router} />
// }

// export default App;

import React, { lazy, Suspense } from 'react';
import logo from "./assets/images/new-logo.svg"
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Lazy loading components
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Partner = lazy(() => import('./pages/Partner'));
const Activities = lazy(() => import('./pages/Activities'));
import { Registration } from "./pages/Registration";

function App() {
  const router = createBrowserRouter([
    {
      path: '/prime-time-pals/',
      element: <Homepage />,
    },
    {
      path: '/prime-time-pals/about-us/',
      element: <AboutUs />
    },
    {
      path: '/prime-time-pals/contact/',
      element: <Contact />
    },
    {
      path: '/prime-time-pals/partner/',
      element: <Partner />
    },
    {
      path: '/prime-time-pals/activities/',
      element: <Activities />
    },
    {
      path: '/prime-time-pals/registration/',
      element: <Registration />
    }
  ]);

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <img src={logo} alt="Loading..." className="w-24 animate-pulsate" />
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
