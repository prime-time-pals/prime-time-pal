import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Partner from "./pages/Partner";
import Activities from "./pages/Activities";

function App() {
  const router = createBrowserRouter([
    {
      path: '/prime-time-pals/',
      element: <Homepage />,
    },
    {
      path:'/prime-time-pals/about-us/',
      element: <AboutUs />
    },
    {
      path:'/prime-time-pals/contact/',
      element: <Contact />
    },
    {
      path:'/prime-time-pals/partner/',
      element: <Partner />
    },
    {
      path:'/prime-time-pals/activities/',
      element: <Activities />
    }
  ])

  return <RouterProvider router = {router} />
}

export default App;
