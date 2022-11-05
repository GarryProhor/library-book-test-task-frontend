import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/books");
        setBooks(result.data);
    };


    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:8080/books/${id}`);
        loadBooks();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Год</th>
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((book) => (
                            <tr key={book.id}>
                                <th scope="row">
                                    {book.id}
                                </th>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                                <td>
                                    <Link className={"btn btn-primary mx-2"}
                                          to={`/view-book/${book.id}`}
                                    >
                                        Посмотреть
                                    </Link>
                                    <Link
                                        className={"btn btn-outline-primary mx-2"}
                                        to={`/edit-book/${book.id}`}
                                    >
                                        Редактировать
                                    </Link>
                                    <button
                                        className={"btn btn-danger mx-2"}
                                        onClick={() => deleteBook(book.id)}
                                    >
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;