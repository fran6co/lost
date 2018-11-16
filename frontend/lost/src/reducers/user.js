import TYPES from '../types/index'
const INITIAL_STATE = {
    users: [],
    createMessage: '',
    deleteMessage: '',
    updateMessage: '',
    ownUser: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TYPES.GET_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case TYPES.CREATE_USER_SUCCESS:
            return {
                ...state,
                createMessage: 'success'
            }
        case TYPES.CLEAN_CREATE_USER_MESSAGE:
            return {
                ...state,
                createMessage: ''
            }
        case TYPES.CREATE_USER_FAILED:
            return {
                ...state,
                createMessage: action.payload
            }
        case TYPES.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteMessage: 'success'
            }
        case TYPES.DELETE_USER_FAILED:
            return {
                ...state,
                deleteMessage: action.payload
            }
        case TYPES.CLEAN_DELETE_USER_MESSAGE:
            return {
                ...state,
                deleteMessage: ''
            }
        case TYPES.UPDATE_USER_SUCCESS:
            return {
                ...state,
                updateMessage: 'success'
            }
        case TYPES.UPDATE_USER_FAILED:
            return {
                ...state,
                updateMessage: action.payload
            }
        case TYPES.CLEAN_UPDATE_USER_MESSAGE:
            return {
                ...state,
                updateMessage: ''
            }
        default:
            return state
    }
}