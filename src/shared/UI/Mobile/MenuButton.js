import React, { useState } from 'react'

import MenuMobile from './MenuMobile'

const MenuButton = () => {

    const [visible, setVisible] = useState(false)

    const clicked = () => {
        setVisible((visible) => !visible);
        //setVisible(!visible)
    }


    return (
        <>
            <div className="btn__navigation" onClick={clicked}>
                <span className={`btn__navigation__icon ${visible ? 'btn__navigation__icon__clicked' : ''}`}>&nbsp;</span>
            </div>
            <MenuMobile visible={visible} clicked={clicked} />
        </>
    )
}

export default MenuButton

