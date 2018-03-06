import React from "react";
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector, NewMediaForm} from 'atp-media';
import {Row, Col, Panel} from 'react-bootstrap';
import PageList from "../../containers/page/list";
import config from 'atp-config';
import {Icon} from 'react-font-awesome-5';

export default ({arc, updateArc, updateThumbnail, updateBanner, updateEnabled, onNewPage}) =>
    arc
        ? <div>
            <Row>
                <Col xs={6}>
                    <h1 style={{marginTop: 0}}>
                        <InlineEdit.Text
                            id="arc.name.edit"
                            inline
                            value={arc.name}
                            label="Name"
                            name="name"
                            onSave={updateArc}
                        />
                    </h1>
                </Col>
                <Col xs={6} className="text-right">
                    <InlineEdit.Toggle enabled={arc.enabled} update={updateEnabled}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3 style={{marginTop: 0}}>
                        http://{config.get('public.hostName')}/.../
                        <InlineEdit.Text
                            id="arc.url.edit"
                            inline
                            value={arc.url}
                            label="Url"
                            name="url"
                            onSave={updateArc}
                        />
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={8}>
                    <Panel>
                        <Panel.Heading><Icon.FileAlt /> Summary</Panel.Heading>
                        <Panel.Body>
                            <InlineEdit.Wysiwyg
                                size="small"
                                id="arc.summary.edit"
                                value={arc.summary}
                                name="summary"
                                onSave={updateArc}
                            />
                        </Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Heading>
                            <span><Icon.Image stack/> Pages</span>
                            <div style={{float: "right"}}>
                                <NewMediaForm bsSize="xsmall" showText={true} onUpload={onNewPage}/>
                            </div>
                        </Panel.Heading>
                        <Panel.Body>
                            <PageList xs={6} sm={4} md={4} arcId={arc.id} />
                        </Panel.Body>
                        <Panel.Footer>
                            <span>&nbsp;</span>
                            <div style={{float: "right"}}>
                                <NewMediaForm bsSize="xsmall" showText={true} onUpload={onNewPage}/>
                            </div>
                        </Panel.Footer>
                    </Panel>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <MediaSelector.Image title="Thumbnail Image" imageId={arc.thumbnailFileId} onSave={updateThumbnail}/>
                    <MediaSelector.Image title="Banner Image" imageId={arc.bannerFileId} onSave={updateBanner}/>
                </Col>
            </Row>
          </div>
        : <h1>No arc selected...</h1>;
