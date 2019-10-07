// REDUCERS
import {actionTypes} from './types';
import {filterToggleAC} from "./actions";

export const reducer = (state, action) => {
console.log('reducer initial state games', state.games.length);
console.log('reducer initial state clubs', state.clubs.length);
    switch (action.type) {

        case actionTypes.REQUEST_CLUBS:
            return ({...state, loadingClub: true, errorClub: false, loading: true});
        case actionTypes.REQUEST_GAMES:
            return ({...state, loadingGame: true, errorGame: false, loading: true});
        case actionTypes.REQUESTED_CLUBS:
            return ({...state, clubs: action.clubs, loadingClub: false, errorClub: false, loading: false});
        case actionTypes.REQUESTED_GAMES:
            return ({...state, games: action.games, loadingGame: false, errorGame: false, loading: false});
        case actionTypes.REQUEST_FILTER_TOGGLE_CLUBS:
            const stateCopy = {...state};
            stateCopy.clubsFilterToggle[action.category][action.item] = !stateCopy.clubsFilterToggle[action.category][action.item];
            return stateCopy;
        case actionTypes.REQUEST_FILTER_TOGGLE_GAMES:
            const stateCopy1 = {...state}; // ВОПРОС
            stateCopy1.gamesFilterToggle[action.category][action.item] = !stateCopy1.gamesFilterToggle[action.category][action.item];
            return stateCopy1;
        case actionTypes.SWITCH_PAGINATION_VALUE:
            return ({
                ...state,
                paginationValue: action.value,
            });
        case actionTypes.CHANGE_MAP:
            return ({
                ...state,
                map: true,
            });
        case actionTypes.OFF_CHANGE_MAP:
            return ({
                ...state,
                map: false,
            });
        case actionTypes.SHOW_FILTER_TOGGLE:
            return ({
                ...state,
                showFilter: !state.showFilter,
            });
        case actionTypes.CURRENT_PAGE:
            return ({
                ...state,
                currentPage: action.pageNumber,
            });
        case actionTypes.SWITCH_CARUSEL_INDEX:
            return ({
                ...state,
                caruselIndex: action.caruselIndex,
            });
        case actionTypes.SWITCH_SCREEN_MODE:
            return ({
                ...state,
                screenMode: action.screenMode,
            });
        //***************LOGIN-LOGOUT*************
        case actionTypes.REQUEST_LOGIN:
            return ({...state, logging: true});
        case actionTypes.REQUEST_END_LOGIN:
            return ({...state, logging: false});
        case actionTypes.LOGIN_SUCSESS:
            return ({...state, isLogged: true});
        case actionTypes.LOGIN_REJECT:
            return ({...state, isLogged: false});
        //******************************

        default:
            return state;
    }
};
