
import React from 'react';
import {UserLinkFull} from "atp-uac";
import {Panel, Table, Button} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {Draggable, DropTarget, DropTargets, Active, Inactive, IsDragging, NotDragging} from 'atp-dnd';
import {sortBy} from 'atp-pointfree';
import {Icon} from 'react-font-awesome-5';
import {DeleteButton} from 'atp-ui';
import {HasPermission} from "atp-uac";
import marked from "marked";

export const commentaryDragType = 'comic-commentary';

export default ({pageId, userId, comments, onNewComment, onDeleteComment, updateComment, onCommentaryMove}) =>
    <Panel>
        <Panel.Heading>
            <Icon.Comment /> Commentary
            <HasPermission permissions={["comic.commentary.create"]}>
                <Button bsStyle="link" style={{float: "right", marginTop: "-2px"}} onClick={onNewComment(pageId, userId)}>
                    <Icon.Plus fixedWidth /> Add new commentary
                </Button>
            </HasPermission>
        </Panel.Heading>
        <Table fill>
            <thead>
            <tr>
                <HasPermission permissions={["comic.commentary.create"]}>
                    <th></th>
                </HasPermission>
                <th>Author</th>
                <th>Title</th>
                <th>Comment</th>
                <HasPermission permissions={["comic.commentary.create"]}>
                    <th></th>
                </HasPermission>
            </tr>
            </thead>
            <tbody>
                <HasPermission permissions={["comic.commentary.update"]}>
                    <DropTargets.TableRow key="beginningDrop" id={pageId} accepts={[commentaryDragType]} action="into" onMove={onCommentaryMove} />
                </HasPermission>
                {comments.sort(sortBy("sortOrder")).map(comment => [
                    <tr key={comment.id}>
                        <HasPermission permissions={["comic.commentary.create"]}>
                            <td>
                                <Draggable type={commentaryDragType} id={comment.id} key={comment.id}>
                                    <NotDragging><Icon.Bars fixedWidth /></NotDragging>
                                    <IsDragging><Icon.Square.regular /></IsDragging>
                                </Draggable>
                            </td>
                        </HasPermission>
                        <td><UserLinkFull userId={comment.userId} /></td>
                        <td>
                            <HasPermission yes permissions={["comic.commentary.create"]}>
                                <InlineEdit.Text
                                    id={"commentary.title.edit" + comment.id}
                                    value={comment.title}
                                    name="title"
                                    onSave={updateComment(comment.id)}
                                    size="regular"
                                />
                            </HasPermission>
                            <HasPermission no permissions={["comic.commentary.create"]}>
                                {comment.title}
                            </HasPermission>
                        </td>
                        <td>
                            <HasPermission yes permissions={["comic.commentary.create"]}>
                                <InlineEdit.Wysiwyg
                                    id={"commentary.text.edit" + comment.id}
                                    value={comment.text}
                                    name="text"
                                    onSave={updateComment(comment.id)}
                                    rows={3}
                                />
                            </HasPermission>
                            <HasPermission no permissions={["comic.commentary.create"]}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(comment.text || "")
                                    }}
                                />
                            </HasPermission>
                        </td>
                        <HasPermission yes permissions={["comic.commentary.create"]}>
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
                        </HasPermission>
                    </tr>,
                    <DropTargets.TableRow key={"afterDrop" + comment.id} id={comment.id} accepts={[commentaryDragType]} action="after" onMove={onCommentaryMove} />
                ])}
            </tbody>
        </Table>
    </Panel>;
