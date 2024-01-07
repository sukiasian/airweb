import { type AnyAction } from 'redux';
import { ReduxTeamAction } from '../../types/enums';

export interface PickedUserInfo {
    image: string
    history: string
}

export interface TeamState {
    pickedUserInfo?: PickedUserInfo
}

const initialState: TeamState = {};

export const teamReducer = (state = initialState, action: AnyAction): TeamState => {
    switch (action.type) {
        case ReduxTeamAction.SET_ACTIVE_MEMBER_INFO:
            return {
                ...state,
                pickedUserInfo: action.payload
            };

        default:
            return state;
    }
};
