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
                    <Col xs={12} sm={6} md={4}>
                        <MediaSelector.Image title="Thumbnail Image" mediaId={arc.thumbnailFileId} onSave={updateThumbnail}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <MediaSelector.Image title="Banner Image" mediaId={arc.bannerFileId} onSave={updateBanner}/>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
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
