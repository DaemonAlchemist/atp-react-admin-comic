import React from 'react';
import {MediaSelector} from 'atp-media';
import {InlineEdit} from 'atp-inline-edit';
import {Row, Col, Panel, InputGroup, Button} from 'react-bootstrap';
import CommentaryList from "../../containers/commentary/list";
import config from 'atp-config';
import {ArcLinkFull} from '../links';
import {Assigner} from 'atp-ui';
import {Icon} from 'react-font-awesome-5';

export default ({
    page, updatePage, updateImage, updateEnabled,
    allCharacters, pageCharacters, onAddCharacter, onRemoveCharacter
}) => page
    ? <div>
        <Row>
            <Col xs={12} sm={6}>
                <h1 style={{marginTop: 0}}>
                    <InlineEdit.Text
                        id={"page.name.edit" + page.id}
                        inline
                        value={page.name}
                        label="Name"
                        name="name"
                        onSave={updatePage}
                    />
                    &nbsp; in <ArcLinkFull arcId={page.arcId} hideIcon />
                </h1>
                <h3 style={{marginTop: 0}}>
                    http://{config.get('public.hostName')}/.../
                    <InlineEdit.Text
                        id={"page.url.edit" + page.id}
                        inline
                        value={page.url}
                        label="Url"
                        name="url"
                        onSave={updatePage}
                    />
                </h3>
            </Col>
            <Col xs={12} sm={6}>
                <Row>
                    <Col xs={12} className="text-right">
                        <InlineEdit.Toggle enabled={page.enabled} update={updateEnabled}/>
                    </Col>
                    <Col xs={12}>
                        <h4 style={{marginTop: 0}} className="text-right">
                            {page.enabled
                                ? <InlineEdit.Datepicker
                                    id={"page.date.edit" + page.id}
                                    value={page.postDate}
                                    label="Date"
                                    name="postDate"
                                    onSave={updatePage}
                                  />
                                : <span>&nbsp;</span>
                            }
                        </h4>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={4}>
                <MediaSelector.Image title="Page Image" imageId={page.imageId} onSave={updateImage} width={false} height={false} />
            </Col>
            <Col xs={12} sm={8}>
                <Row>
                    <Col xs={12} sm={6}>
                        <Panel>
                            <Panel.Heading><Icon.FileAlt /> Transcript</Panel.Heading>
                            <Panel.Body>
                                <InlineEdit.Wysiwyg
                                    size="small"
                                    id={"page.summary.edit" + page.id}
                                    value={page.transcript}
                                    name="transcript"
                                    rows={10}
                                    onSave={updatePage}
                                />
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Assigner
                            Icon={Icon.Users}
                            label="Characters"
                            assignedLabel="Characters on this page"
                            formId="pageCharacterAssigner"
                            minHeight="300px"
                            available={allCharacters}
                            assigned={pageCharacters}
                            onAssign={onAddCharacter}
                            onUnassign={onRemoveCharacter}
                        />
                    </Col>
                    <Col xs={12}>
                        <CommentaryList pageId={page.id} />
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
    : <div><Icon.Spinner spin /> Loading...</div>;
