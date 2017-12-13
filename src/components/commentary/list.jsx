
import React from 'react';
import {PageLinkFull} from "../links";
import {UserLinkFull} from "atp-uac";
import {Panel, Table} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';

export default ({comments, updateComment}) =>
    <Panel  header={<span><i className="fa fa-comment"></i> Commentary</span>}>
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
            {comments.map(comment =>
                <tr key={comment.id}>
                    <td><i className="fa fa-bars" /></td>
                    <td><UserLinkFull userId={comment.userId} /></td>
                    <td><PageLinkFull pageId={comment.pageId} /></td>
                    <td><InlineEdit.Textarea
                        id={"commentart.text.edit" + comment.id}
                        value={comment.text}
                        name="text"
                        onSave={updateComment(comment.id)}
                        size="default"
                        rows={3}
                    /></td>
                    <td className="text-danger"><i className="fa fa-trash" /></td>
                </tr>
            )}
            </tbody>
        </Table>
    </Panel>;
