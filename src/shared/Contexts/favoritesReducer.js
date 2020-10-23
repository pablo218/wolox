import { types } from '../../types/types'

export const favoritesReducer = (state = {}, action) => {


    switch (action.type) {

        case types.addFavorite:

            const newState = [...state, action.payload]

            localStorage.setItem("tech", JSON.stringify(newState))

            return [
                ...newState
            ]


        case types.removeFavorite:

            const upDatedState = state.filter(favs => (
                favs.tech !== action.payload.tech
            ))

            localStorage.setItem("tech", JSON.stringify(upDatedState))

            return [
                ...upDatedState
            ]
        default:
            return state
    }

}