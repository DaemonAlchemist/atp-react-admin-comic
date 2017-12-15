/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {combineReducers} from 'redux';
import {Route} from 'react-router';
import {Link} from 'atp-react-tab-router';

import dashboard from "./reducer/dashboard";

import Dashboard from "./containers/dashboard";
import Characters from "./containers/characters/dashboard";
import PageDetails from "./containers/page/details";

export default {
    reducers: {
        comic: combineReducers({
            dashboard
        })
    },
    routes: [
        <Route path="/comic/dashboard" key="/comic/dashboard" exact render={() => <Dashboard />} />,
        <Route path="/comic/characters" key="/comic/characters" exact render={() => <Characters />} />,
        <Route path="/comic/page/:pageId" key="/comic/page/:pageId" exact render={({match}) => <PageDetails pageId={match.params.pageId} />} />,
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
                                noAnchor: true,
                                sortOrder: 0,
                            },
                            characters: {
                                label: <Link to="/comic/characters" label="Comic Characters" target="new"><i className="fa fa-people"></i> Characters</Link>,
                            }
                        }
                    }
                }
            }
        }
    },
};
