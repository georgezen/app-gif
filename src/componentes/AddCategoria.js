import { useState } from "react";
import  PropTypes  from "prop-types";

const AddCategoria = ({setCategory}) => {

     const [input, setstate] = useState('');

     const changeInput = (e) => {
        setstate(e.target.value);
        console.log(e.target.value);
     }

     const submitForm = (e) => {
        e.preventDefault();
        
        if (input === "") {
            alert("escribe algo pendejo");
            return false;
        }
            
        
        setCategory(cats => [input,...cats ]);
        setstate('');
     }

    return (
        <form onSubmit={submitForm}>
            <input type="text" value={input} onChange={changeInput}/>
            
        </form>
    )
}

AddCategoria.propTypes = {
    setCategory: PropTypes.func.isRequired,
}

export default AddCategoria;