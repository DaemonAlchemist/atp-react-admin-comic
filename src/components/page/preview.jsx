import React from 'react';
import {Image} from 'atp-media';
import {Draggable, DropTarget, Active} from 'atp-dnd';
import {PageLink} from "../links";
import {InlineEdit} from 'atp-inline-edit';
import {Icon} from 'react-font-awesome-5';
import {Panel} from 'react-bootstrap';

export const pageDragType = 'comic-page';

export default ({page, onPageMove, updatePage}) =>
    <Panel footer={
        <InlineEdit.Text
            id={"page.name.edit" + page.id}
            size="default"
            value={page.name}
            label="Name"
            name="name"
            onSave={updatePage}
        />
    } style={{position: "relative"}}>
        <Draggable type={pageDragType} id={page.id}>
            <PageLink page={page}>
                <Image imageId={page.imageId} width={300} height={300} />
            </PageLink>
        </Draggable>
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
    </Panel>;
