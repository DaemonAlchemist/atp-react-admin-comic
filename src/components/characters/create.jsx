
import React from "react";
import {Field} from "redux-form";
import {Button} from "react-bootstrap";
import {Icon} from 'react-font-awesome-5';
import {HasPermission} from "atp-uac";

export default props =>
    <HasPermission permissions={["comic.character.create"]}>
        <form onSubmit={props.handleSubmit}>
            <Field name="name" placeholder="Character name" component="input" className="form-control"/>
            <Button bsStyle="link" style={{position: "absolute", top: "10px", right: "16px", color: "#000"}} type="submit"><Icon.Plus /> Create</Button>
        </form>
    </HasPermission>;
