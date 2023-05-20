import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import "antd/dist/reset.css";
import BasicLayout from "./component/LayOut/BasicLayout";
import Test from "./page/Test";
import Chainrunner from "./component/Chainrunner";
import Minting from "./component/NFTminting";

function App() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/chainrunner" element={<Chainrunner />}></Route>
        <Route path="/minting" element={<Minting />}></Route>
      </Routes>
    </BasicLayout>
  );
}

export default App;
