/**
 * Created by Andrea on 10/24/2017.
 */

import {connect} from "react-redux";
import {selectedArcId, selectArc} from "../reducer/dashboard";
import Dashboard from "../components/dashboard";

export default connect(
    state => ({
        selectedArcId: selectedArcId(() => state)
    }),
    dispatch => ({
        onClickArc: id => {dispatch(selectArc(id));}
    })
)(Dashboard);
