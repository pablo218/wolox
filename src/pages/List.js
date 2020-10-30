import React, { useEffect, useState } from 'react';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useTranslation } from 'react-i18next'

import Spinner from '../shared/UI/Spinner/Spinner'
import ListItem from '../components/ListItem';
import { useFetch } from '../shared/hooks/fetch-hook'
import ErrorModal from '../shared/UI/ErrorModal'
import BackDrop from '../shared/UI/BackDrop'

const List = () => {

    const { t } = useTranslation()

    const [listado, setListado] = useState([])
    const [favState, setfavState] = useState([])
    const [value, setValue] = useState("")
    const [orderA, setOrderA] = useState(false)
    const [orderZ, setOrderZ] = useState(false)

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const { isLoading, error, sendRequest, clearError } = useFetch();

    useEffect(() => {
        try {
            sendRequest("http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs")
                .then(response => {
                    setListado(response)
                })
        }
        catch { }

    }, [sendRequest])


    /***filtros****/


    let listadoFiltrado;

    if (value !== "") {
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

    /*****favoritos*****/

    let favoritos = JSON.parse(localStorage.getItem("tech"))

    const favoriteClick = (tech) => {

        const newFav = [...favoritos, tech]
        localStorage.setItem("tech", JSON.stringify(newFav))
        setfavState(newFav)

    }

    const nofavoriteClick = (tech) => {

        const newFav = favoritos.filter(fav => fav !== tech)

        localStorage.setItem("tech", JSON.stringify(newFav))
        setfavState(newFav)
    }

    const okHandler = () => {
        clearError()
    }

    return (
        <>
            {error && <ErrorModal errortext={error} clicked={okHandler} />}
            {error && <BackDrop />}
            <div className="List">
                <div className="List__header">
                    <div className="List__header--search">
                        {favoritos.length > 0 ?
                            <div className="List__header--search--favs">
                                <p style={{ fontSize: "20px" }} >{favoritos.length}</p>
                                <FavoriteIcon style={{ fontSize: "30px", marginRight: "20px", color: "#a3cc39" }} className="List__header--search--icon" />
                            </div>
                            : null
                        }
                        <input type="text"
                            className="List__searchBox"
                            value={value}
                            onChange={onChangeHandler}
                            placeholder={t("list.placeholder")}
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
                </div>

                {isLoading ? <Spinner /> :

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
                                favoriteClick={(tech) => favoriteClick(tech)}
                                nofavoriteClick={(tech) => nofavoriteClick(tech)}
                            />
                        })}

                    </div>

                }


                <p className="List__footer">{t("list.footer")} {listadoFiltrado.length}</p>
            </div>

        </>
    )
}

export default List