import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <i className={props.cards.icon} id="card--icon"></i>
            <div className="card--title">{props.cards.title}</div>
            <p className="card--description">{props.cards.description}</p>
        </div>
    )
}