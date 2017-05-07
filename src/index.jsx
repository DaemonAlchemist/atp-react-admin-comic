/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {Row} from "react-bootstrap";
import {addTab} from "atp-ui";

import comicPages from "./reducer/page";
import {Arc} from "./reducer/arc";
import Dashboard from "./components/dashboard";


export default {
    reducers: {
        //comicPages
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
                                    dispatch(Arc().action.list({}));
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
