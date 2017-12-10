
import {connectWithLifecycle} from "react-lifecycle-component";
import PageDetails from '../../components/page/details';
import {Page} from "../../reducer/page";

export default connectWithLifecycle(
    (state, props) => ({
        page: Page().select.one(() => state, props.pageId)
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Page().action.fetch(props.pageId));
        },
        updateImage: imageId => {dispatch(Page().action.update(props.pageId, {imageId}));},
        updatePage: (data, dispatch) => {dispatch(Page().action.update(props.pageId, data));},
        updateEnabled: enabled => {dispatch(Page().action.update(props.pageId, {enabled}))}
    })
)(PageDetails);
