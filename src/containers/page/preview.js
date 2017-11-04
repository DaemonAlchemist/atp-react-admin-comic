/**
 * Created by Andrea on 11/4/2017.
 */

import {connect} from 'react-redux';
import PagePreview from '../../components/page/preview';
import {Page} from "../../reducer/page";
import {dragSource} from 'atp-dnd';
import {compose} from 'atp-pointfree';

export const pageDragType = 'comic-page';

export default compose(
    dragSource(pageDragType),
    connect(
        (state, props) => ({
            page: Page().select.one(() => state, props.id)
        }),
        (dispatch, props) => ({

        })
    )
)(PagePreview);
