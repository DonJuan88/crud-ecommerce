
import './index.css'
import Navbar from './modals/navbar';
import Home from './views/Home';
import About from "./views/AboutUs";
import Contact from "./views/Contact";
import ViewItem from "./views/ViewItem";
import Shop from "./views/Shop";
import ListItem from "./views/Item/ListItems";
import CreateUpdate from './views/Item/CreateUpdate'
import Login from './views/Login';
import Register from './views/Register';

function App() {
       let Component;
       switch (window.location.pathname) {
         case "/":
           Component = <Home />;
           break;
         case "/about":
           Component = <About />;
           break;
         case "/contact":
           Component = <Contact />;
           break;
         case "/shop":
           Component = <Shop />;
           break;
         case "/view-item":
           Component = <ViewItem />;
           break;
         case "/list-item":
           Component = <ListItem />;
           break;
         case "/create-update":
           Component = <CreateUpdate />;
           break;
         case "/login":
           Component = <Login />;
           break;
         case "/signup":
           Component = <Register />;
           break;
       }
  return (
    <>
      <Navbar />
      <div className="mt-2">{Component}</div>
    </>
  );
}

export default App
