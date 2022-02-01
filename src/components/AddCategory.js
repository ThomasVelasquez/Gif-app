import React, { useState } from 'react'
import PropTypes from 'prop-types'
const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const inputChange = (e) =>{
        setInputValue(e.target.value)   
    }
    
    const submitForm =(e) =>{
        e.preventDefault()
        
        if(inputValue.trim().length > 3){
            setCategories( cats =>[inputValue,...cats] )
            setInputValue('')
        }else{

        }
    
    }

    return (
        <form onSubmit={submitForm}>
            <input
            type="text"
            value={inputValue}
            onChange={inputChange}
            />
        </form>
    )
}

 AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired
 }


export default AddCategory