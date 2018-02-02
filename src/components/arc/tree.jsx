
import React from "react";
import {TreeNode} from 'atp-tree';

export const ArcTreeNode = (arc, isSelected) =>
    <span
        className={isSelected ? (arc.enabled ? "bg-success" : "bg-danger") : (arc.enabled ? "text-success" : "text-danger")}
        style={isSelected ? {color: "#000", padding: "8px"} : {padding: "8px"}}
    >
        {arc.name}
    </span>;

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