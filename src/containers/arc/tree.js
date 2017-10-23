/**
 * Created by Andy on 4/30/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import ArcTree from "../../components/arc/tree";
import {Arc} from "../../reducer/arc";

export default connectWithLifecycle(
    state => ({
        arcIds: Arc().select.some(() => state, arc => !arc.parentId).map(arc => arc.id),
        getObject: (state, id) => Arc().select.one(() => state, id),
        getContent: arc => {console.log(arc); return arc.name},
        getId: arc => arc.id,
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