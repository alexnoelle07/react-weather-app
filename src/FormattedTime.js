import React from "react";

export default function FormattedTime(props) {
    let hours = props.time.getHours();
    let minutes = props.time.getMinutes();


    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
        <div>
        {hours}:{minutes}
        
        </div>
        
    );
}