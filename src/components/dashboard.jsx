
import React from "react";
import {Row, Col, Panel} from "react-bootstrap";

import ArcTree from "../containers/arc/tree";
import ArcDetails from "../containers/arc/details";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <Row>
        <Col xs={12} sm={6} lg={4} xl={3}>
            <Panel>
                <Panel.Heading><Icon.Sitemap /> Story Arcs</Panel.Heading>
                <Panel.Body>
                    <ArcTree onClick={props.onClickArc} isSelected={props.isArcSelected}/>
                </Panel.Body>
            </Panel>
        </Col>
        <Col xs={12} sm={6} lg={8} xl={9}>
            <ArcDetails id={props.selectedArcId} />
        </Col>
    </Row>;
