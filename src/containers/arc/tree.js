/**
 * Created by Andy on 4/30/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import ArcTree from "../../components/arc/tree";
import {Arc} from "../../reducer/arc";

export default connectWithLifecycle(
    state => ({
        arcs: Arc().select.some(() => state, arc => !arc.parentId),
        getObject: id => Arc().select.one(() => state, id),
        getChildren: (state, id) => Arc().select.some(() => state, arc => arc.parentId === id),
        sorter: (a, b) => a.sortOrder - b.sortOrder
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Arc().action.collection.get({}));
        },
        onClick: arcId => dispatch(props.onClick(arcId)),
        onMove: (arcId, targetId, position) => dispatch(props.onMove(arcId, targetId, position))
    })
)(ArcTree);