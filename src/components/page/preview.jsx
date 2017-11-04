import React from 'react';
import {Image} from 'atp-media';

export default ({page, dragSource}) =>
    <div>
        {dragSource(
            <div>
                <Image mediaId={page.imageId} />
                Page {page.id}
            </div>
        )}
    </div>;
