import HomePage from "./routes/homepage/homePage";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
// import './layout.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listpage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/SinglePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import AboutPage from "./routes/AboutPage/AboutPage";
import RegisterPage from "./routes/registerPage/registerPage";
import LoginPage from "./routes/loginPage/loginPage";
import ContactPage from "./routes/ContactPage/ContactPage";
// import Slider from "./routes/slider/Slider";

function App() {
  const router1 = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        // When we use Single Items we are gonna need id, which will be dynamic and can be a string or a number
        // {
        //   path: "/:id",
        //   element: <SinglePage />,
        // },
        {
          path: "/:id",
          element: <SinglePageWrapper />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path:"/register",
          element:<RegisterPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
        {
          path:"/login",
          element:<LoginPage/>
        }

      ],
    },
  ]);

  function SinglePageWrapper() {
    let { id } = useParams(); // Get the id parameter from the URL
    return <SinglePage postId={id} />;
  }
  return <RouterProvider router={router1} />;
}

export default App;
