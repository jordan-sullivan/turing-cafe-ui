import React from "react"
import "./Card.css"

function Card() {

    return(
        <div className="border">
            <h3>Name</h3>
            <p>date</p>
            <p>time</p>
            <p># guests</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card