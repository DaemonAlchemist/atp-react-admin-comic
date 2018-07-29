
import React from 'react';
import {Row, Col, Panel, Table} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector} from 'atp-media';
import AttributeList from "../../containers/characters/attribute-list";
import {Icon} from 'react-font-awesome-5';
import {DeleteButton} from 'atp-ui';
import {Tags} from 'atp-tags';
import {HasPermission} from "atp-uac";
import marked from "marked";
import {Image} from "atp-media";

export default ({character, attributes, updateCharacter, updateAttribute, updateImage, deleteCharacter}) =>
    <div>
        {character
            ? <Row>
                <Col xs={12}>
                    <HasPermission yes permissions={["comic.character.create"]}>
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
                    </HasPermission>
                    <h1 style={{marginTop: 0}}>
                        <HasPermission yes permissions={["comic.character.create"]}>
                            <InlineEdit.Text
                                id={"character.name.edit" + character.id}
                                value={character.name}
                                label="Name"
                                name="name"
                                onSave={updateCharacter}
                            />
                        </HasPermission>
                        <HasPermission no permissions={["comic.character.create"]}>
                            {character.name}
                        </HasPermission>
                    </h1>
                </Col>
                <Col xs={12} sm={6}>
                    <Panel>
                        <Panel.Heading><Icon.IdCard /> {character.name}'s Biography</Panel.Heading>
                        <Panel.Body>
                            <HasPermission yes permissions={["comic.character.create"]}>
                                <InlineEdit.Wysiwyg
                                    id={"character.bio.edit" + character.id}
                                    value={character.bio}
                                    name="bio"
                                    onSave={updateCharacter}
                                />
                            </HasPermission>
                            <HasPermission no permissions={["comic.character.create"]}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(character.bio || "")
                                    }}
                                />
                            </HasPermission>
                        </Panel.Body>
                    </Panel>
                    <AttributeList character={character} />
                    <Tags entityType="comicCharacter" entityId={character.id} />
                </Col>
                <Col xs={12} sm={6}>
                    <HasPermission yes permissions={["comic.character.create"]}>
                        <MediaSelector.Image
                            title={character.name + "'s Image"}
                            imageId={character.imageId}
                            onSave={updateImage}
                            width={false}
                            height={false}
                        />
                    </HasPermission>
                    <HasPermission no permissions={["comic.character.create"]}>
                        <Panel>
                            <Panel.Heading><Icon.Image /> {character.name}'s Image</Panel.Heading>
                            <Panel.Body><Image imageId={character.imageId}/></Panel.Body>
                        </Panel>
                    </HasPermission>
                </Col>
              </Row>
            : <Col xs={12}><Icon.Spinner spin /> Loading...</Col>
        }
    </div>;
