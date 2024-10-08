import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div>
            This page doesn't exist. Go to <Link to="/">Home</Link>
        </div>
    )
}
export {NotFound};