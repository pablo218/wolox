import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';



const ListItem = ({ year, author, license, languaje, type, logo, tech }) => {

    const [isfavorite, setIsFavorite] = useState(false)

    const favorite = () => {
        setIsFavorite(true)
    }

    const nofavorite = () => {
        setIsFavorite(false)
    }

    return (
        <div className="ListItem">
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
