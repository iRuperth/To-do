import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setTodos(todos.concat(inputValue));
            setInputValue(""); 
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>To do </h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={handleKeyPress}
                        placeholder="What do you need to do?"/>
                </li>
                {todos.map((item, index) => (
                    <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                            <i class="bi bi-star-fill"></i>
                            {item}
                        </span>{" "}
                        <button class="buttonDelete" onClick={() => handleDelete(index)}>
						DELETE
                        </button>
                    </li>
                ))}
            </ul>
            <div> {todos.length} tasks left</div>
        </div>
		
    );
	
};

export default Home;
