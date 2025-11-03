import React from "react";
import ReactDOM from "react-dom/client"

function Header() {
    return <h1 style={{color: "orange" , fontSize: "48px"}}>Verryn's Pizza Co.</h1>
}

function App() {
    return 
    <div>
        <img src="pizzas/spinaci.jpg" alt="Spinach Pizza" height={100}/>
        <h1>Spinach Pizza</h1>
        <p>Tomato, Mozarella, Spinach and Ricotta Cheese</p>
        <p>10</p>
    </div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)