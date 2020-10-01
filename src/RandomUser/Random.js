import React from 'react'
const Random = (props) => {
        return (
        <>
             <div>
                <h1>{props.title} {props.first} {props.last}</h1>
                 <p>{props.cell}</p>
                 <p>{props.email}</p>
                 <img src={props.thumbnail}/>
            </div>
        </>
    )
}

export default Random