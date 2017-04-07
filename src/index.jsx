/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";

import dashboardTab from "./components/tabs/dashboard";
import {addTab} from "atp-ui";

export default {
    init: {
        ui: {
            menus: {
                main: {
                    comic: {
                        label: <span><i className="fa fa-picture-o"></i> Comics</span>,
                        sortOrder: 0,
                        children: {
                            dashboard: {
                                label: <span><i className="fa fa-dashboard"></i> Dashboard</span>,
                                sortOrder: 0,
                                onClick: dispatch => dispatch(addTab(dashboardTab))
                            }
                        }
                    }
                }
            }
        }
    },
};
