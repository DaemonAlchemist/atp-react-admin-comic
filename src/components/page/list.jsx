/**
 * Created by Andy on 4/18/2017.
 */

import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Image} from 'atp-media';

export default ({pages}) =>
    <Row>
        {pages.map(page =>
            <Col xs={6} sm={4} md={3} key={page.id}>
                <Image mediaId={page.imageId} />
                Page {page.id}
            </Col>
        )}
    </Row>