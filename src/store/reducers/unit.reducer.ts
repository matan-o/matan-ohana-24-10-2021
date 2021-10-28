import { unitAction } from './../actions/unit.actions';

export interface UnitState {
    unit: "F" | "C";
}

const initialState: UnitState = {
  unit: "F",
};

export function unitReducer(
    state = initialState,
    action: unitAction
): UnitState {
    switch (action.type) {
        case "UNIT_TOGGLED":
            return {
                ...state,
                unit: action.payload.unit
            };
            
        default:
            return state;
    }
}
