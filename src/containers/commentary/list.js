
import {connect} from 'react-redux';
import CommentaryList from '../../components/commentary/list';
import {Commentary} from "../../reducer/commentary";
import {_, equals, prop, get} from 'atp-pointfree';

export default connect(
    (state, props) => ({
        comments:  Commentary().select.some(get(state), _(equals(props.pageId), prop('pageId')))
    }),
    (dispatch, props) => ({

    })
)(CommentaryList);
