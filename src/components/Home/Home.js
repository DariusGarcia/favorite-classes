import React, { useState } from 'react';
import ClassGraphQL from "../Class/ClassGraphQL";
import "./Home.css";


function Home(props) {

    const [value, setValue] = useState('');
    const [favoriteClasses, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const changeCase = (event) => {
        event.preventDefault();
        setValue(event.target.value.toUpperCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)) {
            setClasses(favoriteClasses.concat(value));
            setValue('');
        }


        console.log(favoriteClasses);
    }

    window.onload = function() {
        document.getElementById("input").focus();
      };

    return (
        <div>
            <header className="header">
                <h1 className="fav-classes">Favorite Classes</h1>
            </header>

            <form onSubmit={handleSubmit}>
                <label className="add-fav"> Enter Favorite Class: </label>
                <input type="text" value={value} onChange={handleChange} className="class-input" id="input"
                    onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()}>
                </input>
                <button className="btn" type="submit">Add class #{favoriteClasses.length + 1}</button>
            </form>
            <div className="classes-container">
                {favoriteClasses.map((favClass) =>
                    <ClassGraphQL name={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>
        </div>

    )
    
}

export default Home;