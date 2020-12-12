import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UncontrolledRating, {RatingValueType} from "./components/Rating/UncontrolledRating";
import ControledRating from "./components/Rating/ControledRating";
import UncontrolledAccordion from "./components/Accordion/UncontroledAccordion";
import ControlledAccordion from "./components/Accordion/ControledAccordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";

function App() {

    let [ratingValue, useRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [boolOn, setBoolOn] = useState(false)

    return (
        <div className="App">
            <UncontrolledAccordion title={"Hello"}/>
            <UncontrolledAccordion title={"Second"}/>
            <ControlledAccordion title={"Control"} onClick={ () => {setAccordionCollapsed(!accordionCollapsed)}} dataCollapsed={accordionCollapsed}/>
            <UncontrolledRating/>
            <ControledRating value={ratingValue} onClick={useRatingValue}/>
            <UncontrolledOnOff handler={false}/>
            <ControlledOnOff handler={boolOn} toggleHandler={() => {setBoolOn(!boolOn)}}/>
        </div>
    );
}

export default App;
