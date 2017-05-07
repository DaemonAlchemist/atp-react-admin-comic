/**
 * Created by Andy on 4/19/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate, relatedEntityBoilerplate} from "atp-entity";
import {arcType} from "./arc";

export const pageType = 'comicPage';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const Page = () => entityBoilerplate(pageType, 'page');
export const PageArc = pageId => relatedEntityBoilerplate(arcType, 'page/' + pageId + "/arc");