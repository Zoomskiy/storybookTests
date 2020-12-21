import React, {useState} from "react";
import ControlledAccordion from "./ControledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion stories",
    component: ControlledAccordion
}
const callback = action("Callback fired")
const clickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <ControlledAccordion title={"Menu"} onClick={callback} dataCollapsed={true} items={[]} onItemClick={clickCallback}/>
export const UserUncollapsedMode = () => <ControlledAccordion title={"Users"} onClick={callback} dataCollapsed={false} items={[{title:"Dima",value: 1 }, {title:"Sasha",value: 2}, {title:"Alex", value: 3}, {title: "Michael", value: 4}]} onItemClick={clickCallback}/>


export const ModeChange = () => {
    let [value, setValue] = useState<boolean>(false)

        return (
            <ControlledAccordion title={"Smt"} onClick={() => setValue(!value)} dataCollapsed={value} items={[ {title:"Dima",value: 1 }, {title:"Sasha",value: 2}, {title:"Alex", value: 3}, {title: "Michael", value: 4} ]} onItemClick={clickCallback}/>
            )

}