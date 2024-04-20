import React from "react"
import Header from './components/Header.jsx';
import Top from './components/Top.jsx'
import Card from './components/card.jsx'
import data from './components/data.js'

export default function App(){
  const cards = data.map((item)=>{
    return <Card
    img ={item.image} 
    rating = {item.rating}
    descr = {item.description}
    country = {item.country}
    price = {item.price}
    />
  })  
return(
  <>
  <Header />
  <div className="innerDiv">
  <Top />
  {cards}
  </div>
  </>
)
}