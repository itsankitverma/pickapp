import React from 'react'

const Item = (props) => {
    return (
        <> 
            <div>
                <p>{props.ic[0]}  {props.aic[0]} {props.descr[0]}</p>
                
                <p>{props.upc[0]} {props.r_qty[0]} {props.uom[0]}</p>
            </div>   
        </>
    )
}
export default Item