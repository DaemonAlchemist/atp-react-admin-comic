
import {connectWithLifecycle} from "react-lifecycle-component";
import ArcTree, {ArcTreeNode} from "../../components/arc/tree";
import {Arc} from "../../reducer/arc";
import {Page} from "../../reducer/page";
import {pageDragType} from "../../components/page/preview";
import {sortBy} from 'atp-pointfree';
import {hasPermission} from "atp-uac";
import {get} from "atp-pointfree";

const arcDragType = 'comic-arc';

export default connectWithLifecycle(
    (state, props) => ({
        arcIds: Arc().select.some(() => state, arc => !arc.parentId).map(arc => arc.id),
        getObject: (state, id) => Arc().select.one(() => state, id),
        getContent: ArcTreeNode,
        getId: arc => arc.id,
        getChildren: (state, id) => Arc().select.some(() => state, arc => arc.parentId === id),
        sorter: sortBy('sortOrder'),
        draggable: arcDragType,
        canDrag: hasPermission(get(state), "comic.arc.update"),
        canCreate: hasPermission(get(state), "comic.arc.create"),
        canDelete: hasPermission(get(state), "comic.arc.delete"),
        accepts: {
            [pageDragType]: true,
            [arcDragType]: (item, dropTargetProps) => !Arc()
                .select.lineageIds(() => state, dropTargetProps.id)
                .includes(item.id)
        },
    }),
    (dispatch, props) => ({
        componentDidMount: () => {
            dispatch(Arc().action.collection.get({}));
        },
        onReceiveDrop: ({action, sourceType, sourceId, targetId}) => {
            switch(sourceType) {
                case arcDragType: dispatch(Arc().action.move(action, targetId, sourceId)); break;
                case pageDragType: dispatch(Page().action.move('into', targetId, sourceId)); break;
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