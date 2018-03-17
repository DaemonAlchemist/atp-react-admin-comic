
import React from 'react';
import {Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {sortBy} from 'atp-pointfree';
import NewCharacterForm from "../../containers/characters/create";
import CharacterDetails from "../../containers/characters/details";
import {o} from 'atp-sugar';
import {Draggable, DropTargets} from 'atp-dnd';
import {Icon} from 'react-font-awesome-5';

export const characterDragType = 'comic-character';

export default ({characters, selectedCharacterId, isSelected, onCharacterMove, onClickCharacter}) =>
    <Row>
        <Col xs={12} sm={4} md={3}>
            {characters
                ? <ListGroup>
                <ListGroupItem>
                    <NewCharacterForm/>
                </ListGroupItem>
                <DropTargets.ListGroupItem accepts={[characterDragType]} key="insetBeforeDropTarget" id={null} action="into" onMove={onCharacterMove} />
                {o(characters).values().sort(sortBy('sortOrder')).map(character => [
                    <ListGroupItem key={character.id} className={isSelected(character) ? "active" : ""}>
                        <Draggable onClick={onClickCharacter(character.id)} type={characterDragType} id={character.id} key={character.id}>
                            <Icon.Bars /> {character.name}
                        </Draggable>
                    </ListGroupItem>,
                    <DropTargets.ListGroupItem
                        key={"characterDropTarget" + character.id}
                        id={character.id}
                        accepts={[characterDragType]}
                        action="after"
                        onMove={onCharacterMove}
                    />
                ])}
            </ListGroup>
                : <span><Icon.Spinner spin /> Loading...</span>
            }
        </Col>
        <Col xs={12} sm={8} md={9}>
            {selectedCharacterId
                ? <CharacterDetails characterId={selectedCharacterId} />
                : <div>No character selected</div>
            }
        </Col>
    </Row>;
