/**
 * Created by Andrea on 11/4/2017.
 */

import {connect} from 'react-redux';
import PagePreview from '../../components/page/preview';
import {Page} from "../../reducer/page";
import {compose} from 'atp-pointfree';

export default compose(
    //dragSource(pageDragType),
    connect(
        (state, props) => ({
            page: Page().select.one(() => state, props.id)
        }),
        (dispatch, props) => ({
            onPageMove: info => {dispatch(Page().action.move(info.action, info.targetId, info.sourceId));},
            updatePage: (data, dispatch) => {dispatch(Page().action.update(props.id, data));},
        })
    )
)(PagePreview);
