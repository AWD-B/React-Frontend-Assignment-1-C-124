import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  { path: "/", element: <><Navbar /><Home /><Footer /></> },
  { path: "/services", element: <><Navbar /><Services /><Footer /></> },
  { path: "/about", element: <><Navbar /><About /><Footer /></> },
  { path: "/contact", element: <><Navbar /><Contact /><Footer /></> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
