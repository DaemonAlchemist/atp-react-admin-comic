
import React from 'react';
import {o} from 'atp-sugar';
import {sortBy} from 'atp-pointfree';
import {Panel, Table, Button} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {Draggable, DropTargets, NotDragging, IsDragging} from 'atp-dnd';
import {Icon} from 'react-font-awesome-5';
import {DeleteButton} from 'atp-ui';
import {HasPermission} from "atp-uac";

export const attributeDragType = 'comic-attribute';

export default ({character, attributes, updateAttribute, onAttributeMove, newAttribute, deleteAttribute}) =>
    <Panel>
        <Panel.Heading>
            <Icon.List /> {character.name}'s Attributes
            <HasPermission yes permissions={["comic.attribute.create"]}>
                <Button onClick={newAttribute} bsStyle="link" style={{float: "right", marginTop: "-3px"}}>
                    <Icon.Plus fixedWidth /> Add attribute
                </Button>
            </HasPermission>
        </Panel.Heading>
        <Table>
            <thead>
            <tr>
                <HasPermission yes permissions={["comic.attribute.update"]}>
                    <th style={{width: "20px"}}></th>
                </HasPermission>
                <th>Name</th>
                <th>Value</th>
                <HasPermission yes permissions={["comic.attribute.update"]}>
                    <th style={{width: "20px"}}></th>
                </HasPermission>
            </tr>
            </thead>
            <tbody>
                <HasPermission yes permissions={["comic.attribute.update"]}>
                    <DropTargets.TableRow key="beginningDrop" id={character.id} accepts={[attributeDragType]} action="into" onMove={onAttributeMove} />
                </HasPermission>
                {o(attributes).values().sort(sortBy('sortOrder')).map(att => [
                    <tr key={att.id}>
                        <HasPermission yes permissions={["comic.attribute.update"]}>
                            <td>
                                <Draggable type={attributeDragType} id={att.id} key={att.id}>
                                    <NotDragging><Icon.Bars fixedWidth /></NotDragging>
                                    <IsDragging><Icon.Square.regular fixedWidth /></IsDragging>
                                </Draggable>
                            </td>
                        </HasPermission>
                        <td>
                            <HasPermission yes permissions={["comic.attribute.update"]}>
                                <InlineEdit.Text
                                    id={"att.name.edit" + att.id}
                                    inline
                                    value={att.name}
                                    name="Name"
                                    onSave={updateAttribute(att.id)}
                                    size="small"
                                />
                            </HasPermission>
                            <HasPermission no permissions={["comic.attribute.update"]}>
                                {att.name}
                            </HasPermission>
                        </td>
                        <td>
                            <HasPermission yes permissions={["comic.attribute.update"]}>
                                <InlineEdit.Text
                                    id={"att.value.edit" + att.id}
                                    inline
                                    value={att.value}
                                    name="value"
                                    size="small"
                                    onSave={updateAttribute(att.id)}
                                />
                            </HasPermission>
                            <HasPermission no permissions={["comic.attribute.update"]}>
                                {att.value}
                            </HasPermission>
                        </td>
                        <HasPermission yes permissions={["comic.attribute.delete"]}>
                            <td>
                                <DeleteButton
                                    id={`characterAttDeleteBtn${att.id}`}
                                    onClick={deleteAttribute(att.id)}
                                    text="Delete"
                                    message={`Are you sure you want to delete ${character.name}'s ${att.name || "attribute"}`}
                                    width="250px"
                                    confirmText="Yes, delete it"
                                    cancelText="No, keep it"
                                />
                            </td>
                        </HasPermission>
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
