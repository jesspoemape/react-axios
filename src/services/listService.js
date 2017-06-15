import axios from 'axios';
import { getList } from '../ducks/listReducer';
import store from '../store';
import apiURL from '../api.js';

export default function dispatchGetList() {
    const promise = axios.get( apiURL ).then( response => response.data );
    store.dispatch( getList( promise ) );
}