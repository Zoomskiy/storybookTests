import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5




 function UncontrolledRating() {
    let [selectState, setSelect] = useState(0)


    return (
        <div>
            <Star selected={selectState > 0} useSelects={() => {setSelect(1)}} />
            <Star selected={selectState > 1} useSelects={() => {setSelect(2)}} />
            <Star selected={selectState > 2} useSelects={() => {setSelect(3)}} />
            <Star selected={selectState > 3} useSelects={() => {setSelect(4)}} />
            <Star selected={selectState > 4} useSelects={() => {setSelect(5)}} />

        </div>)


}
type StarPropsType = {
    selected: boolean
    useSelects: () => void
}

function Star(props: StarPropsType) {
    // if (props.selected === true) {
    //     return <span><b>Star</b> </span>
    // } else {
    //     return <span>Star </span>
    // }
    return <span onClick={() => {props.useSelects()}}>
        {props.selected ? <b>Star</b> : "Star"}
    </span>

}
export default UncontrolledRating