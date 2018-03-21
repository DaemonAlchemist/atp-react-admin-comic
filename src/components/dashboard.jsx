
import React from "react";
import {Row, Col, Panel, Button} from "react-bootstrap";

import ArcTree from "../containers/arc/tree";
import ArcDetails from "../containers/arc/details";
import {Icon} from 'react-font-awesome-5';

export default ({onClickArc, isArcSelected, selectedArcId, onNewRootArc}) =>
    <Row>
        <Col xs={12} sm={6} lg={4} xl={3}>
            <Panel>
                <Panel.Heading>
                    <div style={{position: "absolute", right: "8px", top: "3px"}}>
                        <Button bsStyle="link" onClick={onNewRootArc}>
                            <Icon.Plus /> Add root arc
                        </Button>
                    </div>
                    <Icon.Sitemap /> Story Arcs
                </Panel.Heading>
                <Panel.Body>
                    <ArcTree onClick={onClickArc} isSelected={isArcSelected}/>
                </Panel.Body>
            </Panel>
        </Col>
        <Col xs={12} sm={6} lg={8} xl={9}>
            <ArcDetails id={selectedArcId} />
        </Col>
    </Row>;
