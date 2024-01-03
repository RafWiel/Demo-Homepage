import '../assets/not-found.css';
import { memo } from "react";

const NotFound = memo(() => {
    return (
        <div className="nf-container">
            <h1>404</h1>                   
            <h4>Page not Found</h4>            
        </div>
    );
});

export default NotFound;