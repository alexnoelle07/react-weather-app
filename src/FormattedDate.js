import React from "react";

export default function FormattedDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let today = props.date.getDate();
    let year = props.date.getFullYear();
    return (
    <div>
        {day} {month} {today}, {year}
    </div>
    );
}