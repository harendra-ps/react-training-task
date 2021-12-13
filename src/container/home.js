import React from "react";
import { Link } from "react-router-dom";


function Home(props) {
    console.log("home props: ", props);
    
    return(
        <div>
            <h3>Home page</h3>
            <h4><Link to="product-list">product List</Link></h4>
            <h4><Link to="product-details">product Page</Link></h4>
        </div>
    )
}

export default Home;