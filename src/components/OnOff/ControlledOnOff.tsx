import React, {useState} from "react";
import o from "./OnOffStyle.module.css"


type OnOffPropsType = {
    handler: boolean
    toggleHandler: () => void
}

export function ControlledOnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.handler ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.handler ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.handler ? "green" : "red"
    }
    return (
        <div className={o.wrapper}>
            <div style={onStyle} onClick={props.toggleHandler}></div>
            <div style={offStyle} onClick={props.toggleHandler}></div>
            <div style={indicatorStyle}></div>
        </div>
    )
}