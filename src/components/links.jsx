import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'atp-react-tab-router';
import {Page} from "../reducer/page";
import {get} from 'atp-pointfree';

export const PageLink = props =>
    <Link
        {...props}
        to={`/comic/page/${props.page.id}`}
        label={<span><i className="fa fa-picture-o" /> Comic Page "{props.page.name}"</span>}
        target="new"
    />;

export const PageLinkFull = connect(
    (state, props) => ({
        page: Page().select.one(get(state), props.pageId)
    })
)(({page}) =>
    <PageLink page={page}>
        <i className="fa fa-picture-o"/> {page.name}
    </PageLink>
);
