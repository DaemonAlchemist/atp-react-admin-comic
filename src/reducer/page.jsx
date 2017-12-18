/**
 * Created by Andy on 4/19/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate} from "atp-redux-entity";
import {Commentary} from './commentary';
import {Character} from "./characters";

export const pageType = 'comicPage';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const Page = () => o(entityBoilerplate(pageType, 'page')).as(page => o(page)
    .merge({
        commentaries: page.children('commentary', Commentary),
        characters: page.children('character', Character)
    }).raw
);
