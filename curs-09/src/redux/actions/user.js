
import {signInWithGoogle} from '../../apis/firebase'

export function updateUserData(payload) {
    return {
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export function startLoading() {
    return {
        type: 'START_LOADING'
    }
}

export function updateError(payload) {
    return {
        type: 'UPDATE_ERROR',
        payload
    }
}

// actiuni mai speciale -- returneaza o functie iniante un obiect
export function signInWithGoogleAction() {
    return (dispatch) => {
        dispatch(startLoading())/* imediat ce a dat userul click pe login */

        signInWithGoogle() /* functie preluata din firebase */
        .then((result) => {
            const userData = result.user;
            dispatch(updateUserData(userData))
        })
        .catch(error => {
            dispatch(updateError(error))
        })
    }
}

export function signOut(payload) {


}