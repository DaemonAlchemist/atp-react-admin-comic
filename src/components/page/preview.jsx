import React from 'react';
import {Image} from 'atp-media';
import {DragSource} from 'atp-dnd';

export const pageDragType = 'comic-page';

export default ({page, dragSource}) =>
    <DragSource type={pageDragType} id={page.id}>
        <Image mediaId={page.imageId} />
        Page {page.id}
    </DragSource>;
