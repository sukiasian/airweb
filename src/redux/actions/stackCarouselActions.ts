import { type AnyAction } from 'redux';
import { ReduxStackCarouselAction } from '../../types/enums';

export const setActiveTabIndex = (payload: any): AnyAction => {
    return {
        type: ReduxStackCarouselAction.SET_ACTIVE_TAB_INDEX,
        payload
    };
};
