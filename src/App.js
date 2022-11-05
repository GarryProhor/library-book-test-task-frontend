import './App.css';
import Navbar from "./layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ViewBook from "./components/ViewBook";
import EditBook from "./components/EditBook";
import AddBook from "./components/AddBook";

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route exact path={"/add-book"} element={<AddBook/>}/>
            <Route exact path={"/edit-book/:id"} element={<EditBook/>}/>
            <Route exact path={"/view-book/:id"} element={<ViewBook/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
