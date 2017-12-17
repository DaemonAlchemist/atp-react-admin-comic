
import {connectWithLifecycle} from 'react-lifecycle-component';
import AttributeList from "../../components/characters/attribute-list";
import {Attribute} from "../../reducer/attribute";
import {get, equals, prop, _} from 'atp-pointfree';

export default connectWithLifecycle(
    (state, props) => ({
        attributes: Attribute().select.some(get(state), _(equals(props.character.id), prop('characterId')))
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Attribute().action.collection.get({characterId: props.character.id}));
        },
        newAttribute: () => {dispatch(Attribute().action.create({characterId: props.character.id}));},
        updateAttribute: attributeId => (data, dispatch) => {dispatch(Attribute().action.update(attributeId, data));},
        onAttributeMove: info => {dispatch(Attribute().action.move(info.action, info.targetId, info.sourceId));},
    })
)(AttributeList);
