import React from "react"


const Event = (props) => {
    return(
        <td className={'Event' + props.color}> 
            <h5> {props.event}</h5>
            <t>{props.location}</t>
                    
        </td>
    )
}

export default Event