import React from "react";
import ReactDOM from "react-dom/client"

function Header() {
    return <h1>Verryn's Pizza Co.</h1>
}

function Pizza() {
    return <div>
        <img src="pizzas/spinach.jpeg" alt="Spinach Pizza" height={100}/>
        <h1>Spinach Pizza</h1>
        <p>Tomato, Mozarella, Spinach and Ricotta Cheese</p>
        <p>10</p>
    </div>
        
}
function App() {
    return <div>
        <Header/>
        <Pizza/>
        
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)