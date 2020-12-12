import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    onClick: () => void
    dataCollapsed: boolean
}

function ControlledAccordion(props: AccordionPropsType) {

    {
        return (
            <div>
                <AccordionTitle onClick={ props.onClick}  title={props.title}/>
                {!props.dataCollapsed && <AccordionBody/>}

            </div>
        )
    }
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick = { props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default ControlledAccordion;