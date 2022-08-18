import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Navbar(props) {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">{props.aboutText}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">{props.contact}</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>

    )
}

export default Navbar