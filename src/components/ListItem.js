import React, { useEffect, useState, useContext } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { FavoritesContext } from '../shared/Contexts/FavoritesContext'
import { types } from '../types/types'



const ListItem = ({ year, author, license, languaje, type, logo, tech }) => {

    const [isfavorite, setIsFavorite] = useState(false)

    const { favorites, dispatchFav } = useContext(FavoritesContext)


    useEffect(() => {
        favorites.forEach(element => {
            if (element === tech) {
                setIsFavorite(true)
            }
        });

    }, [isfavorite])

    const favorite = () => {
        setIsFavorite(true)
        dispatchFav({
            type: types.addFavorite,
            payload: tech

        })

    }

    const nofavorite = () => {
        setIsFavorite(false)
        dispatchFav({
            type: types.removeFavorite,
            payload: tech
        })
    }

    return (
        <div className="ListItem" key={tech}>
            <div className="ListItem__logo">
                <img src={logo} />
            </div>

            <div className="ListItem__info">
                <p><span style={{ color: "#2aa7df" }}>Tech:</span> {tech}</p>
                <p><span style={{ color: "#2aa7df" }}>Year:</span> {year}</p>
                <p><span style={{ color: "#2aa7df" }}>Autor:</span> {author}</p>
                <p><span style={{ color: "#2aa7df" }}>License:</span> {license}</p>
                <p><span style={{ color: "#2aa7df" }}>Languaje:</span> {languaje}</p>
                <p><span style={{ color: "#2aa7df" }}>Type:</span> {type}</p>
            </div>

            <div className="ListItem__fav">
                {isfavorite ?
                    <FavoriteIcon style={{ fontSize: "30px", cursor: "pointer", color: "#a3cc39" }} onClick={nofavorite} /> :
                    <FavoriteBorderIcon style={{ fontSize: "30px", cursor: "pointer" }} onClick={favorite} />
                }


            </div>
        </div>
    )
}

export default ListItem
