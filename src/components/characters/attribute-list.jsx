
import React from 'react';
import {o} from 'atp-sugar';
import {sortBy} from 'atp-pointfree';
import {Panel, Table, Button} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {Draggable, DropTargets, NotDragging, IsDragging} from 'atp-dnd';

export const attributeDragType = 'comic-attribute';

export default ({character, attributes, updateAttribute, onAttributeMove, newAttribute, deleteAttribute}) =>
    <Panel header={
        <span>
            <i className="fa fa-list" /> {character.name}'s Attributes
            <Button onClick={newAttribute} bsStyle="primary" bsSize="xsmall" style={{float: "right"}}>
                <i className="fa fa-plus fa-fw" />
            </Button>
        </span>
    }>
        <Table fill>
            <thead>
            <tr>
                <th style={{width: "20px"}}></th>
                <th>Name</th>
                <th>Value</th>
                <th style={{width: "20px"}}></th>
            </tr>
            </thead>
            <tbody>
                <DropTargets.TableRow key="beginningDrop" id={character.id} accepts={[attributeDragType]} action="into" onMove={onAttributeMove} />
                {o(attributes).values().sort(sortBy('sortOrder')).map(att => [
                    <tr key={att.id}>
                        <td>
                            <Draggable type={attributeDragType} id={att.id} key={att.id}>
                                <NotDragging><i className="fa fa-bars fa-fw" /></NotDragging>
                                <IsDragging><i className="fa fa-square-o fa-fw" /></IsDragging>
                            </Draggable>
                        </td>
                        <td>
                            <InlineEdit.Text
                                id={"att.name.edit" + att.id}
                                value={att.name}
                                label="Name"
                                name="Name"
                                onSave={updateAttribute(att.id)}
                                size="small"
                            />
                        </td>
                        <td>
                            <InlineEdit.Text
                                id={"att.value.edit" + att.id}
                                value={att.value}
                                label="Value"
                                name="value"
                                size="small"
                                onSave={updateAttribute(att.id)}
                            />
                        </td>
                        <td className="text-danger">
                            <i className="fa fa-trash" onClick={deleteAttribute(att.id)} />
                        </td>
                    </tr>,
                    <DropTargets.TableRow
                        key={"afterDrop" + att.id}
                        id={att.id}
                        accepts={[attributeDragType]}
                        action="after"
                        onMove={onAttributeMove}
                    />
                ])}
                {o(attributes).values().length === 0 && <tr><td></td><td colSpan={10}><em>No attributes created</em></td></tr>}
            </tbody>
        </Table>
    </Panel>;
