
import React from "react";
import {Row, Col, Panel} from "react-bootstrap";

import ArcTree from "../containers/arc/tree";
import ArcDetails from "../containers/arc/details";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <Row>
        <Col xs={3}>
            <Panel header={<span><Icon.Sitemap /> Story Arcs</span>}>
                <ArcTree onClick={props.onClickArc} isSelected={props.isArcSelected}/>
            </Panel>
        </Col>
        <Col xs={9}>
            <ArcDetails id={props.selectedArcId} />
        </Col>
    </Row>;
