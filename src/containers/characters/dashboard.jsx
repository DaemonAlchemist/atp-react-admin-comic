/**
 * Created by Andrea on 10/24/2017.
 */
import React from "react";
import {connectWithLifecycle} from "react-lifecycle-component";
import {selectedCharacterId, selectCharacter} from "../../reducer/characters";
import Dashboard from "../../components/characters/dashboard";
import {get} from 'atp-pointfree';
import {Character} from '../../reducer/characters';

export default connectWithLifecycle(
    state => ({
        characters: Character().select.all(get(state)),
        selectedCharacterId: selectedCharacterId(get(state)),
        isSelected: character => character.id === selectedCharacterId(get(state))
    }),
    dispatch => ({
        componentDidMount: () => {
            dispatch(Character().action.collection.get())
        },
        onClickCharacter: id => () => {dispatch(selectCharacter(id));},
        onCharacterMove: info => {dispatch(Character().action.move(info.action, info.targetId, info.sourceId));},
    })
)(Dashboard);
