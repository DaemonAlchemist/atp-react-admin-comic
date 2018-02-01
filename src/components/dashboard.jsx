
import React from "react";
import {Row, Col, Panel} from "react-bootstrap";

import ArcTree from "../containers/arc/tree";
import ArcDetails from "../containers/arc/details";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <Row>
        <Col xs={3}>
            <Panel>
                <Panel.Heading><Icon.Sitemap /> Story Arcs</Panel.Heading>
                <Panel.Body>
                    <ArcTree onClick={props.onClickArc} isSelected={props.isArcSelected}/>
                </Panel.Body>
            </Panel>
        </Col>
        <Col xs={9}>
            <ArcDetails id={props.selectedArcId} />
        </Col>
    </Row>;
