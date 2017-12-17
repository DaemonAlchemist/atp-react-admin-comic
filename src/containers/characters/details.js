
import {connectWithLifecycle} from "react-lifecycle-component";
import CharacterDetails from '../../components/characters/details';
import {Character} from "../../reducer/characters";
import {Attribute} from "../../reducer/attribute";
import {get, equals, prop, _} from 'atp-pointfree';

export default connectWithLifecycle(
    (state, props) => ({
        character: Character().select.one(get(state), props.characterId),
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Character().action.fetch(props.characterId));
            dispatch(Attribute().action.collection.get({characterId: props.characterId}));
        },
        updateImage: imageId => {dispatch(Character().action.update(props.characterId, {imageId}));},
        updateCharacter: (data, dispatch) => {dispatch(Character().action.update(props.characterId, data));},
        updateAttribute: (data, dispatch) => {null}
    })
)(CharacterDetails);
