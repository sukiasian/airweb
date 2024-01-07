import { type AnyAction } from 'redux';
import { type PickedUserInfo } from '../reducers/teamReducer';
import { ReduxTeamAction } from '../../types/enums';

export const setActiveMemberInfo = (payload: PickedUserInfo): AnyAction => {
    return {
        type: ReduxTeamAction.SET_ACTIVE_MEMBER_INFO,
        payload
    };
};
