import React from 'react';
import "./Icon.css"


function Icons(props) {
    return (
        <div className="icon">
         <div>
        < props.icon className="profile"/>
        <p>{props.name}</p>
        </div>

        </div>
        



            
        
    )
}

export default Icons
