
import React from "react";
import {combineReducers} from 'redux';
import {Route} from 'react-router';
import {Link} from 'atp-react-tab-router';

import dashboard from "./reducer/dashboard";
import characters from "./reducer/characters";

import Dashboard from "./containers/dashboard";
import Characters from "./containers/characters/dashboard";
import PageDetails from "./containers/page/details";
import {Icon} from 'react-font-awesome-5';

export default {
    reducers: {
        comic: combineReducers({
            dashboard,
            characters
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
                        label: <span><Icon.Image /> Comics</span>,
                        sortOrder: 0,
                        children: {
                            dashboard: {
                                label: <Link
                                    to="/comic/dashboard"
                                    label={<span><Icon.Desktop /> Comic Dashboard</span>}
                                    target="new"
                                >
                                    <Icon.Desktop /> Dashboard
                                </Link>,
                                noAnchor: true,
                                sortOrder: 0,
                            },
                            characters: {
                                label: <Link
                                    to="/comic/characters"
                                    label={<span><Icon.Users /> Comic Characters</span>}
                                    target="new"
                                >
                                    <Icon.Users /> Characters
                                </Link>,
                                noAnchor: true,
                                sortOrder: 1
                            }
                        }
                    }
                }
            }
        }
    },
};
