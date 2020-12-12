import React, {useState} from "react";
import { action } from "@storybook/addon-actions";
import {ControlledOnOff} from "./ControlledOnOff";

export default {
    title: "OnOff Stories",
    component: ControlledOnOff
}

const callback = action("Callback fired")

export const OnMode = () => <ControlledOnOff toggleHandler={ () => {callback()} } handler={true}/>
export const OffMode = () => <ControlledOnOff toggleHandler={ () => {callback()} } handler={false}/>

export const ModeChanger = () => {
    const [mode, setMode] = useState<boolean>(false)
    return <ControlledOnOff handler={mode} toggleHandler={ () => callback()}/>
}
    

