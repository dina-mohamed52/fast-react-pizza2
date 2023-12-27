
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Home from "./ui/Home"
import Menu ,{loader as menuLoader} from "./menu/Menu"
import Cart from "./cart/Cart"
import CreateOrder from "./order/CreateOrder"
import Order from "./order/Order"
import AppLayOut from "./ui/AppLayOut";
import Error from "./ui/Error"
import { loader as orderLoader } from "./order/Order";
import { action as createNewOrderAction } from "./order/CreateOrder";
const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement:<Error/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action:createNewOrderAction,
      },
      {
        //id start with : then name
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement:<Error/>
      },
    ],
  },
]);
function App ()
{
  return (
   <RouterProvider router={router}/>
  )
}

export default App
