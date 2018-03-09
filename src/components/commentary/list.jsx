
import React from 'react';
import {UserLinkFull} from "atp-uac";
import {Panel, Table, Button} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {Draggable, DropTarget, DropTargets, Active, Inactive, IsDragging, NotDragging} from 'atp-dnd';
import {sortBy} from 'atp-pointfree';
import {Icon} from 'react-font-awesome-5';
import {DeleteButton} from 'atp-ui';

export const commentaryDragType = 'comic-commentary';

export default ({pageId, userId, comments, onNewComment, onDeleteComment, updateComment, onCommentaryMove}) =>
    <Panel>
        <Panel.Heading>
            <Icon.Comment /> Commentary
            <Button bsStyle="link" style={{float: "right", marginTop: "-2px"}} onClick={onNewComment(pageId, userId)}>
                <Icon.Plus fixedWidth /> Add new commentary
            </Button>
        </Panel.Heading>
        <Table fill>
            <thead>
            <tr>
                <th></th>
                <th>Author</th>
                <th>Title</th>
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
                                <NotDragging><Icon.Bars fixedWidth /></NotDragging>
                                <IsDragging><Icon.Square.regular /></IsDragging>
                            </Draggable>
                        </td>
                        <td><UserLinkFull userId={comment.userId} /></td>
                        <td><InlineEdit.Text
                            id={"commentary.title.edit" + comment.id}
                            value={comment.title}
                            name="title"
                            onSave={updateComment(comment.id)}
                            size="default"
                        /></td>
                        <td><InlineEdit.Wysiwyg
                            id={"commentart.text.edit" + comment.id}
                            value={comment.text}
                            name="text"
                            onSave={updateComment(comment.id)}
                            size="default"
                            rows={3}
                        /></td>
                        <td>
                            <DeleteButton
                                id={`commentaryDeleteBtn${comment.id}`}
                                onClick={onDeleteComment(comment.id)}
                                message="Are you sure you want to delete this commentary?  You can't get it back if you do."
                                confirmText="Yes, delete it"
                                cancelText="No, keep it"
                                width="250px"
                            />
                        </td>
                    </tr>,
                    <DropTargets.TableRow key={"afterDrop" + comment.id} id={comment.id} accepts={[commentaryDragType]} action="after" onMove={onCommentaryMove} />
                ])}
            </tbody>
        </Table>
    </Panel>;
