import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditBook = () => {
    let navigate = useNavigate();

    const {id} =useParams()

    const [book, setBook] = useState({
        id: null,
        title: null,
        author: null,
        year: null,
    });

    const { title, author, year } = book;

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadBook()
    },[])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/books/${id}`, book);
        navigate("/");
    };


    const loadBook  = async () => {
        const result= await axios.get(`http://localhost:8080/books/${id}`)
        setBook(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div
                    className={
                        "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
                    }
                >
                    <h2 className={"text-center m-4"}>Редактирование книги</h2>

                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <div className={"mb-3"}>
                            <label htmlFor={"Title"} className={"form-label"}>
                                Название
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Введите название"}
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
                                placeholder={"Введите год издания"}
                                name={"year"}
                                value={year}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button type={"submit"} className={"btn btn-success"}>
                            Изменить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditBook;