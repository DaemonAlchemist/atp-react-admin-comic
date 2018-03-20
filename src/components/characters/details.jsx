
import React from 'react';
import {Row, Col, Panel, Table} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector} from 'atp-media';
import AttributeList from "../../containers/characters/attribute-list";
import {Icon} from 'react-font-awesome-5';
import {DeleteButton} from 'atp-ui';
import {Tags} from 'atp-tags';

export default ({character, attributes, updateCharacter, updateAttribute, updateImage, deleteCharacter}) =>
    <div>
        {character
            ? <Row>
                <Col xs={12}>
                    <div style={{float: "right"}}>
                        <DeleteButton
                            id={`characterDeleteBtn${character.id}`}
                            size="lg"
                            onClick={deleteCharacter}
                            text={`Delete ${character.name}`}
                            message={`Are you sure you want to delete ${character.name}?  This cannot be undone.`}
                            confirmText={`Yes, delete ${character.name}`}
                            cancelText={`No, keep ${character.name}`}
                            width="250px"
                        />
                    </div>
                    <h1 style={{marginTop: 0}}>
                        <InlineEdit.Text
                            id={"character.name.edit" + character.id}
                            value={character.name}
                            label="Name"
                            name="name"
                            onSave={updateCharacter}
                        />
                    </h1>
                </Col>
                <Col xs={12} sm={6}>
                    <Panel>
                        <Panel.Heading><Icon.IdCard /> {character.name}'s Biography</Panel.Heading>
                        <Panel.Body>
                            <InlineEdit.Wysiwyg
                                id={"character.bio.edit" + character.id}
                                value={character.bio}
                                name="bio"
                                onSave={updateCharacter}
                            />
                        </Panel.Body>
                    </Panel>
                    <AttributeList character={character} />
                    <Tags entityType="comicCharacter" entityId={character.id} />
                </Col>
                <Col xs={12} sm={6}>
                    <MediaSelector.Image
                        title={character.name + "'s Image"}
                        imageId={character.imageId}
                        onSave={updateImage}
                        width={false}
                        height={false}
                    />
                </Col>
              </Row>
            : <Col xs={12}><Icon.Spinner spin /> Loading...</Col>
        }
    </div>;
