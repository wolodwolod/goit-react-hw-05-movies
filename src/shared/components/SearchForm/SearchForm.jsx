import { useState, useEffect, createRef, memo } from "react";
import s from "./search-form.module.scss"

const SearchForm = ({onSubmit}) => {
    // console.log("Render")
    
    const [form, setForm] = useState({
        query: ""
    });

    const inputRef = createRef(null);

    useEffect(()=> {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }, [inputRef]);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
console.log(form.query)
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit(form);
        setForm({
            query: ""
        });
        console.log(form.query); 
    }

    return (
        <form className={s.searchForm } onSubmit={handleSubmit} action="">
            <input ref={inputRef} onChange={handleChange} value={form.query} type="text" name="query" placeholder="Movie title" />
            <button type="submit">Search</button>
        </form>
    )
}

export default memo(SearchForm);