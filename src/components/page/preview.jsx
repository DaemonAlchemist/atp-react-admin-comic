import React from 'react';
import {Image} from 'atp-media';
import {Draggable, DropTarget, Active} from 'atp-dnd';
import {PageLink} from "../links";
import {InlineEdit} from 'atp-inline-edit';
import {Icon} from 'react-font-awesome-5';

export const pageDragType = 'comic-page';

export default ({page, onPageMove, updatePage}) =>
    <div>
        <Draggable type={pageDragType} id={page.id} style={{position: "relative"}}>
            <PageLink page={page}>
                <Image imageId={page.imageId} width={300} height={300} />
                <DropTarget
                    action="after"
                    accepts={[pageDragType]}
                    id={page.id}
                    onReceiveDrop={onPageMove}
                    style={{
                        position: "absolute",
                        right: "-15px",
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
            </PageLink>
            <InlineEdit.Text
                id={"page.name.edit" + page.id}
                size="default"
                value={page.name}
                label="Name"
                name="name"
                onSave={updatePage}
            />
        </Draggable>
    </div>;
