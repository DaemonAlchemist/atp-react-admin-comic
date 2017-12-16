
import React from 'react';
import {Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {sortBy} from 'atp-pointfree';
import NewCharacterForm from "../../containers/characters/create";
import CharacterDetails from "../../containers/characters/details";

import {o} from 'atp-sugar';
import {Draggable, DropTarget, Active, Inactive, IsDragging, NotDragging} from 'atp-dnd';

export const characterDragType = 'comic-character';

const CharacterDropTarget = ({id, action, onCharacterMove}) =>
    <DropTarget
        action={action}
        style={{position: "relative", width: "100%"}}
        accepts={[characterDragType]}
        id={id}
        onReceiveDrop={onCharacterMove}
    >
        <Active>
            <div style={{border: "dashed 1px"}}>&nbsp;</div>
        </Active>
        <Inactive>
            <div style={{
                height: "7px",
                position: "absolute",
                width: "100%",
                zIndex: 999,
                background: "transparent"
            }}/>
        </Inactive>
    </DropTarget>;

export default ({characters, selectedCharacterId, isSelected, onCharacterMove, onClickCharacter}) =>
    <Row>
        <Col xs={6} sm={4} md={3}>
            {characters
                ? <ListGroup>
                <ListGroupItem>
                    <NewCharacterForm/>
                </ListGroupItem>
                <CharacterDropTarget key="insetBeforeDropTarget" id={null} action="into" onCharacterMove={onCharacterMove} />
                {o(characters).values().sort(sortBy('sortOrder')).map(character => [
                    <ListGroupItem
                        onClick={onClickCharacter(character.id)}
                        key={character.id}
                        className={isSelected(character) ? "active" : ""}
                    >
                        <Draggable type={characterDragType} id={character.id} key={character.id}>
                            <span>
                                <i className="fa fa-bars" /> {character.name}
                            </span>
                        </Draggable>
                    </ListGroupItem>,
                    <CharacterDropTarget
                        key={"characterDropTarget" + character.id}
                        id={character.id}
                        action="after"
                        onCharacterMove={onCharacterMove}
                    />
                ])}
            </ListGroup>
                : <span><i className="fa fa-spinner fa-spin"/> Loading...</span>
            }
        </Col>
        <Col xs={6} sm={8} md={9}>
            {selectedCharacterId
                ? <CharacterDetails characterId={selectedCharacterId} />
                : <div>No character selected</div>
            }
        </Col>
    </Row>;
