import React from 'react'
import ListItem from '../components/ListItem'
import { listado } from './listado'


const List = () => {

    return (
        <div className="List">
            <input type="text" className="List__searchBox" />
            <div className="List__techs">
                {listado.map(tech => {
                    return <ListItem year={tech.year}
                        author={tech.author}
                        license={tech.license}
                        languaje={tech.language}
                        type={tech.type}
                        logo={tech.logo}
                        tech={tech.tech} />
                })}
            </div>
            <p className="List__footer">Tecnologías listadas: {listado.length}</p>
        </div>
    )
}

export default List
