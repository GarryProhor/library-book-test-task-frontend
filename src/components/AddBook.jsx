import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const AddBook = () => {
    let navigate = useNavigate();

    const [book, setBook] = useState({
        id: null,
        title: null,
        author: null,
        year: null,
    });

    const {title, author, year } = book;

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
        //проверить компоненты
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/books", book);
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row">
                {/*col-md-6 : colums of medium size with 6 span */}
                <div
                    className={
                        "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
                    }
                >
                    <h2 className={"text-center m-4"}>Добавить книгу</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className={"mb-3"}>
                            <label htmlFor={"Title"} className={"form-label"}>
                                Название книги
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Введите название книги"}
                                name={"title"}
                                value={title}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor={"Author"} className={"form-label"}>
                                Автор
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Введите автора"}
                                name={"author"}
                                value={author}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor={"Year"} className={"form-label"}>
                                Год издания
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Введите год"}
                                name={"year"}
                                value={year}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type={"submit"} className={"btn btn-outline-primary"}>
                            Добавить
                        </button>

                        <Link className={"btn btn-outline-danger mx-2"} to={"/"}>Отмена</Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBook;