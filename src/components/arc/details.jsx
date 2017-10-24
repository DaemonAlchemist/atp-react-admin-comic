import React from "react";
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector} from 'atp-media';
import {Row, Col, Panel} from 'react-bootstrap';

export default ({arc, updateArc, updateThumbnail, updateBanner}) =>
    <div>
        {arc &&
            <div>
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
                    <Col xs={12} sm={6} md={3}>
                        <Panel header={<span><i className="fa fa-picture-o"></i> Thumbnail Image</span>}>
                            <MediaSelector.Image mediaId={arc.thumbnailFileId} onSave={updateThumbnail}/>
                        </Panel>
                    </Col>
                    <Col xs={12} sm={6} md={9}>
                        <Panel header={<span><i className="fa fa-picture-o"></i> Banner Image</span>}>
                            <MediaSelector.Image mediaId={arc.bannerFileId} onSave={updateBanner}/>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Panel header={<span><i className="fa fa-file-text-o"></i> Summary</span>}>
                            <InlineEdit.Text
                                id="arc.summary.edit"
                                value={arc.summary}
                                name="summary"
                                onSave={updateArc}
                            />
                        </Panel>
                    </Col>
                </Row>
            </div>
        }
        {!arc &&
            <div>Select an arc...</div>
        }
    </div>;
