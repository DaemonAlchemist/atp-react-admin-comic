/**
 * Created by Andy on 4/30/2017.
 */

import React from "react";
import {TreeNode} from 'atp-tree';

const ArcTree = props =>
    <ul style={{listStyleType: "none", paddingLeft: 0}}>
        {props.arcIds.map(arcId =>
            <TreeNode
                key={arcId}
                id={arcId}
                parentNodeId="arcTree"
                {...props}
            />
        )}
    </ul>;

export default ArcTree;