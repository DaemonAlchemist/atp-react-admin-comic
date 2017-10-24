/**
 * Created by Andrea on 10/23/2017.
 */

import {o} from 'atp-sugar';

//Selectors
export const selectedArcId = getState => getState().comic.dashboard.selectedArcId;

//Action types
export const actions = {
    selectArc: 'atp-comic/dashboard/arc/select'
}

const initialState = {
    selectedArcId: null
};

//Action creators
export const selectArc = arcId => ({type: actions.selectArc, arcId});

//Reducer
export default (state = initialState, action) => o(action.type).switch({
    [actions.selectArc]: () => o(state).merge({selectedArcId: action.arcId}).raw,
    default: () => state
});