import React, {useState} from "react";
import ControlledAccordion from "./ControledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion stories",
    component: ControlledAccordion
}
const callback = action("Callback fired")

export const MenuCollapsedMode = () => <ControlledAccordion title={"Menu"} onClick={callback} dataCollapsed={false}/>
export const UserUncollapsedMode = () => <ControlledAccordion title={"Users"} onClick={callback} dataCollapsed={true}/>


export const ModeChange = () => {
    let [value, setValue] = useState<boolean>(false)

        return (
            <ControlledAccordion title={"Smt"} onClick={() => setValue(!value)} dataCollapsed={value}/>
            )

}