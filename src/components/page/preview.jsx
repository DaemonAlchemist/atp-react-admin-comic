import React from 'react';
import {Image} from 'atp-media';
import {Draggable, DropTarget, Active} from 'atp-dnd';
import {PageLink} from "../links";
import {InlineEdit} from 'atp-inline-edit';

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
                        right: "-42px",
                        width: "64px",
                        height: "100%",
                        top: 0,
                        zIndex: 999,
                        paddingLeft: "24px"
                    }}
                >
                    <Active>
                        <i className="fa fa-arrow-down" style={{position: "absolute", top: "-10px"}} />
                        <i className="fa fa-arrow-up" style={{position: "absolute", bottom: "5px"}} />
                    </Active>
                </DropTarget>
            </PageLink>
            <InlineEdit.Text
                id="page.name.edit"
                value={page.name}
                label="Name"
                name="name"
                onSave={updatePage}
            />
        </Draggable>
    </div>;
