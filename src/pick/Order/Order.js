import React from 'react'

const Order = (props) => {
    return (
        <>
            <div>
                <p>{props.cc}  {props.cdc} {props.ono}</p>
                
                <p>{props.rno} {props.rqty[0]}</p>
            </div>  
            <div>
                <p>{props.ic[0]}  {props.aic[0]} {props.descr[0]}</p>
                
                <p>{props.upc[0]} {props.r_qty[0]} {props.uom[0]}</p>
            </div>   
        </>
    )
}
export default Order