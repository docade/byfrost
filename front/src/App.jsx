import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import "antd/dist/reset.css";
import BasicLayout from "./component/LayOut/BasicLayout";
import Test from "./page/Test";
import Chainrunner from "./component/Chainrunner";

function App() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/chainrunner" element={<Chainrunner />}></Route>
      </Routes>
    </BasicLayout>
  );
}

export default App;
