import React from 'react'

const Noteitem = (props) => {
    return (
        <>
        <div className="row my-3">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Noteitem