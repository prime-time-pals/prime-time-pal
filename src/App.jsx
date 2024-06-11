import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Partner from "./pages/Partner";
import Activities from "./pages/Activities";
import { Registration } from "./pages/Registration";
import Register from "./administration/Register";
import Login from "./administration/Login";
import { AuthContext } from "./Context/AuthContext";
import { Protected } from "./pages/Protected";
import Dashboard from "./administration/Dashboard";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path:'/about-us/',
      element: <AboutUs />
    },
    {
      path:'/contact/',
      element: <Contact />
    },
    {
      path:'/partner/',
      element: <Partner />
    },
    {
      path:'/activities/',
      element: <Activities />
    },
    {
      path:'/registration/',
      element: <Registration />
    },
    {
      path:'/admin/signup/',
      element: <Register />
    },
    {
      path:'/admin/login/',
      element: <Login />
    },
    {
      path:'/admin/dashboard/',
      element: <Protected><Dashboard /></Protected>
    }
  ])

  return <AuthContext><RouterProvider router = {router} /></AuthContext>
}

export default App;

// import React, { lazy, Suspense } from 'react';
// import logo from "./assets/images/new-logo.svg"
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

// // Lazy loading components
// const AboutUs = lazy(() => import('./pages/AboutUs'));
// const Contact = lazy(() => import('./pages/Contact'));
// const Homepage = lazy(() => import('./pages/Homepage'));
// const Partner = lazy(() => import('./pages/Partner'));
// const Activities = lazy(() => import('./pages/Activities'));
// import { Registration } from "./pages/Registration";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: 's/',
//       element: <Homepage />,
//     },
//     {
//       path: 's/about-us/',
//       element: <AboutUs />
//     },
//     {
//       path: 's/contact/',
//       element: <Contact />
//     },
//     {
//       path: 's/partner/',
//       element: <Partner />
//     },
//     {
//       path: 's/activities/',
//       element: <Activities />
//     },
//     {
//       path: 's/registration/',
//       element: <Registration />
//     }
//   ]);

//   return (
//     <Suspense fallback={
//       <div className="flex items-center justify-center h-screen">
//         <img src={logo} alt="Loading..." className="w-24 animate-pulsate" />
//       </div>
//     }>
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// }

// export default App;
