
import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PagePreview from "../../containers/page/preview";
import {sort} from 'atp-pointfree';

export default ({pages, sorter, xs, sm, md}) =>
    <Row>
        {sort(sorter)(pages).map(page =>
            <Col xs={xs || 6} sm={sm || 4} md={md || 3} key={page.id}>
                <PagePreview id={page.id} />
            </Col>
        )}
    </Row>