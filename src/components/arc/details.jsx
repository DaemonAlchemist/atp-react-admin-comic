import React from "react";
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector, NewMediaForm} from 'atp-media';
import {Row, Col, Panel} from 'react-bootstrap';
import PageList from "../../containers/page/list";

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
                    <MediaSelector.Image title="Thumbnail Image" imageId={arc.thumbnailFileId} onSave={updateThumbnail}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <MediaSelector.Image title="Banner Image" imageId={arc.bannerFileId} onSave={updateBanner}/>
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
            <Row>
                <Col xs={12}>
                    <Panel header={
                        <div>
                            <span><i className="fa fa-files-o" /> Pages</span>
                            <div style={{float: "right"}}>
                                <NewMediaForm bsSize="xsmall" showText={true} onUpload={onNewPage}/>
                            </div>
                        </div>
                    }>
                        <PageList arcId={arc.id} />
                    </Panel>
                </Col>
            </Row>
          </div>
        : <h1>No arc selected...</h1>;
