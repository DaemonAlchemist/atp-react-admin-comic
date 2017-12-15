/**
 * Created by Andrea on 10/24/2017.
 */
import React from "react";
import {connectWithLifecycle} from "react-lifecycle-component";
import {selectedCharacterId, selectCharacter} from "../reducer/character";
import Dashboard from "../components/characters/dashboard";
import {get} from 'atp-pointfree';
import {Character} from '../../reducer/characters';

export default connectWithLifecycle(
    state => ({
        selectedCharacterId: selectedCharacterId(get(state)),
        isCharacterSelected: character => character.id === selectedCharacterId(get(state))
    }),
    dispatch => ({
        componentDidMount: () => {
            dispatch(Character().action.collection.get())
        },
        onClickCharacter: id => {dispatch(selectCharacter(id));}
    })
)(Dashboard);
