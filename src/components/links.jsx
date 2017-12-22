import React from 'react';
import {connect} from 'react-redux';
import {connectWithLifecycle} from 'react-lifecycle-component';
import {Link} from 'atp-react-tab-router';
import {Page} from "../reducer/page";
import {Arc} from "../reducer/arc";
import {get} from 'atp-pointfree';
import {Icon} from 'react-font-awesome-5';

export const PageLink = props =>
    <Link
        {...props}
        to={`/comic/page/${props.page.id}`}
        label={<span><Icon.Image /> Comic Page "{props.page.name}"</span>}
        target="new"
    />;

export const PageLinkFull = connect(
    (state, props) => ({
        page: Page().select.one(get(state), props.pageId)
    })
)(({page}) =>
    <PageLink page={page}>
        <span  style={{whiteSpace: "nowrap"}}>
            <Icon.Image /> {page.name}
        </span>
    </PageLink>
);

export const ArcLink = props =>
    <Link to={"/comic/dashboard#" + props.arc.id} label="Comic Dashboard" target="new">
        {props.children}
    </Link>;

export const ArcLinkFull = connectWithLifecycle(
    (state, props) => ({
        arc: Arc().select.one(get(state), props.arcId),
        showIcon: typeof props.hideIcon === 'undefined'
    }),
    (dispatch, props) => ({
        componentDidMount: () => {dispatch(Arc().action.fetch(props.arcId));}
    })
)(({arc, showIcon}) => arc
    ? <ArcLink arc={arc}>
        <span  style={{whiteSpace: "nowrap"}}>
            {showIcon && <Icon.Sitemap /> }{arc.name}
        </span>
      </ArcLink>
    : <span><Icon.Spinner spin /> Loading...</span>
);
