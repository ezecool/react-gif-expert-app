import React, {useState} from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => { // deestructuro los argumentos en lugar de props

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setCategories se puede llamar con un callback que tiene el estado anterior
        setCategories( cats => [inputValue]);
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{inputValue}</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
};
/* 
AddCategory.propTypes = {
    setCategories: PropTypes.isRequired
} */

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};
