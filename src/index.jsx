/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {Row} from "react-bootstrap";
import {addTab} from "atp-ui";
import {combineReducers} from 'redux';

import dashboard from "./reducer/dashboard";

import Dashboard from "./containers/dashboard";

export default {
    reducers: {
        comic: combineReducers({
            dashboard
        })
    },
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
                                onClick: dispatch => {
                                    dispatch(addTab({
                                        title: <span><i className="fa fa-dashboard" /> Comic Dashboard</span>,
                                        id: () => 'comic-dashboard',
                                        controller: () => <Dashboard />
                                    }));
                                }
                            }
                        }
                    }
                }
            }
        }
    },
};
