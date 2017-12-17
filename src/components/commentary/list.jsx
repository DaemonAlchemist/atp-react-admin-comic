
import React from 'react';
import {UserLinkFull} from "atp-uac";
import {Panel, Table, Button} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {Draggable, DropTarget, DropTargets, Active, Inactive, IsDragging, NotDragging} from 'atp-dnd';
import {sortBy} from 'atp-pointfree';

export const commentaryDragType = 'comic-commentary';

export default ({pageId, userId, comments, onNewComment, onDeleteComment, updateComment, onCommentaryMove}) =>
    <Panel  header={
        <div>
            <i className="fa fa-comment"></i> Commentary
            <Button bsStyle="primary" bsSize="xsmall" style={{float: "right"}} onClick={onNewComment(pageId, userId)}>
                <i className="fa fa-plus fa-fw" />
            </Button>
        </div>
    }>
        <Table fill>
            <thead>
            <tr>
                <th></th>
                <th>Author</th>
                <th>Comment</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <DropTargets.TableRow key="beginningDrop" id={pageId} accepts={[commentaryDragType]} action="into" onMove={onCommentaryMove} />
                {comments.sort(sortBy("sortOrder")).map(comment => [
                    <tr key={comment.id}>
                        <td>
                            <Draggable type={commentaryDragType} id={comment.id} key={comment.id}>
                                <NotDragging><i className="fa fa-bars fa-fw" /></NotDragging>
                                <IsDragging><i className="fa fa-square-o fa-fw" /></IsDragging>
                            </Draggable>
                        </td>
                        <td><UserLinkFull userId={comment.userId} /></td>
                        <td><InlineEdit.Wysiwyg
                            id={"commentart.text.edit" + comment.id}
                            value={comment.text}
                            name="text"
                            onSave={updateComment(comment.id)}
                            size="default"
                            rows={3}
                        /></td>
                        <td className="text-danger">
                            <i className="fa fa-trash" onClick={onDeleteComment(comment.id)}/>
                        </td>
                    </tr>,
                    <DropTargets.TableRow key={"afterDrop" + comment.id} id={comment.id} accepts={[commentaryDragType]} action="after" onMove={onCommentaryMove} />
                ])}
            </tbody>
        </Table>
    </Panel>;
