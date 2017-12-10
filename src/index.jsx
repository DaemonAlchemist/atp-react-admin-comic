/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {combineReducers} from 'redux';
import {Route} from 'react-router';
import {Link} from 'atp-react-tab-router';

import dashboard from "./reducer/dashboard";

import Dashboard from "./containers/dashboard";
import PageDetails from "./containers/page/details";

export default {
    reducers: {
        comic: combineReducers({
            dashboard
        })
    },
    routes: [
        <Route path="/comic/dashboard" exact render={() => <Dashboard />} />,
        <Route path="/comic/page/:pageId" exact render={({match}) => <PageDetails pageId={match.params.pageId} />} />,
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
                                label: <Link to="/comic/dashboard" label="Comic Dashboard" target="new"><i className="fa fa-dashboard"></i> Dashboard</Link>,
                                sortOrder: 0,
                            }
                        }
                    }
                }
            }
        }
    },
};
