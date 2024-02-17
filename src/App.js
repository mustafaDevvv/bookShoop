import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BooksComponents from "./components/ComBook/BooksComponents";
import AllBooks from "./components/Section/AllBooks";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import Detail from "./components/pages/BookDetail/Detail";
import Ruless from "./components/pages/Ruless";
import Rubin from "./components/pages/Rubin/Rubin";
import Colleens from "./components/pages/Colleens/Colleens";
import Thunberg from "./components/pages/Thunberg/Thunberg";
import Potter from "./components/pages/Potter/Potter";
import Hoover from "./components/pages/Hoover/Hoover";
import Starts from "./components/pages/Starts/Starts";
import Shoes from "./components/pages/Shoes/Shoes";
import AdminPage from "./components/AdminPage/Admin";
import AdminMain from "./components/AdminPage/AdminMain";
import Basket from "./basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/bookscomponents" element={<BooksComponents />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recent" element={<Cart />} />
        <Route path="/book/:id" element={<Detail />} />

        <Route path="/book-2" element={<Ruless />} />
        <Route path="/book-3" element={<Rubin />} />
        <Route path="/colleens" element={<Colleens />} />
        <Route path="/thunberg" element={<Thunberg />} />
        <Route path="/potter" element={<Potter />} />
        <Route path="/hoover" element={<Hoover />} />
        <Route path="/starts" element={<Starts />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminMain" element={<AdminMain />} />
        <Route path="/bagg" element={<Basket/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
