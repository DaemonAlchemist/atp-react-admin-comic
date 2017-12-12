
import {connect} from 'react-redux';
import PagePreview from '../../components/page/preview';
import {Page} from "../../reducer/page";

export default connect(
    (state, props) => ({
        page: Page().select.one(() => state, props.id)
    }),
    (dispatch, props) => ({
        onPageMove: info => {dispatch(Page().action.move(info.action, info.targetId, info.sourceId));},
        updatePage: (data, dispatch) => {dispatch(Page().action.update(props.id, data));},
    })
)(PagePreview);
