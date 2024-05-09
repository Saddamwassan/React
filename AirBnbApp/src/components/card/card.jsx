import React from "react"
import './card.css'
export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="katie" className="katie"/>
            <div className="ratingDiv">
            <i className="fa-solid fa-star star"></i>
            <span className="rating">{props.rating}</span>
            <span className="country">({props.reviewCount}).{props.country}</span>
            </div>
            <p className="description">{props.title}</p>
            <p className="para"><span className="price">From ${props.price}</span>/person</p>
        </div>
    )
}