import React from "react"
import Header from './components/Header.jsx';
import Top from './components/Top.jsx'
import Card from './components/card/card.jsx'
import data from './components/data.js'
import pic from './assets/katie.png'
// Notification 
import '../node_modules/rsuite/dist/rsuite.min.css'; 
import { Notification, Button } from 'rsuite'; 
import { useToaster } from 'rsuite/toaster'; 

export default function App(){
  const toaster = useToaster(); 
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
  <div style={{ margin: 100 }}> 
            <h3 style={{ color: 'green' }}> 
                GeeksforGeeks 
            </h3> 
              
            <h3>React Suite Notification toaster Methods</h3> 
            <br /><br /> 
              
            <Button onClick={() => toaster.push( 
                <Notification type={'info'} 
                    header={'Info'} duration={4000}> 
                    <h4> Your message . </h4> 
                </Notification>, { placement: 'topStart' })}> 
                Click Here ! 
            </Button><br /><br /> 
              
            <Button onClick={() => toaster.remove()}> 
                Click to Remove ! 
            </Button> 
        </div> 
  </div>
  </div>
)
}