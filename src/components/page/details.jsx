import React from 'react';
import {MediaSelector} from 'atp-media';
import {InlineEdit} from 'atp-inline-edit';
import {Row, Col} from 'react-bootstrap';

export default ({page, updatePage, updateImage}) =>
    <Row>
        <Col xs={12} sm={6}>
            <MediaSelector.Image title="Page Image" imageId={page.imageId} onSave={updateImage} width={false} height={false} />
        </Col>
        <Col xs={12} sm={6}>
            <h1 style={{marginTop: 0}}>
                <InlineEdit.Text
                    id={"page.name.edit" + page.id}
                    value={page.name}
                    label="Name"
                    name="name"
                    onSave={updatePage}
                />
            </h1>
        </Col>
    </Row>;
