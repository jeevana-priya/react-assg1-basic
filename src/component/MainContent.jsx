import React from 'react'

function MainContent(props) {
  return (
    <main>
        <div>
            <h1>Order groceries for delivery or pickup today
            </h1>
         </div>
         <div className="card-container">
         <img
          src={props.img.src}
          alt={props.img.alt}
         />
         <h2>{props.title}</h2>
         <p>{props.text}</p>
         </div>
         
        
    </main>
  )
}

export default MainContent
