import React from 'react'
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <div id="wrapper">
            <img className="notfound" height="500px" src="assets/404.png" alt="" />
            <div id="info">
                <h3 className="text">This page could not be found</h3>
             </div>
        </div >
    )
}

export default PageNotFound