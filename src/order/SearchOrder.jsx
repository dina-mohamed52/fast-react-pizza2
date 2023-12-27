import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder ()
{
    const navigate = useNavigate()
    const [ query, setQuery ] = useState( "" )
    function handleSubmit (e)
    {
        e.preventDefault()
        navigate( `order/${ query }` )
        setQuery("")
    }
    return (
        <form onSubmit={handleSubmit}>

        <input placeholder="search by id"
                value={ query }
                className="rounded-full bg-yellow-100 placeholder:text-stone-400 
            px-4 py-2 w-28 border border-spacing-1 focus:outline-none focus:ring
            focus:ring-yellow-500  sm:focus:w-72 transition-all duration-300 sm:w-64 text-sm
                "
                onChange={ ( e ) => setQuery( e.target.value ) } />
            </form>
     
    
    )
}

export default SearchOrder
