import React from "react";
import {InlineEdit} from 'atp-inline-edit';
import {MediaSelector, NewMediaForm} from 'atp-media';
import {Row, Col, Panel, Breadcrumb} from 'react-bootstrap';
import PageList from "../../containers/page/list";
import config from 'atp-config';
import {Icon} from 'react-font-awesome-5';
import {ArcHierarchy} from "../../components/links";
import {Tags} from 'atp-tags';
import {HasPermission} from "atp-uac";
import {Image} from "atp-media";
import marked from "marked";

export default ({arc, updateArc, updateThumbnail, updateBanner, updateEnabled, onNewPage}) =>
    arc
        ? <div>
            <Row>
                <Col xs={12}>
                    <HasPermission yes permissions={["comic.arc.update"]}>
                        <div style={{float: "right"}}><InlineEdit.Toggle enabled={arc.enabled} update={updateEnabled}/></div>
                    </HasPermission>
                    <HasPermission no permissions={["comic.arc.update"]}>
                        <div style={{float: "right"}}><InlineEdit.Toggle disabled enabled={arc.enabled} update={updateEnabled}/></div>
                    </HasPermission>
                    <h1 style={{marginTop: 0}}>
                        {arc.parentId &&
                            <span>
                                <ArcHierarchy arcId={arc.parentId} />
                                &nbsp;<Icon.ChevronRight />&nbsp;
                            </span>
                        }
                        <HasPermission yes permissions={["comic.arc.update"]}>
                            <InlineEdit.Text
                                id="arc.name.edit"
                                inline
                                value={arc.name}
                                name="name"
                                onSave={updateArc}
                            />
                        </HasPermission>
                        <HasPermission no permissions={["comic.arc.update"]}>
                            {arc.name}
                        </HasPermission>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3 style={{marginTop: 0}}>
                        http://{config.get('public.hostName')}/.../
                        <HasPermission yes permissions={["comic.arc.update"]}>
                            <InlineEdit.Text
                                id="arc.url.edit"
                                inline
                                value={arc.url}
                                name="url"
                                size={null}
                                onSave={updateArc}
                            />
                        </HasPermission>
                        <HasPermission no permissions={["comic.arc.update"]}>
                            {arc.url}
                        </HasPermission>
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={8}>
                    <Panel>
                        <Panel.Heading><Icon.FileAlt /> Summary</Panel.Heading>
                        <Panel.Body>
                            <HasPermission yes permissions={["comic.arc.update"]}>
                                <InlineEdit.Wysiwyg
                                    id="arc.summary.edit"
                                    value={arc.summary}
                                    name="summary"
                                    onSave={updateArc}
                                />
                            </HasPermission>
                            <HasPermission no permissions={["comic.arc.update"]}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: marked(arc.summary || "")
                                    }}
                                />
                            </HasPermission>
                        </Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Heading>
                            <span><Icon.Image stack/> Pages</span>
                            <div style={{float: "right"}}>
                                <NewMediaForm showText={true} onUpload={onNewPage}/>
                            </div>
                        </Panel.Heading>
                        <Panel.Body>
                            <PageList xs={6} sm={6} md={4} arcId={arc.id} />
                        </Panel.Body>
                        <Panel.Footer>
                            <span>&nbsp;</span>
                            <div style={{float: "right"}}>
                                <NewMediaForm showText={true} onUpload={onNewPage}/>
                            </div>
                        </Panel.Footer>
                    </Panel>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <HasPermission yes permissions={["comic.arc.update"]}>
                        <MediaSelector.Image title="Thumbnail Image" imageId={arc.thumbnailFileId} onSave={updateThumbnail}/>
                        <MediaSelector.Image title="Banner Image" imageId={arc.bannerFileId} onSave={updateBanner}/>
                    </HasPermission>
                    <HasPermission no permissions={["comic.arc.update"]}>
                        <Panel>
                            <Panel.Heading><Icon.Image /> Thumbnail</Panel.Heading>
                            <Panel.Body><Image imageId={arc.thumbnailFileId}/></Panel.Body>
                        </Panel>
                        <Panel>
                            <Panel.Heading><Icon.Image /> Banner</Panel.Heading>
                            <Panel.Body><Image imageId={arc.bannerFileId}/></Panel.Body>
                        </Panel>
                    </HasPermission>
                    <Tags entityType="comicArc" entityId={arc.id} />
                </Col>
            </Row>
          </div>
        : <h1>No arc selected...</h1>;
