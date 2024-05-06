import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/prime-time-pals/',
      element: <Homepage />,
    },
    {
      path:'/prime-time-pals/about-us/',
      element: <AboutUs />
    }
  ])

  return <RouterProvider router = {router} />
}

export default App;
