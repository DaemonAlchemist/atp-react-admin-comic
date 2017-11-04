/**
 * Created by Andy on 4/30/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import ArcTree from "../../components/arc/tree";
import {Arc} from "../../reducer/arc";
import {Page} from "../../reducer/page";
import {pageDragType} from "../page/preview";

const arcDragType = 'comic-arc';

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
        dragType: arcDragType,
        accepts: {
            [pageDragType]: item => {
                return true;
            }
        },
        onReceiveDrop: ({action, sourceType, sourceId, targetId}) => {
            switch(sourceType) {
                case arcDragType: dispatch(Arc().action.move(action, targetId, sourceId)); break;
                //TODO:  Use move action for page moves
                case pageDragType: dispatch(Page().action.update(sourceId, {arcId: targetId})); break;
                default: throw "Unsupported source type: " + sourceType; break;
            }
        },
        onAddChild: parentId => {
            dispatch(Arc().action.create({name: "New story arc", parentId}));
        },
        onDelete: parentId => {
            dispatch(Arc().action.delete(parentId));
        }
    })
)(ArcTree);