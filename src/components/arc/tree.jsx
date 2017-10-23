/**
 * Created by Andy on 4/30/2017.
 */

import React from "react";
import {Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {TreeNode} from 'atp-tree';

const ArcTree = props =>
    <div>
        {props.arcs.map(arc =>
            <TreeNode
                key={arc.id}
                id={arc.id}
                getObject={() => arc}
                getChildren={props.getChildren}
                sorter={props.sorter}
            />
        )}
    </div>;

// const ArcTree = props =>
//     <ListGroup style={{marginTop: 0, marginBottom: 0}}>
//         {props.arcs.filter(arc => arc.parentArcId == props.parentArcId).map(arc =>
//             <ListGroupItem key={arc.id} style={{paddingLeft: 0, paddingRight: 0, paddingBottom: 0, borderLeft: "none", borderRight: "none", borderBottom: "none"}}>
//                 <div style={{marginLeft: props.offset + "px", marginBottom: "8px"}}><i className="fa fa-folder-open"/> {arc.name}</div>
//                 {props.arcs.filter(child => child.parentArcId == arc.parentArcId).length > 0 &&
//                     <ArcTree arcs={props.arcs} parentArcId={arc.id} onClick={props.onClick} onMove={props.onMove} offset={props.offset + 32}/>
//                 }
//             </ListGroupItem>
//         )}
//     </ListGroup>;

export default ArcTree;