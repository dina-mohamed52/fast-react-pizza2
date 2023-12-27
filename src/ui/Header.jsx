import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import UserName from "../user/UserName";

function Header() {
    return (
      <header className="bg-yellow-400 uppercase tracking-widest 
      border-b border-2 border-stone-800 p-4
      flex items-center justify-between
      sm:px-8">
        <Link to="/">fast-react-pizza</Link>
        <SearchOrder />
        <UserName />
      </header>
    );
}

export default Header
