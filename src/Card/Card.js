import React from "react"
import "./Card.css"

function Card({key, name, date, time, number}) {

    return(
        <div className="border">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card