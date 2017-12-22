
import {o} from "atp-sugar";
import {entityBoilerplate} from "atp-redux-entity";

export const commentaryType = 'comicCommentary';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const Commentary = () => entityBoilerplate(commentaryType, 'commentary');
