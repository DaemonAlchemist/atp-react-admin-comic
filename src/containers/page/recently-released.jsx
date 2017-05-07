/**
 * Created by Andy on 4/18/2017.
 */

import {connect} from "react-redux";
import PageList from "../components/page/list";

export default connect(
    (state, props) => ({
        pages: props.pages
    }),
    (dispatch, props) => ({
        onClick: () => dispatch(props.onClick)
    })
)(PageList);