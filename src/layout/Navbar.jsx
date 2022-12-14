import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Библиотека Spring и React</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*кнопка добавления книги*/}
                    <Link className={"btn btn-outline-light"} to={"/add-book"}>Добавить книгу</Link>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;