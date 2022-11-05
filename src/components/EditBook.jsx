import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditBook = () => {
    let navigate = useNavigate();

    const {id} =useParams()

    const [book, setBook] = useState({
        id: null,
        title: "",
        author: "",
        year: null,
    });

    const { title, author, year } = book;

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadBook()
    },[])

    const onSubmit = async (e) => {
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
                {/*col-md-6 : colums of medium size with 6 span */}
                <div
                    className={
                        "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
                    }
                >
                    <h2 className={"text-center m-4"}>Редактирование книги</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className={"mb-3"}>
                            <label htmlFor={"Название"} className={"form-label"}>
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
                            <label htmlFor={"Name"} className={"form-label"}>
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
                            <label htmlFor={"Name"} className={"form-label"}>
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