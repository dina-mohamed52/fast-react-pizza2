import { useLoaderData } from "react-router-dom";
import { getMenu } from "../serveses/apiRestaurant";
import MenuItem from "./MenuItem";

export async function loader ()
{
  const menu = await getMenu();
  
  return menu
}
function Menu ()
{
   const Menu=useLoaderData()
  return <ul className=" space-y-2 divide-y divide-stone-200" >
 {Menu.map((pizza)=><MenuItem pizza={pizza} key={pizza.id}/>)}
  </ul>;
}

export default Menu;
