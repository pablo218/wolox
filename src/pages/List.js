import React, { useState, useContext, useEffect } from 'react'

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import ListItem from '../components/ListItem'
//import NavBar from '../shared/UI/NavBar'
import { listado } from './listado'
import { Language } from '../shared/Contexts/LanguageContext'


const List = () => {

    const eng = useContext(Language).english

    const [value, setValue] = useState("")
    const [orderA, setOrderA] = useState(false)
    const [orderZ, setOrderZ] = useState(false)
    const [favorites, setFavorites] = useState(0)


    useEffect(() => {

        if (localStorage.getItem("tech") === null) {
            localStorage.setItem("tech", JSON.stringify([]))
        }
        else {

            let favoritas = localStorage.getItem("tech")
            favoritas = JSON.parse(favoritas)

            setFavorites(favoritas.length)
        }


    }, [])


    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    let listadoFiltrado;

    if (value != "") {
        listadoFiltrado = listado.filter(tech => (
            tech.tech.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            tech.type.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        ))
    }
    else {
        listadoFiltrado = listado
    }


    if (orderA) {
        listadoFiltrado.sort((a, b) => {
            if (a.tech > b.tech) {
                return 1;
            } else if (a.tech < b.tech) {
                return -1;
            }
            return 0
        })
    }
    if (orderZ) {
        listadoFiltrado.sort((a, b) => {
            if (a.tech > b.tech) {
                return -1;
            } else if (a.tech < b.tech) {
                return 1;
            }
            return 0
        })
    }



    const orderListA = () => {
        setOrderZ(false)
        setOrderA(x => !x)
    }

    const orderListZ = () => {
        setOrderA(false)
        setOrderZ(x => !x)
    }



    return (
        <div className="List">
            <div className="List__header">
                <div className="List__header--search">
                    <input type="text"
                        className="List__searchBox"
                        value={value}
                        onChange={onChangeHandler}
                    />
                    <div className="List__header--filters">
                        <div>
                            <ArrowDownwardIcon style={{ fontSize: "30px" }} />
                            {
                                orderA ?
                                    <CheckBoxIcon style={{ fontSize: "30px", cursor: "pointer", color: "#2aa7df" }} onClick={orderListA} /> :
                                    <CheckBoxOutlineBlankIcon style={{ fontSize: "30px", cursor: "pointer", color: "#2aa7df" }} onClick={orderListA} />
                            }
                        </div>
                        <div >
                            <ArrowUpwardIcon style={{ fontSize: "30px" }} />
                            {
                                orderZ ?
                                    <CheckBoxIcon style={{ fontSize: "30px", cursor: "pointer", color: "#2aa7df" }} onClick={orderListZ} /> :
                                    <CheckBoxOutlineBlankIcon style={{ fontSize: "30px", cursor: "pointer", color: "#2aa7df" }} onClick={orderListZ} />
                            }
                        </div>

                    </div>

                </div>

                <div className="List__header--navbar">

                    {favorites === 0 ? null :
                        <div className="List__header--navbar-favoritas">
                            <FavoriteIcon style={{ fontSize: "30px", cursor: "pointer", color: "#a3cc39", marginLeft: "15px" }} />
                            {eng ? "Favorites" : "Favoritas"}: {favorites}
                        </div>}

                    <img src="/assets/Ic_Wolox_Footer.svg" className="List__header--navbar-logo" />

                </div>
            </div>
            <div className="List__techs">
                {listadoFiltrado.map(tech => {
                    return <ListItem year={tech.year}
                        author={tech.author}
                        license={tech.license}
                        languaje={tech.language}
                        type={tech.type}
                        logo={tech.logo}
                        tech={tech.tech}
                        key={tech.tech}
                        setFavorites={setFavorites}
                    />
                })}
            </div>
            <p className="List__footer">{eng ? "Listed technologies:" : "Tecnologías listadas:"} {listadoFiltrado.length}</p>
        </div>
    )
}

export default List
