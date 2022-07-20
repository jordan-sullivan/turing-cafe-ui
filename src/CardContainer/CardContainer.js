import React from "react"
import Card from "../Card/Card"
import "./CardContainer.css"

function CardContainer({reservations}) {

    const singleReservation = reservations.map(res => {
        return <Card key={res.id} 
                        name={res.name} 
                        date={res.date} 
                        time={res.time} 
                        number={res.number}/>
    })

    return(
        <div className="wrapper">
            {singleReservation}
        </div>
    )
}
export default CardContainer