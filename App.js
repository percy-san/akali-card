import React from "react"
import About from "./components/About"
import Info from "./components/Info"
import Abilities from "./components/Abilities"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div className="container">
            <Info />
            <About />
            <Abilities />
            <Footer />
        
            
        </div>
        
    )
}

