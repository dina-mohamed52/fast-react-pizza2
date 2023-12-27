
import { useSelector } from 'react-redux';
import CreateUser from '../user/CreateUser'
import Button from './Button';
function Home ()
{
  const username=useSelector((state)=>state.user.username)
  return (
    <div className=" my-8 text-center  text-stone-700 text-xl font-semibold md:mx-8">
      <h1 className="my-8 text-2xl ">
        The best pizza.
        <br />
        <span className="0 text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      { username === "" ? <CreateUser /> : <Button to="/menu" type="primary" >
      Continue Ordering...{username} 
      </Button> }
    </div>
  );
}

export default Home;
