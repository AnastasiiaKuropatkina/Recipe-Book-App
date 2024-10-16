import { Routes, Route } from "react-router-dom"; // Corrected import
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
import { NotFound } from "./pages/NotFound";
import './App.css';

function App() {
    return (
        <>
            <Header />
            <main className="container content">
                <Routes basename="/recipe-book-app">
                    <Route path="/" element={<Home />} />  {/* Fixed 'path' typo */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/category/:name' element={<Category />} />
                    <Route path='/meal/:id' element={<Recipe />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;