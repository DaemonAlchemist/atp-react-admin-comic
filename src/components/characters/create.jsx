/**
 * Created by Andy on 4/21/2017.
 */

import React from "react";
import {Field} from "redux-form";
import {Button, InputGroup} from "react-bootstrap";

export default props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="name" placeholder="Character name" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-plus"/> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>;
