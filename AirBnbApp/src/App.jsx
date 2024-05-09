import React from "react"
import Header from './components/Header.jsx';
import Top from './components/Top.jsx'
import Card from './components/card/card.jsx'
import data from './components/data.js'
import pic from './assets/katie.png'

export default function App(){
  const cards = data.map((item)=>{
    return <Card
    img ={pic} 
    rating = {item.rating}
    descr = {item.description}
    country = {item.country}
    price = {item.price}
    />
  })  
return(
  <div className='cardDiv'>
  <Header />
  <div className="innerDiv">
  <Top />
  {cards}
  </div>
  </div>
)
}