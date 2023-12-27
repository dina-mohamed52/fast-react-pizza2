import Header from "./Header";
import CartOverView from "../cart/CartOverview"
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";
function AppLayOut ()
{
    const navigation = useNavigation()
    const IsLoading=navigation.state==="loading"
    return (
      <div className="grid grid-rows-[auto_1fr_auto] h-screen">
        {IsLoading && <Loading />}
      
        <Header />
        <div className="overflow-scroll">
          <main className=" max-w-3xl mx-auto ">
            <Outlet />
          </main>
        </div>

        <CartOverView />
      </div>
    );
}

export default AppLayOut
