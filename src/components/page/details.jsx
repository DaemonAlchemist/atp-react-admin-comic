import React from 'react';
import {MediaSelector} from 'atp-media';
import {InlineEdit} from 'atp-inline-edit';
import {Row, Col, Panel} from 'react-bootstrap';
import CommentaryList from "../../containers/commentary/list";
import config from 'atp-config';
import {ArcHierarchy} from '../links';
import {Assigner} from 'atp-ui';
import {Icon} from 'react-font-awesome-5';
import {Tags} from 'atp-tags';
import {HasPermission} from "atp-uac";
import {Image} from 'atp-media';
import dateFormat from 'dateformat';
import marked from "marked";

export default ({
    page, updatePage, updateImage, updateEnabled,
    allCharacters, pageCharacters, onAddCharacter, onRemoveCharacter
}) => page
    ? <div>
        <Row>
            <Col xs={12} md={9}>
                <h1 style={{marginTop: 0}}>
                    <ArcHierarchy arcId={page.arcId} />
                    &nbsp;<Icon.ChevronRight />&nbsp;
                    <HasPermission yes permissions={["comic.page.update"]}>
                        <InlineEdit.Text
                            id={"page.name.edit" + page.id}
                            inline
                            value={page.name}
                            name="name"
                            onSave={updatePage}
                        />
                    </HasPermission>
                    <HasPermission no permissions={["comic.page.update"]}>
                        {page.name}
                    </HasPermission>
                </h1>
                <h3 style={{marginTop: 0}}>
                    http://{config.get('public.hostName')}/.../
                    <HasPermission yes permissions={["comic.page.update"]}>
                        <InlineEdit.Text
                            id={"page.url.edit" + page.id}
                            inline
                            value={page.url}
                            name="url"
                            onSave={updatePage}
                        />
                    </HasPermission>
                    <HasPermission no permissions={["comic.page.update"]}>
                        {page.url}
                    </HasPermission>
                </h3>
            </Col>
            <Col xs={12} md={3}>
                <Row>
                    <Col xs={12} className="text-right">
                        <HasPermission yes permissions={["comic.page.update"]}>
                            <InlineEdit.Toggle enabled={page.enabled} update={updateEnabled}/>
                        </HasPermission>
                        <HasPermission no permissions={["comic.page.update"]}>
                            <InlineEdit.Toggle disabled enabled={page.enabled} update={updateEnabled}/>
                        </HasPermission>
                    </Col>
                    <Col xs={12}>
                        <h3 style={{marginTop: 0}} className="text-right">
                            {page.enabled
                                ? <span>
                                    <HasPermission yes permissions={["comic.page.update"]}>
                                        <InlineEdit.Datepicker
                                            id={"page.date.edit" + page.id}
                                            value={page.postDate}
                                            label="Release Date"
                                            name="postDate"
                                            onSave={updatePage}
                                        />
                                    </HasPermission>
                                    <HasPermission no permissions={["comic.page.update"]}>
                                        {dateFormat(page.postDate, "fullDate", true)}
                                    </HasPermission>
                                  </span>
                                : <span>&nbsp;</span>
                            }
                        </h3>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col xs={12} sm={6} md={4}>
                <HasPermission yes permissions={["comic.page.update"]}>
                    <MediaSelector.Image title="Page Image" imageId={page.imageId} onSave={updateImage} width={false} height={false} />
                </HasPermission>
                <HasPermission no permissions={["comic.page.update"]}>
                    <Panel>
                        <Panel.Heading><Icon.Image /> Page Image</Panel.Heading>
                        <Panel.Body><Image imageId={page.imageId}/></Panel.Body>
                    </Panel>
                </HasPermission>
            </Col>
            <Col xs={12} sm={6} md={8}>
                <Row>
                    <Col xs={12} md={6}>
                        <Panel>
                            <Panel.Heading><Icon.FileAlt /> Transcript</Panel.Heading>
                            <Panel.Body>
                                <HasPermission yes permissions={["comic.page.update"]}>
                                    <InlineEdit.Wysiwyg
                                        id={"page.summary.edit" + page.id}
                                        value={page.transcript}
                                        name="transcript"
                                        rows={10}
                                        onSave={updatePage}
                                    />
                                </HasPermission>
                                <HasPermission no permissions={["comic.page.update"]}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: marked(page.transcript || "")
                                        }}
                                    />
                                </HasPermission>
                            </Panel.Body>
                        </Panel>
                        <Tags entityType="comicPage" entityId={page.id} />
                    </Col>
                    <Col xs={12} md={6}>
                        <HasPermission yes permissions={["comic.page.update"]}>
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
                        </HasPermission>
                        <HasPermission no permissions={["comic.page.update"]}>
                            <Panel>
                                <Panel.Heading><Icon.Users /> Characters</Panel.Heading>
                                <Panel.Body>{pageCharacters.map(char => char && <p key={char.id}>{char.name}</p>)}</Panel.Body>
                            </Panel>
                        </HasPermission>
                    </Col>
                    <Col xs={12}>
                        <CommentaryList pageId={page.id} />
                    </Col>
                </Row>
            </Col>
        </Row>
      </div>
    : <div><Icon.Spinner spin /> Loading...</div>;
