import React from "react";
import { dummyCurrentCondition } from "../api/dummyData/currentCondition";
import CurrentConditionItem from "../components/CurrentConditionItem";

const Favorites: React.FC = () =>{
    return(
        <div className="favorites">
            <h1>Favorites</h1>
            <div className="favorite-cities">
                <CurrentConditionItem data={dummyCurrentCondition}/>
                <CurrentConditionItem data={dummyCurrentCondition}/>
                <CurrentConditionItem data={dummyCurrentCondition}/>
                <CurrentConditionItem data={dummyCurrentCondition}/>
                <CurrentConditionItem data={dummyCurrentCondition}/>
            </div>
        </div>
    )
}

export default Favorites;