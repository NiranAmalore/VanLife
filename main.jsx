import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"

function App(){
    return(
        <BrowserRouter>
            <header>
                <nav>
                    <Link className="website-logo" to ="/">#VANLIFE</Link>
                    <Link to ="/about">About</Link>
                </nav>
            </header>
            <Routes>
                <Route path ="/" element = {<Home />} />
                <Route path ="/about" element = {<About />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)