import React from 'react';

const ErrorModal = ({ errortext, clicked }) => {
    return (
        <div className="backDrop">
            <div className="ErrorModal">
                <div className="ErrorModal__header">
                    <h2 className="ErrorModal__header--text">ERROR!!</h2>
                </div>
                <div className="ErrorModal__body">
                    <p className="ErrorModal__body--text">{errortext}</p>
                </div>
                <div className="ErrorModal__footer">
                    <div onClick={clicked} className="ErrorModal__footer--text">
                        <div onClick={clicked} className="ErrorModal__footer--text--inner">
                            <p onClick={clicked}>OK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal
