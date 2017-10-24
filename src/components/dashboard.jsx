/**
 * Created by Andy on 5/1/2017.
 */

import React from "react";
import {Row, Col, Panel} from "react-bootstrap";

import ArcTree from "../containers/arc/tree";
import ArcDetails from "../containers/arc/details";

export default props =>
    <Row>
        <Col xs={3}>
            <Panel header={<span><i className="fa fa-sitemap"></i> Story Arcs</span>}>
                <ArcTree onClick={props.onClickArc} isSelected={props.isArcSelected}/>
            </Panel>
        </Col>
        <Col xs={9}>
            <ArcDetails id={props.selectedArcId} />
        </Col>
    </Row>