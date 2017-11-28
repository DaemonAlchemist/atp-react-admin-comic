/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {addTab} from "atp-ui";
import {combineReducers} from 'redux';

import dashboard from "./reducer/dashboard";

import Dashboard from "./containers/dashboard";
import {Route} from 'react-router';

export default {
    reducers: {
        comic: combineReducers({
            dashboard
        })
    },
    routes: [
        <Route path="/comic/page/:pageId" exact render={({match}) => <div>Page {match.params.pageId}</div>} />,
    ],
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
