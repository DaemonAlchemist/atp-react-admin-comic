/**
 * Created by Andy on 4/19/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate} from "atp-redux-entity";
import {Page} from './page';
import {prop} from 'atp-pointfree';

export const arcType = 'comicArc';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const Arc = () => o(entityBoilerplate(arcType, 'arc')).as(arc => o(arc)
    .merge({
        select: {
            parent: (getState, id) => o(Arc().select.one(getState, id)).as(arc =>
                !arc.parentId ? null : Arc().select.one(getState, arc.parentId)
            ),
            parents: (getState, id) => o(Arc().select.one(getState, id)).as(arc =>
                !arc.parentId ? [] : Arc().select.lineage(getState, arc.parentId)
            ),
            parentIds: (getState, id) => Arc().select.parents(getState, id).map(prop('id')),
            lineage: (getState, id) => Arc().select.parents(getState, id).concat(Arc().select.one(getState, id)),
            lineageIds: (getState, id) => Arc().select.lineage(getState, id).map(prop('id'))
        },
        pages: arc.children('page', Page)
    })
).raw;
