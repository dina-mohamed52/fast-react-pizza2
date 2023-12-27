import { Link } from "react-router-dom";


function Button ( { children,onClick, disabled ,to ,type } )
{
    // const className = "bg-yellow-400 uppercase font-semibold mx-3 my-4 px-3 py-3 text-base text-stone-800 transition-colors duration-300 rounded-full focus:ring focus:ring-yellow-300 hover:bg-yellow-300 focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed  " 

const base =
  "bg-yellow-400 uppercase font-semibold  text-stone-800 transition-colors duration-300 rounded-full focus:ring focus:ring-yellow-300 hover:bg-yellow-300 focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed ";
  
  const style = {
    primary: base + " mx-3 my-4 px-3 py-3 text-sm",
    small: base + "mx-2 my-2 px-3 py-2 text-xs ",
    secandry:
      " px-4 py-2.5 text-sm bg-stone-300 hover:text-stone-800 uppercase font-semibold text-base text-stone-400 transition-colors duration-300 rounded-full focus:ring focus:ring-stone-300 hover:bg-stone-300 focus:outline-none focus:ring-offset-2 disabled:cursor-not-allowed ",
    round: base + " px-2.5 py-1  md:py-1.5 md:px-3 text-sm ",
  };
  
  if ( to ) return <Link to={ to } className={ style[type] } >{ children }</Link>
  return (
      <button
          disabled={disabled}
      className={ style[ type ] }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button
