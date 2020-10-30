import React from 'react';

const ErrorModal = ({ errortext, clicked }) => {
    return (

        <div className="ErrorModal">
            <div className="ErrorModal__header">
                <h2 className="ErrorModal__header--text">ERROR!!</h2>
            </div>
            <hr />
            <div className="ErrorModal__body">
                <p className="ErrorModal__body--text">{errortext}</p>
            </div>
            <hr />
            <div className="ErrorModal__footer">
                <div onClick={clicked} className="ErrorModal__footer--text">

                    <p onClick={clicked}>Cerrar</p>

                </div>
            </div>
        </div>

    )
}

export default ErrorModal
