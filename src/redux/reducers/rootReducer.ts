import { combineReducers, type Reducer } from 'redux';
import { teamReducer, type TeamState } from './teamReducer';
import { stackCarouselReducer, type StackCarouselState } from './stackCarouselReducer';

export interface ReduxState {
    teamReducer: TeamState
    stackCarouselReducer: StackCarouselState
}

const rootReducer: Reducer<ReduxState> = combineReducers({
    teamReducer,
    stackCarouselReducer
});

export default rootReducer;
