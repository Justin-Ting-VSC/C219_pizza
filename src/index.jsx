import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

function Header() {
    return <h1 style={{color: "orange", fontSize: "48px", textTransform : "uppercase"}}>Justin Pizza Co.</h1>
}

function Pizza(props) {
    return(
    <div className="pizza">
        <img src={props.img}/>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
    </div>
    )    
}

function Menu() {
    return(
    <div className="menu">
        <h2>Our Menu</h2>
        <Pizza img="pizzas/spinaci.jpg" name="Spinach Pizza" description="This scrumptious spinach pizza is crispy on the edges and loaded with juicy garlicky spinach, creamy mozzarella and tangy feta cheese. It’s fresh, full of flavor, and absolutely delicious!" price={400}/>
        <Pizza img="pizzas/funghi.jpg"name="funghi Pizza" description="A pizza funghi, or better known as a mushroom pizza is a world famous pizza. It doesn't need many ingredients, recipe for 2 pizzas." price={100}/>
    </div>
    
)
}

function Footer() {
  const currentHour = new Date().getHours(); // get current hour
  const isOpen = currentHour >= 10 && currentHour < 22; // open 10:00–21:59

  return (
    <footer className="footer">
      <p>{isOpen ? "We’re currently open" : "Sorry, we’re closed"}</p>
      <p>Open daily from 10:00 AM to 10:00 PM</p>
    </footer>
  );
}

function App() {
    return ( 
    <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)