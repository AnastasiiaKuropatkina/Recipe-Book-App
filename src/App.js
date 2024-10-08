import { Routes, Route } from "react-router-dom"; // Corrected import
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import { NotFound } from "./pages/NotFound";
import './App.css';

function App() {
    return (
        <>
            <Header />
            <main className="container content">
                <Routes>
                    <Route path="/" element={<Home />} />  {/* Fixed 'path' typo */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/movies/:id' element={<Movie />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;