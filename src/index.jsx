import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza(props) {
    return(
    <div className="pizza">
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
         <button disabled={props.soldOut}>
        {props.soldOut ? "Sold Out" : "Add to Cart"}
      </button>
    </div>
    )    
}

function Header() {
    return( 
        <div className="header">
            <h1>Justin Pizza</h1>
        </div>    
    )
    }


function Menu() {
    return (
    <div className="main">
        <div className="menu">
            <h2>Our store Menu</h2>
            <p>Justin Pizza sell the most over-prices pizza in the world!</p>
        </div>
        
        <div className="pizza">
            {pizzaData.map(pizza => (
                 <Pizza
                    img={pizza.photoName}
                    name={pizza.name}
                    description={pizza.ingredients}
                    price={pizza.price}
                    soldOut={pizza.soldOut}
                />
            ))}
            
        </div>
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

      <br></br>
      <br></br>
      <div className="btn"><p className="order">Call us Now!</p></div>
    </footer>
  );
}

function App() {
    return ( 
    <div className="body">
        <div className="container">
         <Header/>
            <Menu/>
            <Footer/>
        </div>
    </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)