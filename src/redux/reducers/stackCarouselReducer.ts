import { type AnyAction } from 'redux';
import { ReduxStackCarouselAction, StackTab } from '../../types/enums';

export interface StackCarouselState {
    activeTab: StackTab
}

const initialState: StackCarouselState = {
    activeTab: StackTab.FRONTEND
};

export const stackCarouselReducer = (state = initialState, action: AnyAction): StackCarouselState => {
    switch (action.type) {
        case ReduxStackCarouselAction.SET_ACTIVE_TAB_INDEX:
            return {
                ...state,
                activeTab: action.payload
            };

        default:
            return state;
    }
};
