/**
 * Created by Andy on 4/18/2017.
 */

import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PagePreview from "../../containers/page/preview";

export default ({pages}) =>
    <Row>
        {pages.map(page =>
            <Col xs={6} sm={4} md={3} key={page.id}>
                <PagePreview id={page.id} />
            </Col>
        )}
    </Row>