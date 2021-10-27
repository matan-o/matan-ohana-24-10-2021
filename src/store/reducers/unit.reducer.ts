import { unitAction } from './../actions/unit.actions';

export interface unitState {
    unit: "F" | "C";
}

const initialState: unitState = {
    unit: "F"
}

export function favoriteReducer(
    state = initialState,
    action: unitAction
): unitState {
    switch (action.type) {
        case "UNIT_TOGGLED":
            return {
                ...state,
                unit: action.payload === "F" ? "C" : "F"
            };
            
        default:
            return state;
    }
}
