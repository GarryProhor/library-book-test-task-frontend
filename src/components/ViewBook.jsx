import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewBook = () => {
    const [book, setBook] = useState({
        id: null,
        title: "",
        author: "",
        year: null,
    });

    const { id } = useParams();

    useEffect(() => {
        loadBook();
    });

    const loadBook = async () => {
        const result = await axios.get(`http://localhost:8080/books/${id}`);
        setBook(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div
                    className={
                        "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
                    }
                >
                    <h2 className={"text-center m-4"}>Информация о книге</h2>

                    <div className="card">
                        <div className="card-header">
                            Информация о книге id : {book.id}
                            <ul className={"list-group list-group-flush"}>
                                <li className="list-group-item">
                                    <b>Название: </b>
                                    {book.title}
                                </li>
                                <li className="list-group-item">
                                    <b>Автор: </b>
                                    {book.author}
                                </li>
                                <li className="list-group-item">
                                    <b>Год издания: </b>
                                    {book.year}
                                </li>
                            </ul>
                        </div>

                    </div>
                    <Link className={"btn btn-primary my-2"} to={"/"}>Вернуться на главную</Link>
                </div>

            </div>

        </div>
    );
};

export default ViewBook;