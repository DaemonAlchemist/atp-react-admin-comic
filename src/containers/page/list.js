/**
 * Created by Andrea on 11/2/2017.
 */

import {connectWithLifecycle} from 'react-lifecycle-component';
import PageList from "../../components/page/list";
import {Page} from "../../reducer/page";
import {sortBy} from 'atp-pointfree';

export default connectWithLifecycle(
    (state, props) => ({
        pages: Page().select.some(() => state, page => page.arcId == props.arcId),
        sorter: props.sorter || sortBy('sortOrder')
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Page().action.collection.get());
        }
    })
)(PageList);
