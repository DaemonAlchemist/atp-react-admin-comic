import React from "react";
import {InlineEdit} from 'atp-inline-edit';

export default ({arc, saveArcName}) =>
    <div>
        {arc &&
            <div>
                <h1 style={{marginTop: 0}}>
                    <InlineEdit.Text
                        id="arc.name.edit"
                        value={arc.name}
                        name="name"
                        onSave={saveArcName}
                    />
                </h1>
            </div>
        }
        {!arc &&
            <div>Select an arc...</div>
        }
    </div>;
