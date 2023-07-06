import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";
import Gallery from "../../Pages/Gallery/Gallery";
import Concern from "../../Pages/Concern/Concern";
import Contact from "../../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/concern',
                element: <Concern></Concern>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])
export default router;