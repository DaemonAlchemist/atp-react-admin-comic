/**
 * Created by Andrea on 11/2/2017.
 */

import {connectWithLifecycle} from 'react-lifecycle-component';
import PageList from "../../components/page/list";
import {Page} from "../../reducer/page";

export default connectWithLifecycle(
    (state, props) => ({
        pages: Page().select.some(() => state, props.filter)
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Page().action.collection.get());
        }
    })
)(PageList);
