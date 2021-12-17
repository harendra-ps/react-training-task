import React from "react";
import { Link } from "react-router-dom";


const PAGE_NOT_FOUND = () => {
    return(
        <div className="container-fluid">
            <h2 className="text-center">Error - 404: Page not found</h2>
            <p className="text-center">
                Click <Link to="/"> here</Link> to go back
            </p>
        </div>
    )
}
export default PAGE_NOT_FOUND; 