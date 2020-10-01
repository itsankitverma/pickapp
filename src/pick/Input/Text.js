import React from 'react'

const Text = (props) => {
    return(
        <>
            <input 
            type={props.type} 
            placeholder={props.placeholder} 
            name={props.name} 
            value={props.value}
            onChange={props.onChange}
            autoComplete="off"
            />
        </>
    )
}

export default Text