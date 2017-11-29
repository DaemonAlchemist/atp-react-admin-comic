import React from 'react';
import {Image} from 'atp-media';
import {Draggable, DropTarget, Active} from 'atp-dnd';
import {Link} from 'atp-react-tab-router';
import {PageLink} from "../links";

export const pageDragType = 'comic-page';

export default ({page, onPageMove}) =>
    <div>
        <PageLink page={page}>
            <Draggable type={pageDragType} id={page.id} style={{position: "relative"}}>
                <Image mediaId={page.imageId} />
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
                Page {page.id}
            </Draggable>
        </PageLink>
    </div>;
