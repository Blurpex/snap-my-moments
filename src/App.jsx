import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="service" element={<Service />} />
                <Route path="contact" element={<Contact />} />
                <Route path="help" element={<Help />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
