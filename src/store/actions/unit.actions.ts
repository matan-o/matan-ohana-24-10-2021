import { StoreAction } from "./StoreAction";

export type unitActionType = "UNIT_TOGGLED";

export interface unitAction extends StoreAction<unitActionType> { }

function unitToggled(unit: string): unitAction {
    return {
        type: "UNIT_TOGGLED",
        payload: {
            unit,
        },
    };
}


export const unitActions = {
   
};
