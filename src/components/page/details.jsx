import React from 'react';
import {MediaSelector} from 'atp-media';
import {InlineEdit} from 'atp-inline-edit';
import {Row, Col} from 'react-bootstrap';

export default ({page, updatePage, updateImage}) =>
    <Row>
        <Col xs={12} sm={6}>
            <MediaSelector.Image title="Page Image" imageId={page.imageId} onSave={updateImage}/>
        </Col>
    </Row>;
