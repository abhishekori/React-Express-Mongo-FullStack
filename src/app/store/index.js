import {createStore} from 'redux';
import {defaultState} from '../../server/defaultState'

export const store = createStore(
    function reduces(state=defaultState,action){
        return state;
    }
)