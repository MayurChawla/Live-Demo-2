import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function Navbar() {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("searched something");
    };
    return(
        <Router>
        <div className="navdiv">
            <nav className="navclass">
                    <h2 className="site-name">
                        <span>flipkart</span>
                    </h2>
                    <form action="" onSubmit={onSubmitHandler}>
                        <input type="text" placeholder="Search for products, brands and more" className="searchbar"></input>
                        <button type="submit"><img alt="search" src={'./src/searchsvg.svg'}/></button>
                    </form>
                    <button ><a href="/cart">cart</a></button>
                    <button ><a href="/savedForLater"> saved for later</a></button>
                    <button ><a href="/checkout"> checkout</a></button>
            </nav>
        </div>
        </Router>
    )
}
export default Navbar;