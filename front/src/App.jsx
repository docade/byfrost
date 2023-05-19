import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import "antd/dist/reset.css";
import BasicLayout from "./component/LayOut/BasicLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
