/**
 * Created by Andy on 4/30/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import ArcTree from "../../components/arc/tree";
import {Arc} from "../../reducer/arc";

export default connectWithLifecycle(
    (state, props) => ({
        arcIds: Arc().select.some(() => state, arc => !arc.parentId).map(arc => arc.id),
        getObject: (state, id) => Arc().select.one(() => state, id),
        getContent: arc => arc.name,
        getId: arc => arc.id,
        getChildren: (state, id) => Arc().select.some(() => state, arc => arc.parentId === id),
        sorter: (a, b) => a.sortOrder - b.sortOrder
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Arc().action.collection.get({}));
        },
        onClick: props.onClick,
        onMove: ({dropEffect, sourceId, targetId}) => {
            console.log("Move story arc " + sourceId + " " + dropEffect + " arc " + targetId);
            dispatch(Arc().action.move(dropEffect, targetId, sourceId));
        },
        onAddChild: parentId => {
            dispatch(Arc().action.create({name: "New story arc", parentId}));
        },
        onDelete: parentId => {
            dispatch(Arc().action.delete(parentId));
        }
    })
)(ArcTree);