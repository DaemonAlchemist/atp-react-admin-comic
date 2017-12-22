
import {o} from 'atp-sugar';
import {entityBoilerplate} from "atp-redux-entity";
import {Attribute} from './attribute';

export const characterType = 'comicCharacter';

//Selectors
export const selectedCharacterId = getState => getState().comic.characters.selectedCharacterId;

//Action types
export const actions = {
    selectCharacter: 'atp-comic/character/select'
}

const initialState = {
    selectedCharacterId: null
};

//Action creators
export const selectCharacter = characterId => ({type: actions.selectCharacter, characterId});

//Reducer
export default (state = initialState, action) => o(action.type).switch({
    [actions.selectCharacter]: () => o(state).merge({selectedCharacterId: action.characterId}).raw,
    default: () => state
});

//Standard REST entity selectors and actions
export const Character = () => o(entityBoilerplate(characterType, 'character')).as(character => o(character)
    .merge({
        attributes: character.children('attribute', Attribute)
    })
).raw;
