import React from 'react';
import {MediaSelector} from 'atp-media';
import {InlineEdit} from 'atp-inline-edit';
import {Row, Col, Panel, InputGroup, Button} from 'react-bootstrap';
import {Toggle} from 'atp-ui';

export default ({page, updatePage, updateImage, updateEnabled}) =>
    <Row>
        <Col xs={12} sm={6}>
            <MediaSelector.Image title="Page Image" imageId={page.imageId} onSave={updateImage} width={false} height={false} />
        </Col>
        <Col xs={12} sm={6}>
            <Row>
                <Col xs={12} sm={6}>
                    <h1 style={{marginTop: 0}}>
                        <InlineEdit.Text
                            id={"page.name.edit" + page.id}
                            value={page.name}
                            label="Name"
                            name="name"
                            onSave={updatePage}
                        />
                    </h1>
                    <h3 style={{marginTop: 0}}>
                        <InlineEdit.Text
                            id={"page.url.edit" + page.id}
                            value={page.url}
                            label="Url"
                            name="url"
                            onSave={updatePage}
                        />
                    </h3>
                </Col>
                <Col xs={12} sm={6}>
                    <Row>
                        <Col xs={6}>
                            0000-00-00
                        </Col>
                        <Col xs={6}>
                            <Toggle enabled={page.enabled} update={updateEnabled}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <Panel header={<span><i className="fa fa-file-text-o"></i> Transcript</span>}>
                        <InlineEdit.Textarea
                            size="small"
                            id={"page.summary.edit" + page.id}
                            value={page.transcript}
                            name="transcript"
                            rows={10}
                            onSave={updatePage}
                        />
                    </Panel>
                </Col>
            </Row>
        </Col>
    </Row>;
