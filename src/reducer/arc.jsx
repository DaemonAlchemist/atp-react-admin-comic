/**
 * Created by Andy on 4/19/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate, relatedEntityBoilerplate} from "atp-entity";

export const arcType = 'comicArc';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const Arc = () => entityBoilerplate(arcType, 'arc');
export const ArcPage = arcId => relatedEntityBoilerplate(arcType, 'arc/' + arcId + "/page");