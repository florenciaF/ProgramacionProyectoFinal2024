import React from 'react'

export const Card = (props) => {
  return (
    <>
        <div className="card" style={{ width: "15rem" }}>
            <img src={require(`../img/${props.img}`) } 
                  className="card-img-top" alt="..." 
                  style={{height:"235px", width: "235px"}}  
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    </>
  )
}
