import React, {useState} from "react";
import {RatingValueType} from "./UncontrolledRating";

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}
type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => props.onClick(props.value)}> {props.selected === true ? <b>Star</b> : "Star"} </span>

}


export function ControledRating(props: RatingPropsType) {
    let [selectState, useSelect] = useState(0)


    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>

        </div>)


}

export default ControledRating