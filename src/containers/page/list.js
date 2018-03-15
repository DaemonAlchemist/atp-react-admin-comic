
import {connectWithLifecycle} from 'react-lifecycle-component';
import PageList from "../../components/page/list";
import {Page} from "../../reducer/page";
import {_, equals, prop, get, sortBy} from 'atp-pointfree';

export default connectWithLifecycle(
    (state, props) => ({
        pages: Page().select.some(get(state), _(equals(props.arcId), prop('arcId'))),
        sorter: props.sorter || sortBy('sortOrder')
    }),
    (dispatch, {arcId}) => ({
        componentDidMount: () => {
            dispatch(Page().action.collection.get({arcId}));
        },
        componentWillReceiveProps: function({arcId}) {
            if(arcId != this.props.arcId) {
                dispatch(Page().action.collection.get({arcId}));
            }
        }
    })
)(PageList);
