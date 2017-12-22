
import React from "react";
import {connect} from "react-redux";
import {selectedArcId, selectArc} from "../reducer/dashboard";
import Dashboard from "../components/dashboard";

export default connect(
    state => ({
        selectedArcId: selectedArcId(() => state),
        isArcSelected: arc => arc.id === selectedArcId(() => state)
    }),
    dispatch => ({
        onClickArc: id => {dispatch(selectArc(id));}
    })
)(Dashboard);
