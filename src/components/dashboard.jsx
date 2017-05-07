/**
 * Created by Andy on 5/1/2017.
 */

import React from "react";
import {Row, Col} from "react-bootstrap";

import ArcTree from "../containers/arc/tree";

export default () =>
    <Row>
        <Col xs={3}>
           <ArcTree />
        </Col>
        <Col xs={9}>
            Details go here
        </Col>
    </Row>