/**
 * Created by Andy on 4/19/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate} from "atp-redux-entity";
import {Page} from './page';

export const arcType = 'comicArc';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const Arc = () => o(entityBoilerplate(arcType, 'arc')).as(arc => o(arc)
    .merge({
        pages: arc.children('page', Page)
    })
).raw;
