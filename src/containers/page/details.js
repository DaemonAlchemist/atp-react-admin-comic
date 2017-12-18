
import {connectWithLifecycle} from "react-lifecycle-component";
import PageDetails from '../../components/page/details';
import {Page} from "../../reducer/page";
import {Commentary} from "../../reducer/commentary";
import {Character} from "../../reducer/characters";
import {get} from "atp-pointfree";

export default connectWithLifecycle(
    (state, props) => ({
        page: Page().select.one(get(state), props.pageId),
        allCharacters: Character().select.all(get(state)),
        pageCharacters: props.pageId
            ? Character().select.byIdList(get(state), Page().characters.select.all(get(state), props.pageId))
            : []
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Page().action.fetch(props.pageId));
            dispatch(Commentary().action.collection.get({pageId: props.pageId}));
            dispatch(Character().action.collection.get({}));
        },
        updateImage: imageId => {dispatch(Page().action.update(props.pageId, {imageId}));},
        updatePage: (data, dispatch) => {dispatch(Page().action.update(props.pageId, data));},
        updateEnabled: enabled => {dispatch(Page().action.update(props.pageId, {enabled}))},
        onAddCharacter: character => dispatch(Page().characters.action.post(props.pageId, character.id)),
        onRemoveCharacter: character => dispatch(Page().characters.action.delete(props.pageId, character.id))
    })
)(PageDetails);
