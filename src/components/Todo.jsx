import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPlus } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
// import FilterButton from './FilterButton';
import TodoList from './TodoList';

function Todo() {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddToDo = (text) => {
        dispatch(addTodo(text));
    };

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddToDo(newTodoText.trim());
            setNewTodoText("");
        }
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', padding: '16px', backgroundColor: '#f3f3f3', borderRadius: '8px' }}>
            <h2 style={{ marginTop: '12px', marginBottom: '24px', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
                To-Do App
            </h2>
            <div className="d-flex align-items-center">
                <input
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    type="text"
                    id="addTodoInput"
                    placeholder="Add Todo"
                    className="form-control"
                />
                <button className="ms-2 btn btn-primary d-flex align-items-center" onClick={handleAddTodoClick}>
                    <FiPlus />
                </button>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-between align-items-center">
                {/* <FilterButton /> */}
                {/* <div className="d-flex align-items-center">
                    <input
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        type="text"
                        id="searchTodoInput"
                        placeholder="Search"
                        className="form-control"
                    />
                    <button className="ms-2 btn btn-primary d-flex align-items-center">
                        <BsSearch />
                    </button>
                </div> */}
            </div>
            <TodoList/>
        </div>
    );
}

export default Todo;
