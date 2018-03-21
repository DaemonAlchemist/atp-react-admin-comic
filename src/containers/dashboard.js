
import React from "react";
import {connect} from "react-redux";
import {selectedArcId, selectArc} from "../reducer/dashboard";
import Dashboard from "../components/dashboard";
import {Arc} from "../reducer/arc";

export default connect(
    state => ({
        selectedArcId: selectedArcId(() => state),
        isArcSelected: arc => arc.id === selectedArcId(() => state)
    }),
    dispatch => ({
        onClickArc: id => {dispatch(selectArc(id));},
        onNewRootArc: () => {
            dispatch(Arc().action.create({name: "New story arc", parentId: null}));
        }
    })
)(Dashboard);
