import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './components/product/Product';
import About from './components/about/About';
import FriendEmail from './components/friendEmail/FriendEmail';


const router = createBrowserRouter([
 
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path:"/friend",
    element:<Product/>
  },
  {
    path:"/about/:friendId",
    element:<About/>
  },
  {
    path:"/email/:email",
    element:<FriendEmail></FriendEmail>
  }
])
function App() {
  return (
    <div className="App">
      <h1>Frond page</h1>
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
