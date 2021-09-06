import * as ActionTypes from '../actions/actionTypes.js';

const posts = (posts = [], action) => {
    switch(action.type) {
        case ActionTypes.FETCH_ALL: 
            return action.payload;
        case ActionTypes.CREATE:
            return [...posts, action.payload ];
        case ActionTypes.GET_POSTDETAILS:
            return action.payload;
        default:
            return posts;
    }
}

export default posts;