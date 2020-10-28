import React, { useContext } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { AuthContext } from '../../auth/AuthContext'

const FavoriteItem = () => {

    const favorites = JSON.parse(localStorage.getItem("tech"))

    const { user } = useContext(AuthContext)

    let item;


    if (favorites?.length > 0 && user.logged) {
        item = <li>
            <p className="favoriteItem"><FavoriteIcon className="heart" style={{ fontSize: "30px", color: "#a3cc39", marginLeft: "15px" }} />
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