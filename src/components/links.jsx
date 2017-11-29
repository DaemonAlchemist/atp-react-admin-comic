import React from 'react';
import {Link} from 'atp-react-tab-router';

export const PageLink = props =>
    <Link
        {...props}
        to={`/comic/page/${props.page.id}`}
        label={<span><i className="fa fa-picture-o" /> Comic Page "{props.page.name}"</span>}
        target="new"
    />;
