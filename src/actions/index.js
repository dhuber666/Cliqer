
import database from '../firebase';
import { dispatch } from 'redux';

export function increment(currentVal) {



    dispatch => {
        database.ref('clickers').update({ count: currentVal + 1 });
        return dispatch
    }





}

function getNewValues(value) {
    return {
        type: 'FETCH_VALUES',
        payload: value
    }
}

export function fetchValues() {
    return dispatch => {

        return database.ref('clickers').on('value', snap => {
            const value = snap.val();
            dispatch(getNewValues(value))
        })

    }
}

