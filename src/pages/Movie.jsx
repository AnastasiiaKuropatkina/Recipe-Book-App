import React from 'react';
import { useParams, useNavigate, useMatch, useLocation } from 'react-router-dom';

function Movie() {
    /* The useParams hook returns an object of key/value pairs of the dynamic params from the current URL */
    const { id } = useParams();

    /* useNavigate: navigate(-1) mimics the behavior of the browser's back button */
    const navigate = useNavigate();

    /* useMatch: Returns information about how the current URL matches a given pattern */
    const match = useMatch("/movie/:id"); // Define the route you're trying to match

    /* useLocation: Returns the current location object (pathname, search, hash, etc.) */
    const location = useLocation();

    console.log("id==>", id);
    console.log("navigate=>", navigate);
    console.log("match=>", match);  // Logs information about the matched route
    console.log("location=>", location);  // Logs information about the current location

    const handleGoBack = () => {
        navigate(-1); // This will navigate back to the previous page
    };

    return (
        <>
            <h1>Hello, from Movie page {id}</h1>
            <button className="btn" onClick={handleGoBack}>
                Go back
            </button>
        </>
    );
}

export { Movie };