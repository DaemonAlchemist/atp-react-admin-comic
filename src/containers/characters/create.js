
import {reduxForm} from "redux-form";
import {Character} from "../../reducer/characters";
import NewCharacterForm from "../../components/characters/create";

export default reduxForm({
    form: 'new-character-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        Character().action.create(data)(dispatch, getState).then(data => {
            Character().action.collection.get({})(dispatch, getState);
        });
    })
})(NewCharacterForm);
