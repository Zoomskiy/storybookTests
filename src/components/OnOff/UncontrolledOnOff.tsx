import React, {useState} from "react";
import o from "./OnOffStyle.module.css"


type OnOffPropsType = {
    handler: boolean
}

export function UncontrolledOnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }
    return (
        <div className={o.wrapper}>
            <div style={onStyle} onClick={() => {setOn(!on)}}></div>
            <div style={offStyle} onClick={() => {setOn(!on)}}></div>
            <div style={indicatorStyle}></div>
        </div>
    )
}