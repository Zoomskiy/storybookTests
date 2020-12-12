import React, {useState} from "react";
import { action } from "@storybook/addon-actions";
import {ControledRating} from "./ControledRating";
import {RatingValueType} from "./UncontrolledRating";

export default {
    title: "Rating stories",
    component: ControledRating
}

export const EmptyStar = () => <ControledRating value={0} onClick={x => x}/>
export const Rating1 = () => <ControledRating value={1} onClick={x => x}/>
export const Rating2 = () => <ControledRating value={2} onClick={x => x}/>
export const Rating3 = () => <ControledRating value={3} onClick={x => x}/>
export const Rating4 = () => <ControledRating value={4} onClick={x => x}/>
export const Rating5 = () => <ControledRating value={5} onClick={x => x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <ControledRating value={rating} onClick={setRating}/>
}


