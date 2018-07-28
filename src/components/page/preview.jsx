import React from 'react';
import {Image} from 'atp-media';
import {Draggable, DropTarget, Active} from 'atp-dnd';
import {PageLink} from "../links";
import {InlineEdit} from 'atp-inline-edit';
import {Icon} from 'react-font-awesome-5';
import {Panel} from 'react-bootstrap';
import {DeleteButton} from 'atp-ui';
import moment from "moment";
import {HasPermission} from "atp-uac";

export const pageDragType = 'comic-page';

export default ({page, onPageMove, updatePage, onPageDelete}) =>
    <Panel style={{position: "relative"}}>
        <Panel.Heading>
            <HasPermission yes permissions={["comic.page.edit"]}>
                <InlineEdit.Text
                    id={"page.name.edit" + page.id}
                    size="regular"
                    value={page.name}
                    label="Page Title"
                    name="name"
                    onSave={updatePage}
                />
            </HasPermission>
            <HasPermission no permissions={["comic.page.edit"]}>
                {page.name}
            </HasPermission>
        </Panel.Heading>
        <Panel.Body>
            <HasPermission yes permissions={["comic.page.edit"]}>
                <Draggable type={pageDragType} id={page.id}>
                    <PageLink page={page}>
                        <Image imageId={page.imageId} width={300} height={300} />
                    </PageLink>
                </Draggable>
            </HasPermission>
            <HasPermission no permissions={["comic.page.edit"]}>
                <PageLink page={page}>
                    <Image imageId={page.imageId} width={300} height={300} />
                </PageLink>
            </HasPermission>
            <HasPermission yes permissions={["comic.page.edit"]}>
                <DropTarget
                    action="after"
                    accepts={[pageDragType]}
                    id={page.id}
                    onReceiveDrop={onPageMove}
                    style={{
                        position: "absolute",
                        right: "-18px",
                        width: "15px",
                        height: "100%",
                        top: 0,
                        zIndex: 999,
                    }}
                >
                    <Active>
                        <Icon.ArrowDown style={{position: "absolute", top: "-10px"}} />
                        <Icon.ArrowUp style={{position: "absolute", bottom: "5px"}} />
                    </Active>
                </DropTarget>
            </HasPermission>
        </Panel.Body>
        <Panel.Footer style={{position: "relative"}}>
            {page.enabled
                ? <span class="text-success"> {moment(page.postDate).format("MMM D, Y")}</span>
                : <span class="text-danger"> Disabled</span>
            }
            <div style={{position: "absolute", right: 0, top: "2px"}}>
                <HasPermission yes permissions={["comic.page.edit"]}>
                    <DeleteButton
                        id={`comicPageDeleteBtn${page.id}`}
                        onClick={onPageDelete}
                        text="Delete"
                        message="Are you sure you want to delete this page?  You can't get it back if you do."
                        width="250px"
                        confirmText="Yes, delete it"
                        cancelText="No, keep it"
                    />
                </HasPermission>
            </div>
        </Panel.Footer>
    </Panel>;
