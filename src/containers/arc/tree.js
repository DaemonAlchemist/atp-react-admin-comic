/**
 * Created by Andy on 4/30/2017.
 */

import {connect} from "react-redux";
import ArcTree from "../../components/arc/tree";
import {Arc} from "../../reducer/arc";
import {a} from "atp-sugar";

export default connect(
    state => ({
        arcs: Arc().selector.list(state, {}),
        parentArcId: false,
        offset: 0
    }),
    (dispatch, props) => ({
        onClick: arcId => dispatch(props.onClick(arcId)),
        onMove: (arcId, targetId, position) => dispatch(props.onMove(arcId, targetId, position))
    })
)(ArcTree);