import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    onClick: () => void
    dataCollapsed: boolean
    items: Array<ItemType>
    onItemClick: (value: any) => void
}

function ControlledAccordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle onClick={ props.onClick}  title={props.title}/>
                {!props.dataCollapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick = { props.onClick}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onItemClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map( (it, index) => <li onClick={ () => {props.onItemClick(it.value)} } key={index}>{it.title}</li>)}
                {props.items.map( (it, index) => <li onClick={ () => {props.onItemClick(it.value)} } key={index}>{it.title}</li>)}
                {props.items.map( (it, index) => <li onClick={ () => {props.onItemClick(it.value)} } key={index}>{it.title}</li>)}
            </ul>
        </div>
    )
}

export default ControlledAccordion;