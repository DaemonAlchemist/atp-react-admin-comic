
import React from 'react';
import {PageLinkFull} from "../links";
import {UserLinkFull} from "atp-uac";
import {Panel, Table, Button} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {Draggable, DropTarget, Active, Inactive} from 'atp-dnd';
import {sortBy} from 'atp-pointfree';

export const commentaryDragType = 'comic-commentary';

const CommentaryDropTarget = ({id, action, onCommentaryMove}) =>
    <DropTarget
        component="tr"
        style={{position: "relative"}}
        action={action}
        accepts={[commentaryDragType]}
        id={id}
        onReceiveDrop={onCommentaryMove}
    >
        <Active>
            <td colSpan="5"><div style={{border: "dashed 1px"}}>&nbsp;</div></td>
        </Active>
        <Inactive>
            <td colSpan="5" style={{
                height: "7px",
                position: "absolute",
                width: "100%",
                zIndex: 999,
                background: "transparent"
            }}/>
        </Inactive>
    </DropTarget>;

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
                <th>Page</th>
                <th>Comment</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <CommentaryDropTarget id={pageId} action="into" onCommentaryMove={onCommentaryMove} />
                {comments.sort(sortBy("sortOrder")).map(comment => [
                    <Draggable type={commentaryDragType} id={comment.id} component="tr" key={comment.id}>
                        <td><i className="fa fa-bars" /></td>
                        <td><UserLinkFull userId={comment.userId} /></td>
                        <td><PageLinkFull pageId={comment.pageId} /></td>
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
                    </Draggable>,
                    <CommentaryDropTarget id={comment.id} action="after" onCommentaryMove={onCommentaryMove} />
                ])}
            </tbody>
        </Table>
    </Panel>;
