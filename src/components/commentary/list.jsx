
import React from 'react';
import {PageLinkFull} from "../links";
import {UserLinkFull} from "atp-uac";
import {Panel, Table} from 'react-bootstrap';

export default ({comments}) =>
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
                    <td>{comment.text}</td>
                    <td className="text-danger"><i className="fa fa-trash" /></td>
                </tr>
            )}
            </tbody>
        </Table>
    </Panel>;
