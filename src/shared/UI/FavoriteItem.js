import React, { useContext } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { FavoritesContext } from '../Contexts/FavoritesContext';
import { AuthContext } from '../../auth/AuthContext'

const FavoriteItem = () => {

    const { favorites } = useContext(FavoritesContext)

    const { user: { name } } = useContext(AuthContext)

    let item;


    if (favorites.length > 0 && name) {
        item = <li>
            <p className="favoriteItem"><FavoriteIcon style={{ fontSize: "30px", color: "#a3cc39", marginLeft: "15px" }} />
                <span className="favoriteItem--text">Techs:</span> {favorites.length}</p>
        </li>
    }
    else {
        item = null
    }


    return (
        <>
            {item}
        </>
    )
}

export default FavoriteItem