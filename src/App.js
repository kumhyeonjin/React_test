import "./css/App.css";
import "./css/my_reset.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  // let [list, setList] = useState([]);
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://carrepe.github.io/LayoutTest01/productData.json")
      .then((res) => {
        setData(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main list={data} />} />
        <Route path="/Shop" element={<div>Shop</div>} />
        <Route path="/Blog" element={<div>Blog</div>} />
        <Route path="/Ourstory" element={<div>Our Story</div>} />
        <Route path="/person" element={<div>개인화메뉴</div>} />
        <Route path="/detail" element={<div>상품상세페이지</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
