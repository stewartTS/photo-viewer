import React from "react";
import './PhotoViewer.css';


function PhotoViewer({src}) {
    
    return (
        <div className="main">
            <img className="main-img" src={src} />
        </div>
    );
}

export {PhotoViewer};