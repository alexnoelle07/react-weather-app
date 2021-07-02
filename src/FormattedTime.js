import React from "react";
import "./Weather.css";

export default function FormattedTime(props) {
    let hours = props.time.getHours();
    let minutes = props.time.getMinutes();
    let mode = document.getElementsByClassName("Weather midnight");


    if (minutes < 10) {
        minutes = `0${minutes}`;
    } 

    return (
        <div>
        {hours}:{minutes}
        
        </div>
        
    );
}
/* logic for changing background

    if (hours < 23) {
        mode.classList.add("midnight").remove("evening");
    } if (hours < 19) {
        mode.classList.add("evening").remove("afternoon");
    } if(hours < 15) {
        mode.classList.add("afternoon").remove("dayTime");
    } if (hours < 11) {
        mode.classlist.add("dayTime").remove("morning");
    } if (hours < 6) {
        mode.classList.add("morning").remove("midnight");
    } 

    */