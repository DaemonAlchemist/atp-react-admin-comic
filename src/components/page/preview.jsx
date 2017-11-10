import React from 'react';
import {Image} from 'atp-media';
import {Draggable, DropTarget, Active} from 'atp-dnd';

export const pageDragType = 'comic-page';

export default ({page, dragSource}) =>
    <div>
        <Draggable type={pageDragType} id={page.id} style={{position: "relative"}}>
            <Image mediaId={page.imageId} />
            <DropTarget
                action="after"
                accepts={[pageDragType]}
                id={page.id}
                style={{
                    position: "absolute",
                    right: "-40px",
                    width: "64px",
                    height: "100%",
                    top: 0,
                    zIndex: 999,
                    paddingLeft: "24px"
                }}
            >
                <Active><i className="fa fa-arrow-down"/></Active>
            </DropTarget>
            Page {page.id}
        </Draggable>
    </div>;
