
import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector} from 'atp-media';

export default ({character, updateCharacter, updateImage}) =>
    <div>
        {character
            ? <Row>
                <Col xs={12}>
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
                    <Panel header={character.name + "'s Bio"}>
                        <InlineEdit.Wysiwyg
                            id={"character.bio.edit" + character.id}
                            value={character.bio}
                            label="Bio"
                            name="bio"
                            onSave={updateCharacter}
                        />
                    </Panel>
                </Col>
                <Col xs={12} sm={6}>
                    <MediaSelector.Image
                        title="Character Image"
                        imageId={character.imageId}
                        onSave={updateImage}
                        width={false}
                        height={false}
                    />
                </Col>
              </Row>
            : <Col xs={12}><i className="fa fa-spinner fa-spin"/> Loading...</Col>
        }
    </div>;
