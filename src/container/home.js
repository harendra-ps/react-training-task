import React from "react";
import { Link } from "react-router-dom";


function Home(props) {
    console.log("home props: ", props);
    
    return(
        <div>
            <h3>Home Page</h3>
            <h4><Link to="product-list">Go to Product List Page</Link></h4>
        </div>
    )
}

export default Home;