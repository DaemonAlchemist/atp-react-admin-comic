import React from "react";
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector, NewMediaForm} from 'atp-media';
import {Row, Col, Panel} from 'react-bootstrap';
import PageList from "../../containers/page/list";
import config from 'atp-config';
import {Icon} from 'react-font-awesome-5';

export default ({arc, updateArc, updateThumbnail, updateBanner, onNewPage}) =>
    arc
        ? <div>
            <Row>
                <Col xs={12}>
                    <h1 style={{marginTop: 0}}>
                        <InlineEdit.Text
                            id="arc.name.edit"
                            value={arc.name}
                            label="Name"
                            name="name"
                            onSave={updateArc}
                        />
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3 style={{marginTop: 0}}>
                        http://{config.get('public.hostName')}/.../
                        <InlineEdit.Text
                            id="arc.url.edit"
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
                    <Panel header={<span><Icon.FileAlt /> Summary</span>}>
                        <InlineEdit.Wysiwyg
                            size="small"
                            id="arc.summary.edit"
                            value={arc.summary}
                            name="summary"
                            onSave={updateArc}
                        />
                    </Panel>
                    <Panel
                        header={
                            <div>
                                <span><Icon.Image stack/> Pages</span>
                                <div style={{float: "right"}}>
                                    <NewMediaForm bsSize="xsmall" showText={true} onUpload={onNewPage}/>
                                </div>
                            </div>
                        }
                        footer={
                            <div>
                                <span>&nbsp;</span>
                                <div style={{float: "right"}}>
                                    <NewMediaForm bsSize="xsmall" showText={true} onUpload={onNewPage}/>
                                </div>
                            </div>
                        }
                    >
                        <PageList xs={6} sm={4} md={4} arcId={arc.id} />
                    </Panel>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <MediaSelector.Image title="Thumbnail Image" imageId={arc.thumbnailFileId} onSave={updateThumbnail}/>
                    <MediaSelector.Image title="Banner Image" imageId={arc.bannerFileId} onSave={updateBanner}/>
                </Col>
            </Row>
          </div>
        : <h1>No arc selected...</h1>;
