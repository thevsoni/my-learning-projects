import React from 'react'

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('currentuser'));

    function logout() {
        localStorage.removeItem('currentuser');
        window.location.href = '/login'
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">The Hotel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fa-solid fa-bars" style={{ color: "white" }}></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-5">
                        {user ?
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa-solid fa-user" style={{ marginRight: "5px" }}></i>{user.name}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Bookings</a>
                                    <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
                                </div>
                            </div>
                            :
                            <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar